import * as React from "react";
import styled from "styled-components";
import { useOverlay, DismissButton, FocusScope } from "react-aria";

interface PopoverProps {
    popoverRef?: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}


  