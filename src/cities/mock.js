// import fetchMock from "fetch-mock";
// import querystring from "querystring";

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

const filterAndSort = (data, text, asc) =>
  data
    .filter(i => text.length === 0 || i.includes(text))
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );

// fetchMock.mock(/\/cities.*/, url => {
//   // Gets the "filter" and "asc" parameters.
//   const params = querystring.parse(url.split("?")[1]);

//   // Performs the sorting and filtering before
//   // responding.
//   return {
//     items: filterAndSort(
//       cities,
//       params.filter ? params.filter : "",
//       !!+params.asc
//     )
//   };
// });

export default (filter, asc) => Promise.resolve(filterAndSort(cities, filter, asc));
