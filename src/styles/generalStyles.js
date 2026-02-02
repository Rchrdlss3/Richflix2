export const appStyle = (theme) => {
    return {
        background: theme.background.hexcode,
        color: theme.font.hexcode,
        height: '100%',
        width: '100%'
    }
}

export const buttonStyle = (theme) => {
    return {
        backgroundColor: theme.primary.hexcode, 
        width: 100, 
        height: 25, 
        border: 'none', 
        color: theme.link.hexcode, 
        borderRadius: 4,
        margin: 5,
        fontWeight: 600,
        fontSize: '1em'
    }
}