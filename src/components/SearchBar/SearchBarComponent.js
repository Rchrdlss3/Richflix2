import { useContext } from "react";
import { ThemeContext } from "../../App";

export const SearchBarComponent = ({search,setSearch,cb}) => {
    const [theme,setTheme] = useContext(ThemeContext);

    return (
        <>
            <input 
            className = 'input-text'
            style={{
                width: '100%',
                height: '50px',
                background: 'none',
                border: `1px solid ${theme.font.hexcode}`,
                textAlign: 'center',
                borderRadius: '4px',
                color: theme.font.hexcode,
                fontWeight: 800,
                outline: 'none'
            }}
            value={search}
            placeholder= "What are you looking for ?"
            onChange={(e) => {
                cb?.()
                setSearch(e.target.value)
            }}
            ></input>
        </>
    )
}