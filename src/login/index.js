import React, { Component } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import styles from "./stylesheet";

export default () => (
  <View style={styles.container}>
    <Text style={styles.label}>User Name</Text>
    <TextInput style={styles.input} placeholder="user name" />
    <Text style={styles.label}>Password</Text>
    <TextInput style={styles.input} secureTextEntry placeholder="password" />
    <Button
      title="Login"
      onPress={() => {
        Alert.alert("Login");
      }}
    />
  </View>
);
