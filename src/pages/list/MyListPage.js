import { useContext } from "react"
import { FavoriteAnimesContext } from "../../App"
import FavoritesTableComponent from "../../components/FavoritesTable";
import SearchBarComponent from "../../components/SearchBar";

export const MyListPage = () => {
    const [favAnimes,setFavAnimes] = useContext(FavoriteAnimesContext);

    return (
        <>
        <div style = {{display: 'flex', flexDirection: 'column', gap: 10}}>
            <FavoritesTableComponent />            
        </div>

        </>
    )
}