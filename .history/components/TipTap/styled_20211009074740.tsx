import { styled } from '../../stitches.config'

export const StyledContainer = styled('div', {
    height: '100%',
    width: '100%',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: '1em', 
    padding: '1em'
})

export const StyledEditor = styled('div', {
    width: '75rem',
    minHeight: '40rem',
    maxHeight: '40rem',
    overflow: 'hidden',
    backgroundColor: '#fff',
    border: '3px solid #0d0d0d',
    borderRadius: '0.40em',
    color: '#0d0d0d',
    display: 'flex',
    flexDirection: 'column'
});

export const StyledContent = styled('div', {
    width: '100%',
    flex: '1 1 auto',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'stretch', 
    overflowY: 'hidden',
    overflowX: 'hidden',
    padding: '1.25rem 1rem',
    '-webkit-overflow-scrolling': 'touch',
});

export const StyledFooter = styled('div', {
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