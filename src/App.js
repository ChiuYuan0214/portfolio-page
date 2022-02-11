import { useState } from "react";

import Navigator from "./components/Navigator/Navigator";
import MainPage from "./components/MainPage/MainPage";

import styles from "./App.module.css";

function App() {
  const [isNav, setIsNav] = useState(false);

  const toggleIsNavHandler = () => {
    setIsNav((prev) => !prev);
  };

  return (
    <>
      <Navigator isNav={isNav} toggleNav={toggleIsNavHandler} />
      <div id="home"></div>
      <main className={styles.main}>
        <MainPage />
      </main>
    </>
  );
}

export default App;
