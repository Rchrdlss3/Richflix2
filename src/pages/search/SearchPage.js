import { createContext, useState, useEffect, useContext } from "react";
import  SearchBarComponent  from "../../components/SearchBar";
import AnimeCarouselComponent from "../../components/AnimeCarousel";
import { useDebounce } from "../../hooks/useDebounce";
import { getAnimeCharacters, getAnimePictures, searchAnime } from "../../utils/animeAPI";
import AnimeHeader from "../../components/AnimeHeader";
import PlaceHolderComponent from "../../components/PlaceHolder";
import  LoadingComponent  from "../../components/Loading";
import { ThemeContext } from "../../App";

export const AnimeResults = createContext();

export const SearchPage = () => {
    const [theme,setTheme] = useContext(ThemeContext);
    const [search,setSearch] = useState('');
    const [animeResults,setAnimeResults] = useState([]);
    const [selectedAnime,setSelectedAnime] = useState({});
    const [animeChars,setAnimeChars] = useState([]);
    const [animeImgSrc,setAnimeImgSrc] = useState([]);
    const debouncedSearch = useDebounce(search,300);
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        if (debouncedSearch) {
            searchAnime(search)
            .then(resp => {
                setAnimeResults(resp.data)
                setLoading(false)
            })
        } 
    },[debouncedSearch]);


    useEffect(() => {
        if (Object.keys(selectedAnime).length > 1) {
            getAnimeCharacters(selectedAnime.mal_id)
            .then((resp) => setAnimeChars(resp.data))
                    
            getAnimePictures(selectedAnime.mal_id)
            .then(data => {setAnimeImgSrc(data.data[0].webp?.large_image_url)},[]);            
        }

    },[selectedAnime]);
    
    return (
        <>
        <AnimeResults.Provider value = {[animeResults,setAnimeResults]}>
            <div style = {{display: 'flex',flexDirection: 'column',gap:5}}>
            <SearchBarComponent search={search} setSearch={setSearch} cb= {() => {setLoading(!(debouncedSearch == search))}}/>
            {selectedAnime.mal_id ? <AnimeHeader anime = {selectedAnime} animeChars={animeChars} animeImgSrc={animeImgSrc}/> 
            : <PlaceHolderComponent props= {{
                text: 'Search and select an anime',
                style: {display: 'flex', gap: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', height: '550px', border: `1px solid ${theme.font.hexcode}20`, padding: 20, borderRadius: 4, boxShadow: `4px 20px 20px rgba(0, 0, 0, 0.4)`}
                }}/>}
            {!loading ? <AnimeCarouselComponent animeList={animeResults} onClick = {(selected) => {setSelectedAnime(selected)}}/> : <LoadingComponent/>}
            </div>
        </AnimeResults.Provider>
        </>
    )
}