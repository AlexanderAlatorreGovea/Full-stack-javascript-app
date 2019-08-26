import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import CreateExercise from './View/CreateExercise';
import EditExercise from './View/EditExercise';
import ExercisesList from './View/ExercisesList';
import CreateUser from './View/CreateUser';
import Navbar from './View/Navbar';

function App() {
  return (
    <Router>
       <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ ExercisesList } />
        <Route path="/edit/:id" component={ EditExercise } />
        <Route path="/create" component={ CreateExercise } />
        <Route path="/user" component={ CreateUser } />
        </div>
    </Router>
  );
}

export default App;
