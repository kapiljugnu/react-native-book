import React, { Component } from "react";
import { View, Text, ListView } from "react-native";
import styles from "./stylesheet";

const rowHasChanged = (r1, r2) => r1 !== r2;
// const data = new Array(100).fill(null).map((v, i) => `Item ${i}`);
const cities = [
  "Alexandria",
  "Aurora",
  "Austin",
  "Boston",
  "Chandler",
  "Charlotte",
  "Dallas",
  "Dayton",
  "Elizabeth",
  "Eugene",
  "Gilbert",
  "Houston",
  "Jackson",
  "Lincoln",
  "Madison",
  "Memphis",
  "Orlando",
  "Phoenix",
  "Savannah",
  "Warren"
];
const source = new ListView.DataSource({ rowHasChanged }).cloneWithRows(cities);

export default () => (
  <View style={styles.container}>
    <ListView
      dataSource={source}
      renderRow={i => <Text style={styles.item}>{i}</Text>}
    />
  </View>
);
