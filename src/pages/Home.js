import MyHeader from "../components/MyHeader";
import MyCard from "../components/MyCard";

const Home = () => (
    <>
        <MyHeader/>
        <main>
            <h2>Mes Jeux</h2>

            <div className="grid">
                <MyCard/>
                <MyCard/>
                <MyCard/>
                <MyCard/>
            </div>
        </main>
    </>
);

export default Home;