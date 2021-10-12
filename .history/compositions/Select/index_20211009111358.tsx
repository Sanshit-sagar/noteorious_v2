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

const StyledButton = styled('div', {
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

const StyledValue = styled('div', {
    display: 'inline-flex',
    alignItems: 'center'
});

const StyledIcon = styled('div', {
    width: '18px',
    height: '18px',
    padding: '6px 2px',
    margin: ''
})
