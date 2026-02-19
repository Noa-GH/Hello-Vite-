import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/main";
import "./App.css";
import Animal from "../animal/Animal";
// This is the main App component that combines the Header, Main, and Footer components to create the structure of the application.
function App() {
  return (
    <>
      <Header />
      {/* fragmenting to organize the animal components */}
      <>
        <p>Cats are the best!</p>
        <Animal selectedAnimal={"cat"} />
        <p>Dog&apos;s are &quot;ok&quot; I guess</p>
        <Animal selectedAnimal={"dog"} />
      </>
      <Main />
      <Footer />
    </>
  );
}

export default App;
