export const apiURL = () => {
  switch (process.env.REACT_APP_ENV) {
    case "development":
      return "https://localhost/api/";
    default:
      return "https://localhost/api/";
  }
};
