import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NewGamePage from "./pages/NewGamePage";
import QuestionPage from "./pages/QuestionPage";
import MainPage from "./pages/MainPage";
import MeetingSearchPage from "./pages/MeetingSearchPage";
import "@fontsource/proza-libre";
import FinishGamePage from "./pages/FinishGamePage";

function App() {

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
                    <Route path={"/game"} element={<NewGamePage/>}/>
                    <Route path={"/search-meeting"} element={<MeetingSearchPage/>}/>
                    <Route path={"/question"} element={<QuestionPage/>}/>
                    <Route path={"/finish"} element={<FinishGamePage/>}/>
                </Routes>
            </HashRouter>
        </div>
    </div>
  );
}

export default App;
