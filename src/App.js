
import Navigator from "./components/Navigator/Navigator";
import MainPage from "./components/MainPage/MainPage";

import styles from "./App.module.css";

function App() {

  return (
    <>
      <Navigator />
      <main className={styles.main}>
        <MainPage />
      </main>
    </>
  );
}

export default App;
