import { styled } from '../../stitches.config'

export const Container = styled('div', {
    height: '100%',
    width: '100%',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: '1em', 
    padding: '1em'
})

export const TipTapEditor = styled('div', {
    width: '65rem',
    minHeight: '40rem',
    maxHeight: '40rem',
    overflow: 'hidden',
    bc: '$panel',
    border: '3px solid $border',
    borderRadius: '0.40em',
    color: '$text',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        borderColor: '$border3',
    },
    '&:focus-within': {
        borderColor: '$border3'
    }
});

export const Content = styled('div', {
    width: '100%',
    flex: '1 1 auto',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'stretch', 
    overflowY: 'hidden',
    overflowX: 'hidden',
    padding: '1.25rem 1rem',
    bc: '$neutral',
});

export const Footer = styled('div', {
    display: 'flex',
    flex: '0 0 auto',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 600,
    justifyContent: 'space-between',
    padding: '0.25rem 0.75rem',
    whiteSpace: 'nowrap'
});