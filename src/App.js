import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router";
import EntryLayout from "./layouts/EntryLayout/EntryLayout.layout";
import MainLayout from "./layouts/MainLayout/MainLayout.layout";
import LoginPage from "./containers/LoginPage/LoginPage.container";
import MoviesPage from "./containers/MoviesPage/MoviesPage.container";
import HallsPage from "./containers/HallsPage/HallsPage.container";
import AccountPage from "./containers/AccountPage/AccountPage.container";

function App() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <EntryLayout>
          <LoginPage />
        </EntryLayout>
      </Route>
      <Route exact path={"/movies"}>
        <MainLayout>
          <MoviesPage />
        </MainLayout>
      </Route>
      <Route exact path={"/halls"}>
        <MainLayout>
          <HallsPage />
        </MainLayout>
      </Route>
      <Route exact path={"/account"}>
        <MainLayout>
          <AccountPage />
        </MainLayout>
      </Route>
    </Switch>
  );
}

export default App;
