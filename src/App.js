import "./App.css";
import { HorizontalHeader } from "./components/headers/horizontal";
import { NavVertical } from "./components/headers/vertical";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Profil,Commu,Settings } from "./pages/Profil";
import { createContext, useEffect, useState } from "react";
export const UserCtx = createContext();
UserCtx.displayName = "userCtx";
const dataMock = {
  "userData": {
      "id": 18,
      "userInfos": {
          "firstName": "Cecilia",
          "lastName": "Ratorez",
          "age": 34
      },
      "score": 0.3,
      "keyData": {
          "calorieCount": 2500,
          "proteinCount": 90,
          "carbohydrateCount": 150,
          "lipidCount": 120
      }
  },
  "performance": {
      "userId": 18,
      "kind": {
          "1": "cardio",
          "2": "energy",
          "3": "endurance",
          "4": "strength",
          "5": "speed",
          "6": "intensity"
      },
      "data": [
          {
              "value": 200,
              "kind": 1
          },
          {
              "value": 240,
              "kind": 2
          },
          {
              "value": 80,
              "kind": 3
          },
          {
              "value": 80,
              "kind": 4
          },
          {
              "value": 220,
              "kind": 5
          },
          {
              "value": 110,
              "kind": 6
          }
      ]
  },
  "activity": [
      {
          "day": "2020-07-01",
          "kilogram": 70,
          "calories": 240
      },
      {
          "day": "2020-07-02",
          "kilogram": 69,
          "calories": 220
      },
      {
          "day": "2020-07-03",
          "kilogram": 70,
          "calories": 280
      },
      {
          "day": "2020-07-04",
          "kilogram": 70,
          "calories": 500
      },
      {
          "day": "2020-07-05",
          "kilogram": 69,
          "calories": 160
      },
      {
          "day": "2020-07-06",
          "kilogram": 69,
          "calories": 162
      },
      {
          "day": "2020-07-07",
          "kilogram": 69,
          "calories": 390
      }
  ],
  "average": [
      {
          "day": 1,
          "sessionLength": 30
      },
      {
          "day": 2,
          "sessionLength": 40
      },
      {
          "day": 3,
          "sessionLength": 50
      },
      {
          "day": 4,
          "sessionLength": 30
      },
      {
          "day": 5,
          "sessionLength": 30
      },
      {
          "day": 6,
          "sessionLength": 50
      },
      {
          "day": 7,
          "sessionLength": 50
      }
  ]
}
function App() {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  
  //on utilise useEffect afin de récupérer les données du back, on a un mock (const dataMock) 
  //de données au dessus si jamais le back n'est pas a disposition pour faire tourner le front du site 

  // le loading permet d'attendre la réponse du back, si l'api prends du temps. pas de problème ici vu qu'on est sur du local

  useEffect(() => {
    setLoading(true)
  //  let data = {};
  //  fetch("http://localhost:3000/user/18")
  //    .then((res) => res.json())
  //    .then((userData) => Object.assign(data, { "userData": userData.data }));
  //  fetch("http://localhost:3000/user/18/performance")
  //    .then((res) => res.json())
  //    .then((userData) => Object.assign(data, { "performance": userData.data }));
  //  fetch("http://localhost:3000/user/18/activity")
  //    .then((res) => res.json())
  //    .then((userData) => Object.assign(data, { "activity": userData.data.sessions }));
  //  fetch("http://localhost:3000/user/18/average-sessions")
  //    .then((res) => res.json())
  //    .then((userData) =>Object.assign(data, { "average": userData.data.sessions }));
  //  setData(data);
  setData(dataMock)
    setTimeout(() => {
    setLoading(false)
      
    }, 3000);
  }, []);

  return (
    <UserCtx.Provider value={{loading,data}}>
      <Router>
        <HorizontalHeader />
        <div className="App">
          <NavVertical />
          <div className="container-main">
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/profil"} element={<Profil />} />
              <Route path={"/communauté"} element={<Commu />} />
              <Route path={"/settings"} element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserCtx.Provider>
  );
}

export default App;
