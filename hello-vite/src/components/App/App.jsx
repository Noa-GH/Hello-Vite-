import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import "./App.css";
// This is the main App component that combines the Header, Main, and Footer components to create the structure of the application.
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
