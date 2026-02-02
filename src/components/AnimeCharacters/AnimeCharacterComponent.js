import { useContext, useState } from "react";
import { ThemeContext } from "../../App";

export const AnimeCharacterComponent = ({character}) => {
    const [hover,setHover] = useState(false);
    const [theme,setTheme] = useContext(ThemeContext);

    return (
        <>
        <div 
        style = {{
            borderRadius: '50px',
             width: '100px', 
             height: '100px', 
             position: 'relative', 
             display: 'inline-block',
             padding: 0,
             margin: 10
            }}
        onMouseLeave={() => {setHover(false)}}
        onMouseEnter={() => setHover(true)}
        >
            {character.images.webp.image_url ? <img src = {character.images.webp.image_url} style = {{
                borderRadius: '4px', 
                width: '100px', 
                height: '100px',
                objectFit: 'cover',
                marginLeft: 10,
                marginRight: 10,
                marginBottom:0,
                opacity: hover ? 1 : 0.5,
                transition: '0.5s',
                display: 'block',
            }}/> : null}
        <div 
        style = {{
            backgroundColor: 'none',
            backgroundImage: `linear-gradient(${theme.link.hexcode}00,${theme.background.rgba})`,
            width: '100px', 
            height: '50%', 
            position: 'absolute',
            top: '75%', 
            left: '60%', 
            transform: 'translate(-50%, -50%)',
            visibility: hover ? 'visible' : 'hidden',
            textAlign: 'center',
            color: theme.fontBright.hexcode,
            fontWeight: 500
            }}>
        <p style = {{
            }}>{character.name}</p>
        </div>
        </div>
        </>
    )
}