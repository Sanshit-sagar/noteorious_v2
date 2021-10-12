

export function ListBox(props: ListBoxProps) {
    let ref = React.useRef<HTMLUListElement>(null);
    let { listBoxRef = ref, state } = props;
    let { listBoxProps } = useListBox(props, state, listBoxRef);

    return (
        <List {...listBoxProps} ref={listBoxRef}>
            {[...state.collection].map((item) => (
                <Option key={item.key} item={item} state={state} />
            ))}
        </List>
    );
}

interface OptionContextValue {
    labelProps: React.HTMLAttributes<HTMLElement>;
    descriptionProps: React.HTMLAttributes<HTMLElement>;
}

const OptionContext = React.createContext<OptionContextValue>({
    labelProps: {},
    descriptionProps: {}
});

function Option({ item, state }: OptionProps) {
    let ref = React.useRef<HTMLLIElement>(null)
    let {
        optionProps,
        labelProps,
        descriptionProps,
        isSelected,
        isFocused
    } = useOption({ key: item.key }, state, ref)
    
    return (
        <ListItem
            {...optionProps}
            ref={ref}
            isFocused={isFocused}
            isSelected={isSelected}
        >
            <ItemContent>
                <OptionContext.Provider value={{ labelProps, descriptionProps }}>
                    {item.rendered}
                </OptionContext.Provider>
            </ItemContent>
            {isSelected && (
                <CheckIcon aria-hidden="true" style={{ width: 18, height: 18 }} />
            )}
        </ListItem>
    );
}
    
    export function Label({ children }: { children: React.ReactNode }) {
        let { labelProps } = React.useContext(OptionContext);
        return <div {...labelProps}>{children}</div>;
    }
    
    const StyledDescription = styled.div`
        font-weight: normal;
        font-size: 12px;
    `;
    
    export function Description({ children }: { children: React.ReactNode }) {
        let { descriptionProps } = React.useContext(OptionContext);
        return (
        <StyledDescription {...descriptionProps}>{children}</StyledDescription>
        );
    }
    