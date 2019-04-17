import React from "react";
import PropTypes from "prop-types";
import { Text, ListView, View } from "react-native";
import styles from "../stylesheet";

import ListControls from "./controls";

// Renders the actual "<ListView>" React Native
// component. The "renderSectionHeader" property
// is where our controls go. The "renderRow"
// property, as always, renders the actual item.
const List = ({ source, Controls, onFilter, onSort, asc }) => (
  <View style={styles.container}>
    <ListView
      enableEmptySections
      dataSource={source}
      renderSectionHeader={() => <Controls {...{ onFilter, onSort, asc }} />}
      renderRow={i => <Text style={styles.item}>{i}</Text>}
    />
  </View>
);

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  source: PropTypes.instanceOf(ListView.DataSource).isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired
};

// The "Controls" component is actually our own
// "ListControls" component by default. However,
// this can be overriden by anyone wanting to provide
// their own control components.
List.defaultProps = {
  Controls: ListControls
};

export default List;
