import React from 'react'

import { SearchBar } from '../../compositions/Search'


const Search = () => {

    return (
        <SearchBar label={'Search'} allowsCustomValue>
                    <Section title="Companies">
            <Item>Chatterbridge</Item>
            <Item>Tagchat</Item>
            <Item>Yambee</Item>
            <Item>Photobug</Item>
            <Item>Livepath</Item>
            </Section>
            <Section title="People">
            <Item>Theodor Dawber</Item>
            <Item>Dwight Stollenberg</Item>
            <Item>Maddalena Prettjohn</Item>
            <Item>Maureen Fassan</Item>
            <Item>Abbie Binyon</Item>
            </Section>
        </SearchBar>
    )
}