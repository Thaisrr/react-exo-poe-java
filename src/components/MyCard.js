import '../styles/MyCard.css';

const MyCard = () => {
    const game = {
        title: 'The Witcher 3',
        description: 'Il y a des monstres qui font grrrr',
        studio: 'CD Project',
        image: './Images/the-witcher-3.jpg',
        finished: true
    }

    const getClassName = () =>  {
        let className = 'card';
        if(game.finished) { return className.concat(' finished') }
        return className;
    }

    return (
        <div className={getClassName()} >
            <div className="card-header">
                <img src={game.image} alt={`Image du jeu ${game.title}`}/>
            </div>
            <div className="card-body">
                <h3>{game.title}</h3>
                <p>-- {game.studio}</p>
                <p>{game.description}</p>
            </div>
        </div>
    )
}

export default MyCard;