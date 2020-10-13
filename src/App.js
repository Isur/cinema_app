import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router";
import EntryLayout from "./layouts/EntryLayout/EntryLayout.layout";
import MainLayout from "./layouts/MainLayout/MainLayout.layout";

function App() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <EntryLayout>
          <div />
        </EntryLayout>
      </Route>
      <Route exact path={"/app"}>
        <MainLayout>
          <div />
        </MainLayout>
      </Route>
    </Switch>
  );
}

export default App;
