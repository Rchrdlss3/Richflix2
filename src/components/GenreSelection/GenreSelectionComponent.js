import { useContext } from "react"
import { buttonStyle } from "../../styles/generalStyles"
import { ThemeContext } from "../../App"

export const GenreSelectionComponent = ({genres}) => {
    const [theme,setTheme] = useContext(ThemeContext);
    return (
        <>
        <div style = {{
            display: 'flex',
            gap: 5,
            height: '50px',
            overflowX: 'scroll'
        }}>
        {genres.map((genre) => {
            return <button 
            key = {genre.name}
            style = {{...buttonStyle(theme), textWrap:'auto', flex: 'none', width: '200px'}}
            onClick = {() => {}}
            >{genre.name}</button>
        })}
        </div>
        </>
    )
}