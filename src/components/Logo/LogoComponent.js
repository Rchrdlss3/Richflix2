import { useContext, useState } from "react"
import { ThemeContext } from "../../App"
import { portfolioLinks } from "../../utils/constants";

export const LogoComponent = () => {
    const [hover,setHover] = useState(false);
    const [linkHover,setLinkHover] = useState('');
    const [theme,setTheme] = useContext(ThemeContext);
    return (
        <>
            <div 
            style = {{
                position: 'absolute', 
                left: 5,
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center'
            }}
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
            >
                <div style = {{                
                    fontFamily:'mavenpro', 
                    fontSize: '2em',                
                    color: `${theme.primary.hexcode}`,
                    letterSpacing:-2, 
                    backgroundColor: theme.background.hexcode,
                    width: '100%',
                    zIndex: 1
                    }}>Richflix</div>
                    <div
                    style = {{
                        transition: '1s', 
                        visibility: hover ? 'visible' : 'hidden',  
                        opacity: hover ? 1 : 0 ,
                        transform: hover ? 'translate(0px,0px)' : 'translate(-70%,0px)',
                        fontSize: '0.5em',                                              
                    }}
                    >
                    {portfolioLinks.map((link) =>  <a 
                    key = {link.name}
                    style = {{
                        cursor: 'pointer',
                        color: linkHover == link.name ? theme.primary.hexcode: 'inherit',
                        textDecoration: 'none',
                        margin: 5,
                    }}
                    target="_"
                    href = {link.href}  
                    onMouseEnter={() => {setLinkHover(link.name)}}   
                    onMouseLeave = {()=>{setLinkHover('')}}               
                    >{link.name}</a>)}                      
                    </div>

            </div> 
        </>
    )
}