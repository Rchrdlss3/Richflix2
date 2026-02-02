import { useContext, useEffect, useState } from "react";
import { FavoriteAnimesContext, ThemeContext } from "../../App";
import { addFavorite } from "../../utils/constants";

export const FavoriteButtonComponent = ({anime}) => {
    const [hover,setHover] = useState(false);
    const [theme,setTheme] = useContext(ThemeContext);
    const [favoriteAnimes,setFavoriteAnimes] = useContext(FavoriteAnimesContext);
    const [favorited,setFavorited] = useState(Object.hasOwn(anime,anime.mal_id));

    useEffect(()=>{
        setFavorited(favoriteAnimes[anime.mal_id] != undefined)
    },[anime]);

    return (
        <>
        <button
                        onMouseEnter={()=>{setHover(true)}}
                        onMouseLeave={()=>setHover(false)}
                        style = {{
                            background: 'none', 
                            border: 'none', 
                            display: 'flex', 
                            gap: 5, 
                            color: hover || favorited ? theme.primary.hexcode : 'inherit', 
                            alignItems: 'center'
                        }}
                        onClick = {() => {
                            addFavorite(anime)
                            setFavorited(true)
                            setFavoriteAnimes(JSON.parse(localStorage.getItem('FAVORITES')))
                        }}
                        >
                        <span style = {{color: theme.primary.hexcode }} className = {`glyphicon glyphicon-heart${hover || favorited ? '' : '-empty'}`}/>
                        <div style = {{fontWeight: 800}}>{favorited ? 'Favorited': 'Favorite'}</div>
        </button>
        </>
    )
}