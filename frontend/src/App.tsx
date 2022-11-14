import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css';
import QuestionPage from "./pages/QuestionPage";
import MainPage from "./pages/MainPage";
import RestaurantListPage from "./pages/RestaurantListPage";
import "@fontsource/proza-libre";
import FinishGamePage from "./pages/FinishGamePage";
import useGame from "./hooks/useGame";
import useRestaurants from "./hooks/useRestaurants";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import PlayerAmountPage from "./pages/PlayerAmountPage";
import NewGamePage2P from "./pages/NewGamePage2P";
import NewGamePage6P from "./pages/NewGamePage6P";
import NewGamePage5P from "./pages/NewGamePage5P";
import NewGamePage4P from "./pages/NewGamePage4P";
import NewGamePage3P from "./pages/NewGamePage3P";

function App() {

    const {games, createGame2P, createGame3P, createGame4P, createGame5P, createGame6P, deleteGame} = useGame();
    const {restaurants} = useRestaurants();

  return (
    <div className="App">
      <header>
          <div className="App-header-top"></div>
      </header>
        <div>
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/amount"} element={<PlayerAmountPage/>}/>
                    <Route path={"/api/restaurant"} element={<RestaurantListPage restaurants={restaurants}/>}/>
                    <Route path={"/api/restaurant/:restaurantId"} element={<RestaurantDetailPage restaurants={restaurants}/>}/>
                    <Route path={"/api/game2"} element={<NewGamePage2P games={games} newGame2={createGame2P}/>}/>
                    <Route path={"/api/game3"} element={<NewGamePage3P games={games} newGame3={createGame3P}/>}/>
                    <Route path={"/api/game4"} element={<NewGamePage4P games={games} newGame4={createGame4P}/>}/>
                    <Route path={"/api/game5"} element={<NewGamePage5P games={games} newGame5={createGame5P}/>}/>
                    <Route path={"/api/game6"} element={<NewGamePage6P games={games} newGame6={createGame6P}/>}/>
                    <Route path={"/api/question/random"} element={<QuestionPage games={games} deleteGame={deleteGame}/>}/>
                    <Route path={"/finish"} element={<FinishGamePage games={games} deleteGame={deleteGame}/>}/>
                </Routes>
            </HashRouter>
        </div>
    </div>
  );
}

export default App;
