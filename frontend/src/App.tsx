import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NewUserPage from "./pages/NewUserPage";
import QuestionPage from "./pages/QuestionPage";

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
                    <Route path={"/"} element={<NewUserPage/>}/>
                    <Route path={"/question"} element={<QuestionPage/>}/>
                </Routes>
            </HashRouter>
        </div>
    </div>
  );
}

export default App;
