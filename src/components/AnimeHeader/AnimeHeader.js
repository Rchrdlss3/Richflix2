import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";
import { animeHeaderBackground, animeHeaderImageStyle } from "../../styles/imageStyle";
import { getAnimeCharacters, getAnimePictures } from "../../utils/animeAPI";
import { AnimeCharacterComponent } from "../AnimeCharacters/AnimeCharacterComponent";
import { buttonStyle } from "../../styles/generalStyles";
import  FavoriteButtonComponent  from "../FavoriteButton";

export const AnimeHeader = ({anime,animeImgSrc,animeChars}) => {
    const [theme,setTheme] = useContext(ThemeContext);
    const [hover,setHover] = useState(false);

    return (
        <>
        <div style = {{
        }}
        onMouseEnter={() => {setHover(true)}}
        onMouseLeave={() => {setHover(false)}}>
            <div style = {{display: 'flex'}}>
            <div style = {{width: '50vw', height: '550px'}}>
            <div style = {{display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', height: '120px', width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', alignContent: 'center'}}><h1 style = {{padding: 0, textOverflow:'ellipsis', margin: 0, fontSize: '3em', fontWeight: 800,}}>{anime.title}</h1></div>
            <div style = {{height: '80px', alignContent: 'center'}}><h2>{anime.title_japanese}</h2></div>
            <div style = {{display: 'flex'}}>
                {anime.genres.map((genre) => {
                    return <p key = {genre.name} style = {{border: `1px solid`, borderRadius: '4px', margin: 5, padding: 5, fontWeight: 500, fontSize: '0.5em'}}>{genre.name}</p>
                })}
            </div>
            <div style = {{display: 'flex', gap: 10, fontWeight: 500}}>
                 <p>Favorites : {anime.favorites}</p> <p>Score: {anime.score} </p> <p style = {{color: theme.primary.hexcode}}>{anime.year}</p>
            </div>
            <div style = {{display: 'flex'}}>
            <button style = {buttonStyle(theme)}>Watch</button>
            <button style = {{...buttonStyle(theme),backgroundColor: theme.link.hexcode, color: theme.primary.hexcode}}>Reviews</button>
            <FavoriteButtonComponent anime={anime}/>
            </div>
            <h1>Top Characters</h1>
            {animeChars?.length > 1 ? animeChars.slice(0,5).map((anime) => {
                return <AnimeCharacterComponent key = {anime.character.mal_id} character = {anime.character}/>
            }) : null}                 
                </div>
                <div style = {animeHeaderBackground(theme)}>
                <div style = {{
                    background: `linear-gradient(to right,${theme.background.rgba} 20%,${theme.font.hexcode}50)`, 
                    width: 'inherit', 
                    height: '500px', 
                    position: 'absolute', 
                    opacity: 1, 
                    zIndex: 10}}/>
                {animeImgSrc ? <img style = {animeHeaderImageStyle(theme,{hover:hover})
            } src = {animeImgSrc}/> : null}
            </div>
            </div>
            </div>
        </>
    )
}