import { useContext, useState } from "react"
import { ThemeContext } from "../../App"
import { navigationLinks } from "../../utils/constants";
import { NavLink } from "react-router";
import  LogoComponent  from "../Logo";

export const NavigationBarComponent = () => {
    const [theme,setTheme] = useContext(ThemeContext);
    const [hover,setHover] = useState('');

    const getColor = (hover,isActive) => {
        switch(true) { 
            case hover:
                return theme.primary.hexcode 
            case isActive:
                return theme.link.hexcode 
            default:
                return 'inherit'
        }   
    }

    return (
        <>
        <div style = {{
            width: '100vw', 
            margin: 0, 
            position: 'sticky', 
            top: 0, 
            height: '50px',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            background: 'transparent',
            borderBottom: '1px solid',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 600,
            color: theme.font.hexcode,
            zIndex: 100,
            }}>
                <LogoComponent />
                {navigationLinks.map((link) => {
                    return <NavLink 
                    key = {link.name}
                    style = {({isActive}) => ({
                        margin: 5,
                        color: getColor(hover == link.name,isActive),
                        borderBottom: isActive ? `1px solid ${theme.primary.hexcode}` : 'none',
                        lineHeight: isActive ? 3.6 : 'none',
                        textDecoration: 'none',
                        transition: '1s'
                    })}
                    onMouseEnter={() => {setHover(link.name)}}
                    onMouseLeave={() => {setHover('')}}
                    to = {link.path}
                    >{link.name}</NavLink>
                })}
        </div>
        </>
    )
}