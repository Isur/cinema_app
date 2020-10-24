import React, { useState } from "react";
import "./LoginPage.styles.scss";
import LoginForm from "./components/LoginForm/LoginForm.component";
import RegisterForm from "./components/RegisterForm/RegisterForm.component";

const LoginPage = () => {
  const [visibleForm, setVisibleForm] = useState("login");

  return (
    <div className={"LoginPage"}>
      {visibleForm === "login" && (
        <LoginForm onFormChange={(form) => setVisibleForm(form)} />
      )}
      {visibleForm === "register" && (
        <RegisterForm
          onFormChange={(form) => {
            setVisibleForm(form);
          }}
        />
      )}
    </div>
  );
};

export default LoginPage;
