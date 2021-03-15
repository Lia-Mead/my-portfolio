import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import About from "./About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Projects />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
