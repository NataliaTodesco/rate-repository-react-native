import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/main";

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}
