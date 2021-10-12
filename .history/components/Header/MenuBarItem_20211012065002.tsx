import React from 'react' 
import { styled } from '../../stitches.config'
import { IMenuBarItem } from './interfaces'
import { useHover } from 'react-aria'
import { IconMapping, IconProps } from '../Icons'
import { Editor } from '@tiptap/react'
import { IconButton } from '../../primitives/IconButton'

import {
    AlignLeftIcon,
    AlignRightIcon, 
    AlignCenterIcon, 
    AlignJustifyIcon 
} from '../Icons'

type WrapperProps = IconProps & { children: React.ReactNode; hovered: boolean; }; 

const MenuItemButton = styled(IconButton, {
    width: 35,
    height: 35,
    bc: '$loContrast',
    border: '1px solid $border',
    padding: '$1',
    borderRadius: '$1',
    marginRight: '0.25rem',
    '&:hover': {
        backgroundColor: 'plainsboro',
        color: '#fff'
    }
})

export const alignmentIcons: IconMapping[] = [
    { name: 'alignLeft', icon: <AlignLeftIcon />, alignment: 'left' },
    { name: 'alignRight', icon: <AlignRightIcon />, alignment: 'right' },
    { name: 'alignCenter', icon: <AlignCenterIcon />,alignment: 'center' },
    { name: 'alignJustify', icon: <AlignJustifyIcon />, alignment: 'justify' }
]

export const AlignmentHandlers = ({ editor }: { editor: Editor }) => {
    return (<> 
        {alignmentIcons.map((item: IconMapping, index: number) => (
            <MenuBarItem
                key={index} 
                title={item.name} 
                icon={item.icon}
                height={'24'} 
                width={'24'} 
                color={'purple'}
                action={() => editor.chain().focus().setTextAlign(`${item.alignment}`).run()}
                isActive={() => true}
                isDisabled={() => false}
            />
        ))}
    </>)
}

export const IconWrapper = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)', children, hovered }: WrapperProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={height} height={width}>
        {children}
    </svg>
)

export const MenuBarItem = ({ 
    icon, 
    title, 
    action,
    isActive,
    isDisabled,
    height = '24',
    width = '24',
    color = 'rgba(0,0,0,1)',
    wrapSvg = false
}: IMenuBarItem) => {
    const {hoverProps, isHovered} = useHover({
        onHoverStart: (_e) => console.log('hovering'),
        onHoverEnd: (_e) => console.log('done hovering')
    });

    let disabled, active
    disabled = isDisabled ? !isDisabled() : false
    active = isActive()
   
    return (
        <IconButton size='2' variant='ghost' 
            {...hoverProps} 
            onClick={action} 
        >
            {/* css={{ 
                borderColor: isHovered ? 'red' : '$border', 
                backgroundColor: disabled ? 'red' : active ? 'green' : 'transparent' 
            }} */}
            {wrapSvg 
                ?   typeof icon === 'string' ?   title :   icon
                :   <IconWrapper width={height} height={width} color={color} hovered={isHovered}> {icon} </IconWrapper>
        } </IconButton>
    );
}


