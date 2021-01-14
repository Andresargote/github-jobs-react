import React from "react";
import './App.css';

//Importar componentes
import {JobsScreen} from "./pages/JobsScreen";
import { GithubRouter } from "./routers/GithubRouter";

function App() {
  return (
    <div className="App">
      <GithubRouter>
          <JobsScreen />
      </GithubRouter>
    </div>
  );
}

export default App;
