import { useContext, useState } from "react";
import { FavoriteAnimesContext, ThemeContext } from "../../App";
import { deleteFavorite } from "../../utils/constants";
import { ConfirmationComponent } from "../Confirmation/ConfirmationComponent";

export const TrashButtonComponent = ({anime}) => {
    const [favorite,setFavAnimes] = useContext(FavoriteAnimesContext);
    const [theme,setTheme] = useContext(ThemeContext);
    const [hover,setHover] = useState(false);
    const [openModal,setOpenModal] = useState(false);

    return (
        <>
        <button
                        onMouseEnter={()=>{setHover(true)}}
                        onMouseLeave={()=>setHover(false)}
                        style = {{
                            background: 'none', 
                            border: 'none', 
                            display: 'flex', 
                            gap: 5, 
                            color: hover ? theme.primary.hexcode : 'inherit', 
                            alignItems: 'center'
                        }}
                        onClick = {() => {
                            setOpenModal(true)
                        }}
                        >
                        <span style = {{color: theme.primary.hexcode }} className = {`glyphicon glyphicon-trash`}/>
        </button>
        <ConfirmationComponent 
        open={openModal} 
        setOpen={setOpenModal} 
        anime={anime}
        cb = {() => 
            {
                deleteFavorite(anime)
                setFavAnimes(Object.values(JSON.parse(localStorage.getItem('FAVORITES'))))
                setOpenModal(false);
        }}/>
        </>
    )
}