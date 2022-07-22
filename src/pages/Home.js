import MyHeader from "../components/MyHeader";
import MyCard from "../components/MyCard";
import NoContent from "../components/NoContent";
import FormGame from "../components/FormGame";
import {useEffect, useState} from "react";
import {getAll} from "../utils/service/GameService";


const Home = () => {

    const [games, setGames] = useState([]);

    function load() {
        getAll().then(res => setGames(res))
    }

    useEffect(() => {
        getAll().then(res => setGames(res))
    }, [])

    const saveGame = (new_game) => {
        //const game = new Jeu(title, description, studio, image);
        //const updated = [...games];
        //updated.push(game);
        setGames([...games, new_game ]);
    }


    const deleteAll = function () {
        if(window.confirm('Confirmer la suppression totale des données ?')) setGames([])
    }


    return (
        <>
            <MyHeader/>
            <main>
                <h2 className='flex-title'>
                    <span>Mes Jeux</span>
                    <button className='secondary' onClick={deleteAll}>
                        Delete All
                    </button>
                </h2>

                {(games && games.length > 0)?
                    (  <div className="grid">
                        {games.map(jeu => <MyCard jeu={jeu} key={jeu.id} action={load}/>)}
                    </div>
                    ) :
                    <NoContent/>

                }


            </main>

            <aside>
                <FormGame push={saveGame} />
            </aside>
        </>
    );
}

export default Home;