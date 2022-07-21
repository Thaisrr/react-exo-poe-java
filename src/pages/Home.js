import MyHeader from "../components/MyHeader";
import MyCard from "../components/MyCard";
import {Jeu} from "../utils/models/Jeu";
import NoContent from "../components/NoContent";
import FormGame from "../components/FormGame";
import {useState} from "react";
import {func} from "prop-types";

const Home = () => {
    const coucou = 'coucou';


    const [games, setGames] = useState([
        new Jeu('The Witcher 3', `Il y a des monstres qui font grr`, 'CD Projekt', 'https://s2.gaming-cdn.com/images/products/6202/616x353/horizon-zero-dawn-complete-edition-pc-jeu-steam-cover.jpg?v=1651566259', true),
        new Jeu('Horizon Zero Dawn', `Il y a des robots dino qui font grr`, 'Guerrilla Game', './Images/the-witcher-3.jpg', true),
        new Jeu('Zelda, breath of the wild', `Chais pas j'ai pas joué`, 'Nintendo', 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg', false),
        new Jeu('Mario Party', 'Il y a des champignons qui font grrr', 'Nintendo', 'https://i.ytimg.com/vi/ymq4T7pYc5U/maxresdefault.jpg', false)
    ]);

    const saveGame = ({title, description, studio, image}) => {
        const game = new Jeu(title, description, studio, image);
        const updated = [...games];
        updated.push(game);
        setGames(updated);
    }

    const updateGames = function (game, action) {
        const updated = [...games];
        const i = updated.indexOf(game);
        if(action === 'update') {
            updated[i].finished = !updated[i].finished;
        } else if (action === 'delete') {
            updated.splice(i, 1);
        }
        setGames(updated);
    }

    const deleteAll = function () {
        if(window.confirm('Confirmer la suppression totale des données ?')) setGames([])
    }


    return (
        <>
            <MyHeader message={coucou}/>
            <main>
                <h2 className='flex-title'>Mes Jeux
                    <button className='secondary' onClick={deleteAll}>
                        Delete All
                    </button>
                </h2>

                {(games && games.length > 0)?
                    (  <div className="grid">
                        {games.map(jeu => <MyCard jeu={jeu} key={jeu.id} action={updateGames}/>)}
                    </div>
                    ) :
                    <NoContent/>

                }


            </main>

            <aside>
                <FormGame submit={saveGame} />
            </aside>
        </>
    );
}

export default Home;