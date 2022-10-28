import React from "react";
import { View } from "react-native";
import RepositoriesList from "./RepositoriesList";
import AppBar from "./AppBar";
import { Route, Routes, Switch } from "react-router-native";
import Login from "../pages/Login";

function Main() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar></AppBar>
      <Routes>
        <Route path="/" exact element={<RepositoriesList />}></Route>
        <Route path="/singin" exact element={<Login />}></Route>
      </Routes>
    </View>
  );
}

export default Main;
