
import React, { useRef, RefObject, HTMLAttributes } from 'react'
import { styled } from '../../stitches.config'

import { ComboBoxProps } from '@react-types/combobox'
import { useFilter, useButton, useHover, mergeProps, useComboBox, useSearchField } from 'react-aria' 
import { useComboBoxState, useSearchFieldState } from 'react-stately'

import { Popover } from '../Popover'
import { ListBox } from '../ListBox'
import { ComboBox } from '../ComboBox'

import { Flex } from '../Flex'
import { Text } from '../../primitives/Text' 
import { IconButton } from '../../primitives/IconButton'

import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'

const Container = styled('div', {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    marginTop: '$2',
    bc: '$loContrast',
    borderColor: 'white'
});

const Label = styled('label', {
    display: 'inline-block',
    textAlign: 'left',
});

const InputGroup = styled('div', {
    position: 'relative',
    paddingLeft: '$2',
    paddingRight: '$2',
    display: 'flex',
    fd: 'row',
    jc: 'flex-start',
    ai: 'center',
    gap: '$1',
    border: '1px solid $border',
    br: '$2',
    overflow: 'hidden',
    textOverflow: 'ellipses'
});

const Input = styled('input', {
    height: 35,
    margin: 0,
    padding: 'none',
    appearance: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '$1',
    fontStyle: 'light',
    color: '$text'
});

const Button = styled(IconButton, {
    height: 35,
    width: 35,
    margin: 0,
    padding: '$2', 
    display: 'flex',
    fd: 'row',
    jc: 'center',
    ai: 'center',
    color: '$text',
    border: 'none',
    borderColor: 'transparent',
    boxShadow: 'none',
    zIndex: 2,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
})

export function SearchBar<T extends object>(props: ComboBoxProps<T>) {
    let { contains } = useFilter({ sensitivity: 'base' })
    const state = useComboBoxState({ ...props, defaultFilter: contains })

    const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null) 
    const listBoxRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null)
    const popoverRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    const { listBoxProps, inputProps, labelProps } = useComboBox({ ...props, inputRef, listBoxRef, popoverRef }, state)

    let searchProps = {
        label: props.label,
        value: state.inputValue,
        onChange: (v: string) => state.setInputValue(v)
    };
    
    let searchState = useSearchFieldState(searchProps)
    let { clearButtonProps } = useSearchField(searchProps, searchState, inputRef)

    let clearButtonRef = useRef<HTMLButtonElement>(null)
    let buttonProps = useButton(clearButtonProps, clearButtonRef) 

    return (
        <Container>
            {props.showLabel ?
                <Label {...labelProps}> 
                    <Text> {props.label} </Text>
                </Label>
            }
            
            <InputGroup>
                <MagnifyingGlassIcon /> 
                <Input 
                    {...inputProps} 
                    ref={inputRef} 
                />
                <IconButton 
                    size='1' 
                    variant='ghost' 
                    {...buttonProps} 
                    ref={clearButtonRef}
                    css={{
                        borderColor: 'transparent', 
                        '&:hover': { 
                            borderColor: '$panel' 
                        }
                    }}
                >
                    <Cross2Icon aria-hidden='true' /> 
                </IconButton>
            </InputGroup>
        
            {state.isOpen ? 
                <Popover 
                    popoverRef={popoverRef}
                    isOpen={state.isOpen}
                    onClose={state.close}
                >
                    <ListBox
                        {...listBoxProps}
                        listBoxRef={listBoxRef}
                        state={state}
                    />    
                </Popover>
            : null}
        </Container>

    );
}