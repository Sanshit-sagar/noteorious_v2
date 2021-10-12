
import React, { useRef, RefObject, HTMLAttributes } from 'react'
import { ComboBoxProps } from '@react-types/combobox'
import { useFilter, useButton, useHover, mergeProps, useComboBox, useSearchField } from 'react-aria' 
import { useSearchFieldState } from 'react-stately'
import { Item, Section } from '@react-stately/collections'

import { Popover } from '../Popover'
import { ListBox } from '../ListBox'
import { ComboBox } from '../ComboBox'

import { Flex } from '../Flex'
import { Text } from '../../primitives/Text' 
import { Button } from '../../primitives/Button'

import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'
// import { Tooltip } from '../Tooltip'

export function SearchBar<T extends object>(props: ComboBoxProps<T>) {
    let { contains } = useFilter({ sensitivity: 'base' })
    const state = useSearchFieldState({ ...props, defaultFilter: contains })

    const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null) 
    const buttonRef: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    const popoverRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    const { listboxProps, inputProps, labelProps } = useComboBox({ ...props, inputRef, buttonRef, popoverRef })

    let searchProps = {
        
    }
    let searchProps = useSearchState(searchProps)

    return (

    );
}