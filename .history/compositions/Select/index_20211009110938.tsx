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
    isOpen: boolean;
    isFocus
}

const StyledButton = styled('div', {
    
})

const StyledValue = styled('div', {
    
})

const StyledIcon = styled('div', {
    
})