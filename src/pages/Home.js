import MyHeader from "../components/MyHeader";
import MyCard from "../components/MyCard";
import {Jeu} from "../utils/models/Jeu";
import NoContent from "../components/NoContent";

const Home = () => {
    const coucou = 'coucou';


    const games = [
        new Jeu(1, 'The Witcher 3', `Il y a des monstres qui font grr`, 'CD Projekt', 'https://s2.gaming-cdn.com/images/products/6202/616x353/horizon-zero-dawn-complete-edition-pc-jeu-steam-cover.jpg?v=1651566259', true),
        new Jeu(2, 'Horizon Zero Dawn', `Il y a des robots dino qui font grr`, 'Guerrilla Game', './Images/the-witcher-3.jpg', true),
        new Jeu(3, 'Zelda, breath of the wild', `Chais pas j'ai pas joué`, 'Nintendo', 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg', false),
        new Jeu(4, 'Mario Party', 'Il y a des champignons qui font grrr', 'Nintendo', 'https://i.ytimg.com/vi/ymq4T7pYc5U/maxresdefault.jpg', false)
    ]

    return (
        <>
            <MyHeader message={coucou}/>
            <main>
                <h2>Mes Jeux</h2>

                {(games && games.length > 0)?
                    (  <div className="grid">
                        {games.map(jeu => <MyCard jeu={jeu} key={jeu.id}/>)}
                    </div>
                    ) :
                    <NoContent/>

                }


            </main>
        </>
    );
}

export default Home;