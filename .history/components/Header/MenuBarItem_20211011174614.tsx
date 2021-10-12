import React from 'react' 
import { styled } from '../../stitches.config'
import { IMenuBarItem } from './interfaces'
import { useHover } from 'react-aria'


interface IconMapping {
    name: string; 
    icon: Element | React.ReactNode;
}

type WrapperProps = IconProps & { children: React.ReactNode; }


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
});

export const MenuBarItem = ({ 
    icon, 
    title, 
    action,
    isActive,
    isDisabled
}: IMenuBarItem) => {
    const {hoverProps, isHovered} = useHover({
        onHoverStart: (_e) => console.log('hovering'),
        onHoverEnd: (_e) => console.log('done hovering')
    });
   
    return (
        <MenuItemButton {...hoverProps} onClick={action} css={{ border: '2px solid', borderColor: isHovered ? 'red' : '$border' }}>
            {typeof icon==='string' ? title : icon}
        </MenuItemButton>
    );
}



let alignmentIcons: IconMapping[] = [
    { name: 'alignLeft', icon: <AlignLeftIcon /> },
    { name: 'alignRight', icon: <AlignRightIcon /> },
    { name: 'alignCenter', icon: <AlignCenterIcon /> },
    { name: 'alignJustify', icon: <AlignJustifyIcon /> }
]

export const IconWrapper = ({ height = '24', width = '24', color = 'rgba(0,0,0,1)', children }: WrapperProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${height} ${width}`} width={height} height={width}>
        {children}
    </svg>
)

export const AlignmentIcons = () => (
    <> 
        {alignmentIcons.map((item: IconPair, index: number) => (
            <IconWrapper
                key={index} 
                height={'24'} 
                width={'24'} 
                color={'purple'}
            >
                {item.icon}
            </IconWrapper>
        ))}
    </>
);


