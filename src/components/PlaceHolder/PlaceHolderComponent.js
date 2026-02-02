import { useContext } from "react"
import { ThemeContext } from "../../App"

export const PlaceHolderComponent = ({props}) => {
    const [theme,setTheme] = useContext(ThemeContext);

    return (
        <>
            <div style = {props.style}>
            <h1 style = {{fontWeight: 800, opacity: 0.2}}>{props.text}</h1>      
            <div style = {{width: '100%', height: '10%', background: `${theme.font.hexcode}20`, borderRadius: 4}}/>
            <div style = {{width: '100%', height: '100%', display: 'flex', textAlign: 'center'}}>
            <div style = {{display: 'flex', flexDirection: 'column', height: '100%', width: '40%', gap: 10}}>
            <div style = {{width: '100%', height: '5%', background: `${theme.font.hexcode}20`, borderRadius: 4, marginLeft: '5%'}}/>
            <div style = {{width: '100%', height: '5%', background: `${theme.font.hexcode}20`, borderRadius: 4, marginLeft: '5%'}}/>
            <div style = {{width: '100%', height: '5%', background: `${theme.font.hexcode}20`, borderRadius: 4, marginLeft: '5%'}}/>
            <div style = {{width: '100%', height: '5%', background: `${theme.font.hexcode}20`, borderRadius: 4, marginLeft: '5%'}}/>
            <div style = {{width: '100%', height: '5%', background: `${theme.font.hexcode}20`, borderRadius: 4, marginLeft: '5%'}}/>
            <div style = {{width: '100%', height: '5%', background: `${theme.font.hexcode}20`, borderRadius: 4, marginLeft: '5%'}}/>
            <div style = {{width: '100%', height: '5%', background: `${theme.font.hexcode}20`, borderRadius: 4, marginLeft: '5%'}}/>
            </div>
            <div style = {{width: '50%', height: '50%', background: `${theme.font.hexcode}20`, borderRadius: 4, marginLeft: 'auto'}}/>   
            </div>       
            </div>

        </>
    )
}