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
import NewGamePage from "./pages/NewGamePage";
import RestaurantTimePage from "./pages/RestaurantTimePage";

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
                    <Route path={"/api/restaurant/:restaurantId/time"} element={<RestaurantTimePage/>}/>
                    <Route path={"/api/game"} element={<NewGamePage games={games} newGame2={createGame2P} newGame3={createGame3P} newGame4={createGame4P} newGame5={createGame5P} newGame6={createGame6P}/>}/>
                    <Route path={"/api/question/random"} element={<QuestionPage games={games} deleteGame={deleteGame}/>}/>
                    <Route path={"/finish"} element={<FinishGamePage games={games} deleteGame={deleteGame}/>}/>
                </Routes>
            </HashRouter>
        </div>
    </div>
  );
}

export default App;
