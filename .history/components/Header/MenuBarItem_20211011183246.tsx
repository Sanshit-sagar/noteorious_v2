import React from 'react' 
import { styled } from '../../stitches.config'
import { IMenuBarItem } from './interfaces'
import { useHover } from 'react-aria'
import { IconMapping, IconProps, alignmentIcons } from '../Icons'
import { Editor } from '@tiptap/react'

type WrapperProps = IconProps & { children: React.ReactNode; }; 

const MenuItemButton = styled('button', {
    width: 30,
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0.40rem',
    color: '#0d0d0d',
    height: '1.75rem',
    marginRight: '0.25rem',
    padding: '0.25rem',
    '&:hover': {
        backgroundColor: '#0d0d0d',
        color: '#fff'
    }
})

export const AlignmentHandlers = ({ editor }: { editor: Editor }) => {
    const alignLeft = () => editor.chain().focus().setTextAlign('left').run()
    const alignRight = () => editor.chain().focus().setTextAlign('left')
    const alignCenter = () => editor.chain().focus().setTextAlign('center')
    const alignJustify = () => editor.chain().focus().setTextAlign('justify')

    const handleAlign = (index: number) => {
        if(index===0) return alignLeft()
        else if(index===1) alignRight()
        else if(index===2) alignCenter()
        alignJustify()
    }

    return (<> 
        {alignmentIcons.map((item: IconMapping, index: number) => (
            <MenuBarItem
                key={index} 
                title={item.name} 
                icon={item.icon}
                height={'24'} 
                width={'24'} 
                color={'purple'}
                action={handleAlign(index)}
                isActive={() => true}
                isDisabled={() => false}
            />
        ))}
    </>);
);

export const IconWrapper = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)', children }: WrapperProps) => (
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
   
    return (
        <MenuItemButton {...hoverProps} onClick={action} css={{ border: '2px solid', borderColor: isHovered ? 'red' : '$border' }}>
        {wrapSvg 
            ?   typeof icon === 'string' ?   title :   icon
            :   <IconWrapper width={height} height={width} color={color}> {icon} </IconWrapper>
        } </MenuItemButton>
    );
}


