import { useState } from "react";

import Wrapper from "./components/Wrapper/Wrapper";
import Navigator from "./components/Navigator/Navigator";

import styles from "./App.module.css";

function App() {
  const [isNav, setIsNav] = useState(false);

  const toggleIsNavHandler = () => {
    setIsNav((prev) => !prev);
  };

  return (
    <section>
      <Navigator isNav={isNav} toggleNav={toggleIsNavHandler} />
      <main className={styles.main}>
        <Wrapper>
          <h1 className={styles.headline}>Welcome to my page</h1>
          <div className={styles.textBlock1}></div>
          <div className={styles.textBlock2}></div>
          <div className={styles.textBlock3}></div>
        </Wrapper>
      </main>
    </section>
  );
}

export default App;
