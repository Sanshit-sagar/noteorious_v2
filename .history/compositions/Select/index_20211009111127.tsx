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
padding: 6px 2px 6px 8px;
margin-top: 6px;
outline: none;
border-color: ${(props) => (props.isFocusVisible ? "seagreen" : "lightgray")};
box-shadow: ${(props) =>
  props.isFocusVisible ? "0 0 0 3px rgba(143, 188, 143, 0.5)" : ""};
border-radius: 4px;
display: inline-flex;
align-items: center;
justify-content: space-between;
width: 210px;
text-align: left;
font-size: 14px;
color: black;

const StyledButton = styled('div', {
    appearance: 'none',
    border: '1px solid $border',
    padding: '6px 2px 6px 8px',
    borderRadius: '$2',
    display: 'inline-flex',
    
})

const StyledValue = styled('div', {
    
})

const StyledIcon = styled('div', {
    
})
