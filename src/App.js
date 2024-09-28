import './App.css';
import Header from "./mycomponents/Header";
import Footer from "./mycomponents/Footer";
import About from "./mycomponents/About";
import Skills from "./mycomponents/Skills";
import Contact from "./mycomponents/Contact";
import Navbar from "./mycomponents/Navbar";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

// {/* <div>
//   <Switch>
//     <Route exact path="./mycomponents/Skills.js" component={Skills}   />
//     <Route path="./mycomponents/About.js" component={About} />
//     <Route path="./mycomponents/Contact.js" component={Contact} />
//   </Switch>
// </div> */}