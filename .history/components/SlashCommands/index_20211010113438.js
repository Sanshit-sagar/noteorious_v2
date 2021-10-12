import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";
import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";

export const SlashCommands = Extension.create({
  name: "slash-command",

  defaultOptions: {
    commands: [],
    filterCommands: (commands, query) => {
      return commands
        .filter((item) =>
          item.title.toLowerCase().startsWith(query.toLowerCase())
        )
        .slice(0, 10);
    },
    component: null,
    suggestion: {
      char: "/",
      startOfLine: true,
    },
  },

  addProseMirrorPlugins() {
    return [
        Suggestion({
            editor: this.editor,
            ...this.options.suggestion,
            items: (query) =>
                this.options.filterCommands(this.options.commands, query),
                command: ({ editor, range, props }) => {
                    props.command({ editor, range });
                },
                render: () => {
                    let component;
                    let popup;

                    return {    
                        onStart: (props) => {
                            component = new ReactRenderer(CommandsListController, {
                                editor: props.editor,
                                props: { 
                                    ...props, 
                                    component: this.options.component 
                                },
                            });

                            popup = tippy("body", {
                                getReferenceClientRect: props.clientRect,
                                appendTo: () => document.body,
                                content: component.element,
                                showOnCreate: true,
                                interactive: true,
                                trigger: "manua l",
                                placement: "bottom-start",
                            });
                        },
                        onUpdate: (props) => {
                            component.updateProps({
                                ...props,
                                component: this.options.component,
                            });

                            popup[0].setProps({
                                getReferenceClientRect: props.clientRect,
                            });
                        },
                        onKeyDown(props) {
                            return component.ref?.onKeyDown(props);
                        },
                        onExit() {
                            popup[0].destroy();
                            component.destroy();
                        },
                    };
                }
            },
        })
        ];
    }
});
