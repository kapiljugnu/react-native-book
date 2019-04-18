import React, { useEffect, useState } from "react";
import { ListView } from "react-native";
import List from "./list/index";
import fetchItems from './mock';

// The two comparator functions we need to pass
// to the data source. The "rowHasChanged()" function
// does simple strict inequality. So does
// "sectionHeaderHasChanged()".
const rowHasChanged = (r1, r2) => r1 !== r2;
const sectionHeaderHasChanged = rowHasChanged;

// Fetches items from the API using
// the given "filter" and "asc" arguments. The
// returned promise resolves a JavaScript object.
// const fetchItems = (filter, asc) =>
//   fetch(`https://restcountries.eu/rest/v2/all`)
//     .then(resp => {
//       console.log(resp);
//       return resp.json();
//     })
//     .then(resp => resp.map(item => item.name));


// container of list
export default () => {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [source, setSource] = useState(
    new ListView.DataSource({
      rowHasChanged,
      sectionHeaderHasChanged
    }).cloneWithRows([])
  );

  useEffect(() => {
    // using then pattern , warning ::  effect function should not return anything despite a function
    fetchItems(filter, asc).then(cities => {
      setSource(source.cloneWithRows(cities));
    });
  }, [filter, asc]);

  return (
    <List
      source={source}
      asc={asc}
      onFilter={text => {
        setFilter(text);
      }}
      onSort={() => {
        setAsc(!asc);
      }}
    />
  );
};
