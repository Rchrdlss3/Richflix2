import { createContext, useEffect, useState } from 'react';
import { appStyle } from './styles/generalStyles';
import { Theme } from './styles/theme';
import  NavigationBarComponent  from './components/NavigationBar';
import { HashRouter, Routes } from 'react-router';
import { AppRoutes } from './utils/constants';

export const ThemeContext = createContext();
export const FavoriteAnimesContext = createContext();

function App() {
  const [theme,setTheme] = useState(Theme);
  const [favoriteAnimes,setFavoriteAnimes] = useState(JSON.parse(localStorage.getItem('FAVORITES')));

  useEffect(() => {
      document.getElementsByTagName('body')[0].style.backgroundColor = theme.background.hexcode
  },[theme]);

  useEffect(()=>{
    setFavoriteAnimes(JSON.parse(localStorage.getItem('FAVORITES')))
  },[localStorage.getItem('FAVORITES')]);

  return (
    <HashRouter>
    <ThemeContext.Provider value={[theme,setTheme]}>
    <FavoriteAnimesContext.Provider value = {[favoriteAnimes,setFavoriteAnimes]}>
    <div style = {appStyle(theme)}>
      <NavigationBarComponent />
      <div style = {{padding: 50}}>
      <Routes>
        {AppRoutes()}
      </Routes>
      </div>
    </div>
    </FavoriteAnimesContext.Provider>
    </ThemeContext.Provider>
    </HashRouter>
  );
}

export default App;
