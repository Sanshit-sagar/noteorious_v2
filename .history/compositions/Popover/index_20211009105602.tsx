import * as React from "react";
import { styled } from '../../stitches.config'
import { useOverlay, DismissButton, FocusScope } from "react-aria";

interface PopoverProps {
    popoverRef?: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const Wrapper = styled('div', {
    position: 'absolute',
    top: '100%',
    zIndex: 1,
    width: '100%',
    border: '1px solid lightgray',
    borderRadius: '4px',
    marginTop: '6px',
    boxShadow: '0 4px '
})


  
const Wrapper = styled.div`
position: absolute;
top: 100%;
z-index: 1;
width: 100%;
border: 1px solid lightgray;
border-radius: 4px;
margin-top: 6px;
box-shadow: 0 4px 8px #eee;
background: white;
`;
