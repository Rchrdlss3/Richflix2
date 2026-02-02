import { useContext } from "react"
import  TrashButtonComponent  from "../TrashButton"
import { ThemeContext } from "../../App"
import { StarRankingComponent } from "../StarRanking/StarRankingComponent";

export const FavoriteTableRow = ({anime,index}) => {
    const [theme,setTheme] = useContext(ThemeContext);

    return (
        <>
        <tr style = {{
            backgroundColor: index % 2 == 1 ? theme.backgroundSecondary.hexcode : 'inherit',
            borderBottom: `1px solid ${theme.font.hexcode}20`
        }}>
            <td><img className = "image-heart" src = {anime.images.webp.large_image_url} style = {{width: '50px',height: '50px'}}/> </td>
            <td style = {{textAlign: 'left'}}>{anime.title ? anime.title : '' }</td>
            <td>{anime.rank}</td>
            <td><StarRankingComponent rank = {anime.score}/></td>
            <td>{anime.type}</td>
            <td><a href={anime.url} target="_" style={{color: theme.primary.hexcode}}><span className = 'glyphicon glyphicon-link'/></a></td>
            <td><TrashButtonComponent anime = {anime}/></td>
        </tr>
        </>
    )
}