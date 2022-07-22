import '../styles/MyCard.css';
import PropTypes from 'prop-types';
import {Jeu} from "../utils/models/Jeu";
import {remove, update} from "../utils/service/GameService";

const MyCard = ({jeu : game, action}) => {

    const getClassName = () =>  {
        let className = 'card';
        if(game.finished) { return className.concat(' finished') }
        return className;
    }

    async function exterminate() {
        await remove(game.id);
        action()
    }

    async function modify() {
        const modified = {...game};
        modified.finished = !modified.finished;
        await update(modified);
        action();
    }

    return (
        <div className={getClassName()} >
            <div className="card-header">
                <img src={game.image} alt={`Jeu ${game.title}`}/>
            </div>
            <div className="card-body">
                <h3>{game.title}</h3>
                <p>— {game.studio}</p>
                <p>{game.description}</p>
            </div>
            <div className='card-footer'>
                <button className='secondary' onClick={exterminate}>Supprimer</button>

                <button className='primary' onClick={modify}>
                    {game.finished? 'Joué' : 'Pas joué'}
                </button>
            </div>
        </div>
    )
}

export default MyCard;


MyCard.propTypes = {
    jeu: PropTypes.instanceOf(Jeu)
}