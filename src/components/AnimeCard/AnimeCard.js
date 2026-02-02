import { useContext, useState } from "react"
import { animeCardBackground, animeCardImageStyle, animeCardWrapper } from "../../styles/imageStyle"
import { ThemeContext } from "../../App";

export const AnimeCard = ({anime,setAnime,selected,onClick}) => {
    const [hover,setHover] = useState(false);
    const [theme,setTheme] = useContext(ThemeContext);

    return (
        <>
        <div style = {animeCardWrapper()}
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
            value = {anime.mal_id}
            onClick={() => {
                setAnime(anime)
                onClick?.(anime)
            }}
        >
                <div style = {animeCardBackground(theme)}>
                    <img 
                    src = {anime.images.webp?.large_image_url ?? anime.images.jpeg.large_image_url} 
                    style = {animeCardImageStyle(theme,{hover: hover || selected})}/>
                </div>
            <p style = {{textOverflow: 'ellipsis', overflow: 'hidden'}}>{anime.title}</p>
        </div>
        </>
    )
}