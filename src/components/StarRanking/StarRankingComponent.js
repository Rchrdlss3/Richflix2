import { useContext } from "react"
import { ThemeContext } from "../../App";

export const StarRankingComponent = ({rank}) => {
    const [theme,setTheme] = useContext(ThemeContext);
    return (
        <>
        <div style ={{alignItems: 'center'}}>
            {Array.from({length:10}).map(() => {
                rank -=1
                return <span style = {{  color: rank > 0 ?theme.primary.hexcode : 'inherit'}} className = 'glyphicon glyphicon-star'/>
            })}
        </div>
        </>
    )
}