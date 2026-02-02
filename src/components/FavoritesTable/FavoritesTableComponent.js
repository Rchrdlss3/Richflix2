import { useContext } from "react";
import { FavoriteAnimesContext } from "../../App";
import { FavoriteTableRow } from "./FavoriteTableRow";
import { FavoriteTableHeader } from "./FavoriteTableHeader";
import './styles.css'

export const FavoritesTableComponent = () => {
    const [favAnimes,setFavAnimes] = useContext(FavoriteAnimesContext);

    return (
        <>
        <div className="favorite-anime-table" style = {{boxShadow: `4px 20px 20px rgba(0, 0, 0, 0.4)`}}>
        <table>
            <FavoriteTableHeader />
            <tbody>
            {favAnimes !== null ? Object.values(favAnimes).map((anime,idx) => {return <FavoriteTableRow anime = {anime} index = {idx}/>}): null}
            </tbody>
        </table>
        </div>
        </>
    )
}