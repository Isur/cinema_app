export const apiURL = () => {
  switch (process.env.REACT_APP_ENV) {
    case "development":
      return "http://localhost:5000/api/";
    default:
      return "http://localhost:5000/api/";
  }
};
