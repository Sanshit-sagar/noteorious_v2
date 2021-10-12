


const Footer = ({ editor }: { editor: Editor | null }) => {
    return (
        <p style={{ fontSize: '0.65em' }}> 
            {editor.getCharacterCount()} characters
        </p> 
    )
}