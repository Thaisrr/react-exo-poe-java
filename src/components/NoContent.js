const NoContent = () => {
    const style = {
        borderRadius: '10px',
        boxShadow: '2px 2px 8px darkgrey',
        textAlign: 'center',
        padding: '50px 20px'
    }
    return (
        <div style={style}>
            <p>Oups, il n'y a rien à voir ici</p>
        </div>
    )
}

export default NoContent;