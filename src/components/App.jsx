import React from "react"
import Header from "./Header/Header";
// import Formation from "./Formation";
import Forma from "./Formation/Forma";
import Projet from "./Projet/Projet";
// import Veille from "./Veille/Veille";
import Footer from "./Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Forma />
      <Projet />
      {/* <Veille /> */}
      <Footer />
    </React.Fragment>
  )
}

export default App
