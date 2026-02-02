export const animeCardWrapper = () => {
    return {
        display: 'inline-block', 
        textAlign: 'left', 
        margin:10,
        width: '200px',
        whiteSpace: 'nowrap',
    }
}

export const animeCardImageStyle = (theme,args) => {
    return  {
        borderRadius: '4px', 
        height: '300px', 
        width: '200px',
        objectFit: 'cover',
        opacity: args.hover ? 1 : 0.5,
        transition: '0.5s'
    }
}

export const animeCardBackground = (theme,args) => {
    return {
        background: theme.background.hexcode,
        width: '200px', height: '300px',
        backgroundImage: `linear-gradient(${theme.link.rgba},${theme.background.rgba})`,
        borderRadius: '4px'
    }
}

export const animeHeaderBackground = (theme) => {
    return {
        background: theme.background.hexcode,
        width: '50vw',
        height: '500px',
        background: `linear-gradient(to right,${theme.background.rgba},${theme.font.rgba})`,
    }
}
export const animeHeaderImageStyle = (theme,args) => {
    return  {
        height: '500px',
        width: '50vw',
        objectFit: 'cover',
        opacity: args.hover ? 1 : 0.5,
        transition: '0.5s'
    }
}