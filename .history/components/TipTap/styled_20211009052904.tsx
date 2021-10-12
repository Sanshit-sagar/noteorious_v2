import { styled } from '../../stitches.config'

export const StyledEditor = styled('div', {
    backgroundColor: '#fff',
    border: '3px solid #0d0d0d',
    borderRadius: '0.75em',
    color: '#0d0d0d',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '26rem'
});

const StyledHeader = styled('div', {
    display: 'flex',
    flex: '0 0 auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    padding: '0.25rem',
});

const StyledContent = styled('div', {
    flex: '1 1 auto',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'stretch', 
    overflowY: 'hidden',
    overflowX: 'hidden',
    padding: '1.25rem 1rem',
    '-webkit-overflow-scrolling': 'touch',
})

const StyledFooter = styled('div', {
    display: 'flex',
    flex: '0 0 auto',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 600,
    justifyContent: 'space-between',
    padding: '0.25rem 0.75rem',
    whiteSpace: 'nowrap'
})