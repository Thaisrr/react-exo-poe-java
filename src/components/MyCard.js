import '../styles/MyCard.css';
import PropTypes, {instanceOf} from 'prop-types';
import {Jeu} from "../utils/models/Jeu";

const MyCard = ({jeu : game}) => {
    // { jeu : game } -> décomposition
    // const game = props.jeu


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
                <p>— {game.studio}</p>
                <p>{game.description}</p>
            </div>
        </div>
    )
}

export default MyCard;


MyCard.propTypes = {
    jeu: PropTypes.instanceOf(Jeu)
}