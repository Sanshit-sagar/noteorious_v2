import React from 'react'

import { Item, Section } from '@react-stately/collections'
import { SearchBar } from '../../compositions/Search'

import { Editor } from '@tiptap/react'
import { useFilter  } from 'react-aria'
import { useComboBoxState } from 'react-stately'

// export const Search = ()=> {

//     return (
//         <SearchBar label={'Search'} allowsCustomValue>
//             <Section title="Companies">
//                 <Item>Chatterbridge</Item>
//                 <Item>Tagchat</Item>
//                 <Item>Yambee</Item>
//                 <Item>Photobug</Item>
//                 <Item>Livepath</Item>
//             </Section>
//             <Section title="People">
//                 <Item>Theodor Dawber</Item>
//                 <Item>Dwight Stollenberg</Item>
//                 <Item>Maddalena Prettjohn</Item>
//                 <Item>Maureen Fassan</Item>
//                 <Item>Abbie Binyon</Item>
//             </Section>
//         </SearchBar>
//     )
// }

export const Search = ({ editor }: { editor: Editor })  => {
    const { contains } = useFilter({ sensitivity: 'base' })
    const state = useComboBoxState({ ...props, defaultFilter: contains })

    return (
        <SearchBar  state={state} contains={contains} 
    )
}
