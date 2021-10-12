import React from 'react'  
import { Item } from '../../compositions/Select'
import { ListBox, Section } from '../../compositions/ListBox'
import { useTreeData } from '@react-stately/data'

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

import {Section} from '@react-stately/collections';
import {useSeparator} from '@react-aria/separator';

function Menu(props) {
  let state = useTreeState({...props, selectionMode: 'none'});
  let ref = React.useRef();
  let {menuProps} = useMenu(props, state, ref);

  return (
    <ul
      {...menuProps}
      ref={ref}
      style={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        border: '1px solid gray',
        maxWidth: 250
      }}>
      {[...state.collection].map((item) => (
        <MenuSection
          key={item.key}
          section={item}
          state={state}
          onAction={props.onAction}
        />
      ))}
    </ul>
  );
}