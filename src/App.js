import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Scroll
import ScrollToTop from "./utils/scrollToTop";

//Components
import Footer from "./Components/Footer";
import Header from "./Components/Navbar/Header";

//Screens
import Home from "./Screens/Home";
import Login from "./Screens/Login"
import Register from "./Screens/Register"

//Theme
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./utils/theme";
const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
