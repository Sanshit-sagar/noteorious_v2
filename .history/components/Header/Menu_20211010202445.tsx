import React from 'react'  

import { useComboBox, }
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

