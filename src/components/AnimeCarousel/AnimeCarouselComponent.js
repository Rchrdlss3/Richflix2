import { useContext, useState } from "react"
import AnimeCard from "../AnimeCard"
import { ThemeContext } from "../../App"

export const AnimeCarouselComponent = ({animeList,onClick}) => {
    const [theme,setTheme] = useContext(ThemeContext);
    const [selectedId,setSelectedId] = useState("");
    const [selectedAnime,setSelectedAnime] = useState({});
    return (
        <>
            <div style = {{display: 'flex', overflowX: 'scroll', justifyItems: 'center'}}>
            {animeList.slice(1).map((anime) => {
                    return <AnimeCard key = {anime.mal_id} anime = {anime} selected = {anime == selectedAnime} setAnime = {setSelectedAnime} onClick = {onClick}/>
            })}
            </div>
        </>
    )
}