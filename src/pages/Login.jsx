import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { Formik, useField } from "formik";
import StyleTextInput from "../components/StyleTextInput.jsx";
import StyleText from "../components/StyleText.jsx";
import { loginValidationSchena } from '../validationSchemas/login.js'

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
  form: {
    margin: 12,
  },
});

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
  
    return (
      <>
        <StyleTextInput
          error={meta.error}
          value={field.value}
          onChangeText={value => helpers.setValue(value)}
          {...props}
        />
        {meta.error && <StyleText style={styles.error}>{meta.error}</StyleText>}
      </>
    )
  }

function Login() {
  return (
    <Formik
      validationSchema={loginValidationSchena}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="Email" />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}

export default Login;
