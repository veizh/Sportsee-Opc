import { useContext, useEffect, useState } from "react";
import { UserCtx } from "../App";
import "../styles/home/home.css";
import { Loading } from "../components/loading/loading";
import { ModalePerf } from "../components/modale/modalePerf";
import { ModaleDuration } from "../components/modale/modaleDuration";
import { ModaleDayly } from "../components/modale/modalDayly";
import { StatComponent } from "../components/statCard/statCard";
import { Apple, Burger, Chicken, Energy, Nage } from "../icon/icons";
import { ModalActivities } from "../components/modale/modalActivities";

export const Home = (props) => {
  const { loading } = useContext(UserCtx);
  const { data } = useContext(UserCtx);
  console.log(data);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Welcome
            name={data.userData.userInfos.firstName}
            last={data.average[data.average.length - 1].sessionLength}
          />
          <div className="display-area">
            <div className="left-part">
            <div className="activites-area">
              <ModalActivities data={data} />
            </div>
              <div className="container-cards">
                <ModaleDuration data={data} />
                <ModalePerf data={data} />
                <ModaleDayly data={data} />
              </div>
            </div>
              <div className="right-part">
<StatComponent
  number={data.userData.keyData.calorieCount + "Kcal"}
  svg={<Energy />}
  primary="#ff000029"
  name="Calories"
/>
<StatComponent
  number={data.userData.keyData.proteinCount + "g"}
  svg={<Chicken />}
  primary="#4AB8FF1A"
  name="Proteines"
/>
<StatComponent
    number={data.userData.keyData.carbohydrateCount + "g"}

  svg={<Apple />}
  primary="#f9ce233f"
  name="Glucides"
/>
<StatComponent
    number={data.userData.keyData.lipidCount + "g"}

  svg={<Burger />}
  primary="#FD51811A"
  name="Lipides"
/>
              </div>
           
          </div>
        </>
      )}
    </>
  );
};

const Welcome = (props) => {
  const [catchphrase, setCatchphrase] = useState(
    "Pas d'informations sur la session d'hier"
  );
  useEffect(() => {
    if (props.last >= 40) {
      setCatchphrase("Félicitation ! Vous avez explosé vos objectifs hier 👏");
    } else {
      setCatchphrase("Oups ! vous n'avez pas atteint vos objectifs hier 😞");
    }
  }, [props.last]);
  return (
    <div className="welcome">
      <h1>
        Bonjour <span>{props.name}</span>
      </h1>
      <p>{catchphrase}</p>
    </div>
  );
};


//<div className="container-cards">
//                <ModaleDuration data={data} />
//                <ModalePerf data={data} />
//                <ModaleDayly data={data} />
//              </div>


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//