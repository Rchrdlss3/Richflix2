import { lazy, Suspense } from "react";
import { Route } from "react-router";

const HomePage = lazy(() => import('../pages/home'));
const FavoritesPage = lazy(()=> import ('../pages/list'));
const SearchPage = lazy(() => import ('../pages/search'));

export const jikanAPIUrl = "https://api.jikan.moe/v4";

export const navigationLinks = [
    {
        name: "Home",
        path: "/",
        element: <HomePage/>
    },
    {
        name: "Search",
        path: "/search",
        element: <SearchPage/>
    },
    {
        name: "Favorites",
        path: "/favorites",
        element: <FavoritesPage/>
    }
];

export const pageSuspense = (component) => {
    return <Suspense fallback = {<>Loading...</>}>{component}</Suspense>
}

export const AppRoutes = () => {
    return navigationLinks.map((navigation) => 
        <Route key = {navigation.name} path = {navigation.path} element={pageSuspense(navigation.element)}/>
    )
};

export const portfolioLinks = [
    {
        href: 'https://rchrdlss3.github.io/InnovativeRich/Richard%20Ulysse%20Resume.pdf',
        name: 'Resume'
    },
    {
        href: 'https://linkedin.com/in/richardulysse',
        name: 'LinkedIn'
    },
        {
        href: 'https://github.com/rchrdlss3',
        name: 'Github'
    }
]

export const addFavorite = (anime) => {
    const favoritesMap = JSON.parse(localStorage.getItem('FAVORITES')) ?? {};
    favoritesMap[anime.mal_id] = anime
    localStorage.setItem('FAVORITES',JSON.stringify(favoritesMap))
}
// parse when retrieving, use strigify when saving
export const deleteFavorite = (anime) => {
    const favoritesMap = JSON.parse(localStorage.getItem('FAVORITES')) ?? {};
    delete favoritesMap[anime.mal_id]
    localStorage.setItem('FAVORITES',JSON.stringify(favoritesMap))
}