import { useContext } from "react"
import { ThemeContext } from "../../App"

export const FavoriteTableHeader = () => {
    const [theme,setTheme] = useContext(ThemeContext);

    return (
        <tr style = {{position: 'sticky', top:0, backdropFilter: 'blur(10px)', borderBottom: `5px solid ${theme.font.hexcode}20`,zIndex:1000, height: '50px'}}>
            <th style = {{width: '5%'}}></th>
            <th>Title</th>
            <th>Rank</th>
            <th>Score</th>
            <th>Type</th>
            <th>Link</th>
            <th>Remove</th>
        </tr>
    )
}