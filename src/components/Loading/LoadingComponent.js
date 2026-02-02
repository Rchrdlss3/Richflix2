import './styles.css'

export const LoadingComponent = ({text}) => {
    return (
        <>
        <div style = {{textAlign: 'center', justifyContent: 'center', justifyItems: 'center'}}>
            <h1 style = {{margin: 'none'}}>
                {text ? text: 'Loading...'}
            </h1>
            </div>
        </>
    )
}