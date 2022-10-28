import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import theme from "../theme.js";
import RepositoryStats from "./RepositoryStats.jsx";
import StyledText from "./StyleText.jsx";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.OS == 'android'? theme.colors.primary : '#09f',
    alignSelf: "flex-start",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

const RepositoryHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight="bold">{fullName}</StyledText>
      <StyledText color="secondary">{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryHeader {...props}></RepositoryHeader>
    <RepositoryStats {...props}></RepositoryStats>
  </View>
);

export default RepositoryItem;
