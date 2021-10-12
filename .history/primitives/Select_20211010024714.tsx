import React from 'react'
import { styled, keyframes, CSS } from '../stitches.config'
import { CaretSortIcon } from '@radix-ui/react-icons'


const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });
  
const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  });
  
const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });
  
const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const SelectWrapper = styled('div', {
    backgroundColor: '$loContrast',
    borderRadius: '$2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$hiContrast',
    fontFamily: '$untitled',
    fontSize: '$1',
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 400,
    height: '$5',
    flexShrink: 0,

    '&:focus-within': {
        zIndex: 1,
        boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    },
});

const StyledSelect = styled('select', {
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 'inherit',
    color: 'inherit',
    font: 'inherit',
    outline: 'none',
    width: '100%',
    height: '100%',
    pl: '$1',
    pr: '$3',
    lineHeight: '25px',
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',
        '&[data-state="open"]': {
            '&[data-side="top"]': { 
                animationName: slideDownAndFade 
            },
            '&[data-side="right"]': { 
                animationName: slideLeftAndFade 
            },
            '&[data-side="bottom"]': { 
                animationName: slideUpAndFade 
            },
            '&[data-side="left"]': { 
                animationName: slideRightAndFade 
            },
        },
    },
});

const StyledCaretSortIcon = styled(CaretSortIcon, {
    position: 'absolute',
    pointerEvents: 'none',
    display: 'inline',
    marginTop: 5,
    marginLeft: -16,
});

type SelectProps = React.ComponentProps<typeof StyledSelect> & { css?: CSS };

export const Select = React.forwardRef<React.ElementRef<typeof StyledSelect>, SelectProps>(
    ({ css, ...props }, forwardedRef) => (
        <SelectWrapper css={css}>
            <StyledSelect 
                ref={forwardedRef} {...props} />
            <StyledCaretSortIcon />
        </SelectWrapper>
    )
);

Select.toString = () => `.${SelectWrapper.className}`;