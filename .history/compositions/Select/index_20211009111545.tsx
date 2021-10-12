import React from 'react'
import { styled } from '../../stitches.config'

import type { AriaSelectProps } from '@react-types/select'
import { useSelectState } from 'react-stately'
import { 
    useButton,
    useSelect,
    mergeProps,
    useFocusRing,
    HiddenSelect,
} from 'react-aria'
import { ListBox } from '../ListBox'
import { Popover } from '../Popover'
import { Wrapper, Label } from '../Shared'

interface ButtonProps {
    isOpen?: boolean;
    isFocusVisible?: boolean;
};

export const StyledButton = styled('div', {
    appearance: 'none',
    width: '210px',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid $border',
    textAlign: 'left',
    padding: '6px 2px 6px 8px',
    borderRadius: '$2',
    fontSize: '14px',
    color: 'black'
})

export const StyledValue = styled('div', {
    display: 'inline-flex',
    alignItems: 'center'
})

export const StyledIcon = styled('div', {
    width: '18px',
    height: '18px',
    padding: '6px 2px',
    margin: '0 4px',
    background: 'seagreen',
    borderRadius: '4px',
    color: 'white'
})


export function Select<T extends object>(props: AriaSelectProps<T>) {
    // Create state based on the incoming props
    let state = useSelectState(props);
  
    // Get props for child elements from useSelect
    let ref = React.useRef(null);
    let { labelProps, triggerProps, valueProps, menuProps } = useSelect(props,state,
      ref
    );
  
    // Get props for the button based on the trigger props from useSelect
    let { buttonProps } = useButton(triggerProps, ref);
  
    let { focusProps, isFocusVisible } = useFocusRing();
  