import React from 'react'  

import { useComboBoxState } from 'react-stately'
import { useComboBox, useFilter, useMenu, useButton } from 'react-aria'
import { Item, Section } from 'react-stately'



type TypeMenu = {
    category: 'layout',
    variants: 'heading' | 'plain' | 'code' | 'quote',
    default: 'plain',
};

type AlignmentMenu = {
    category: 'Alignment',
    variants: 'left' | 'right' | 'center' | 'justify',
    default: 'left',
}

type FontMenu = {
    category: 'font',
    variants: 'sans' | 'cursive' | 'monospace' | 'serif' | 'inter',
    default: 'sans',
}

