import { useContext } from "react"
import { buttonStyle } from "../../styles/generalStyles"
import { ThemeContext } from "../../App"
import './styles.css'

export const ConfirmationComponent = ({open,setOpen,anime,cb}) => {
    const [theme,setTheme] = useContext(ThemeContext);

    return (
        open ? <>
        <div style = {{
            width: '100vw', 
            height: '100vh', 
            backdropFilter: 'blur(5px)',
            zIndex: 1000, 
            position:'absolute', 
            top:0,
            left:0,
            paddingTop: '10%',
            }}>
            <div style = {{
                width: '50%', 
                padding: '20px', 
                backgroundColor: theme.background.hexcode, 
                margin: 'auto', 
                height: '50%', 
                borderRadius: '4px', 
                border: `1px solid ${theme.font.hexcode}10`, 
                alignContent: 'center',
                boxShadow: `4px 20px 20px rgba(0, 0, 0, 0.4)`
                }}>
            <h1>Are You Sure You Want to Delete?</h1>
            <p style = {{color: 'red', fontWeight: 800, fontSize: '1.5em', display: 'flex', justifyContent: 'center'}}>Doing so will remove <div style = {{width: '220px', whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis', marginLeft: 5, marginRight: 5 }}> {anime.title}</div> from your favorites</p>
            <div>
            <button onClick = {() => {cb()}} style = {buttonStyle(theme)}>Confirm</button> <button style = {buttonStyle(theme)} onClick = {() => {setOpen(false)}}>Cancel</button>
            </div>
            </div>
        </div>
        </> : null
    )
}