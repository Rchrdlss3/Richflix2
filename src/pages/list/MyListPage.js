import FavoritesTableComponent from "../../components/FavoritesTable";

export const MyListPage = () => {
    return (
        <>
        <div style = {{display: 'flex', flexDirection: 'column', gap: 10}}>
            <FavoritesTableComponent />            
        </div>

        </>
    )
}