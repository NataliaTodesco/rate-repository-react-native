import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Constants from "expo-constants";
import StyledText from "./StyleText";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
    flexDirection: "row",
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
  scroll: {
    paddingBottom: 15,
  },
});

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const textStyles = [styles.text, active && styles.active];
  
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

function AppBar() {
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab active to={"/"}>
          Repositories
        </AppBarTab>
        <AppBarTab active to={"/singin"}>
          Sing In
        </AppBarTab>
      </ScrollView>
    </View>
  );
}

export default AppBar;
