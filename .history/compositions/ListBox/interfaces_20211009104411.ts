import { RefObject, HTMLAttributes } from 'react'
import { AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'
import type { ListState } from 'react-stately'


export interface ListBoxProps extends AriaListBoxOptions<unknown> {
    listBoxRef?: RefObject<HTMLUListElement>;
    state: ListState<unknown>;
}
  
interface OptionProps {
    item: Node<unknown>;
    state: ListState<unknown>;
}

interface OptionContextValue {
    labelProps: HTMLAttributes<HTMLElement>;
    descriptionProps: HTMLAttributes<HTMLElement>;
}


import { Flex } from '../Flex'