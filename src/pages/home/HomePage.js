import { useContext, useEffect, useState } from "react"
import { getAnimeCharacters, getAnimeGenres, getAnimePictures, getTopAnime } from "../../utils/animeAPI";
import { ThemeContext } from "../../App";
import AnimeHeader from "../../components/AnimeHeader";
import  AnimeCarouselComponent  from "../../components/AnimeCarousel";
import  GenreSelectionComponent  from "../../components/GenreSelection";

export const HomePage = () => {
    const [allAnime,setAllAnime] = useState([]);
    const [topAnime,setTopAnime] = useState({images: {webp: {large_image_url: ''}}});
    const [genres,setGenres] = useState([]);
    const [animeChars,setAnimeChars] = useState([{character : {images: {webp:{image_url: ''}}}}]);
    const [animeImgSrc,setAnimeImgSrc] = useState("");

    useEffect(() => {
        getTopAnime()
        .then(resp => {
            setTopAnime(resp.data[0])
            setAllAnime(resp.data)

            getAnimeCharacters(resp.data[0].mal_id)
            .then((resp) => setAnimeChars(resp.data))
            
            getAnimePictures(resp.data[0].mal_id)
            .then(data => {setAnimeImgSrc(data.data[0].webp.large_image_url)},[]);

        })
        getAnimeGenres()
        .then(resp => {setGenres(resp.data)});
    },[]);

    
    return (
        <>
        {topAnime.mal_id ? <AnimeHeader anime = {topAnime} animeChars={animeChars} animeImgSrc={animeImgSrc}/> : null}
        <AnimeCarouselComponent animeList = {allAnime} onClick={() => {}}/>
        {/* {genres.length > 1 ? <GenreSelectionComponent genres = {genres}/> : null} */}
        </>
    )
}