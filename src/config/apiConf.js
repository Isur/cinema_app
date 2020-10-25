export const apiURL = () => {
  switch (process.env.REACT_APP_ENV) {
    case "development":
      return "http://localhost/api/";
    default:
      return "http://localhost/api/";
  }
};
