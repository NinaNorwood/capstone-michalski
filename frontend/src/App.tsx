import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NewGamePage from "./pages/NewGamePage";
import QuestionPage from "./pages/QuestionPage";
import MainPage from "./pages/MainPage";
import RestaurantListPage from "./pages/RestaurantListPage";
import "@fontsource/proza-libre";
import FinishGamePage from "./pages/FinishGamePage";
import useGame from "./hooks/useGame";
import useRestaurants from "./hooks/useRestaurants";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";

function App() {

    const {games, createGame} = useGame();
    const {restaurants} = useRestaurants();

  return (
    <div className="App">
      <header>
          <div className="App-header-top"></div>
          <div className="Title-header">
            <h2>Snoople</h2>
          </div>
      </header>
        <div>
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/api/restaurant"} element={<RestaurantListPage restaurants={restaurants}/>}/>
                    <Route path={"/api/restaurant/:restaurantId"} element={<RestaurantDetailPage restaurants={restaurants}/>}/>
                    <Route path={"/api/game"} element={<NewGamePage newGame={createGame}/>}/>
                    <Route path={"/api/question/random"} element={<QuestionPage games={games}/>}/>
                    <Route path={"/finish"} element={<FinishGamePage/>}/>
                </Routes>
            </HashRouter>
        </div>
    </div>
  );
}

export default App;
