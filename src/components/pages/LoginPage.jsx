import React from "react";
import {
  Background,
  Form,
  Fieldset,
  Legend,
  LoginButton,
} from "../../styles/loginPage";
import { Formik } from "formik";
import { loginValidation } from "../../schemas"
import CustomTextField from "../shared/CustomInput";
import { PLACEHOLDER, NAME } from "../../constants/placeholder"
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../router/routePaths";

const LoginPage = () => {
  const { USERNAME, EMAIL } = PLACEHOLDER;
  const { USER, EMAILNAME } = NAME;
  const navigate = useNavigate();

  const onSubmit = (_,actions) => {
    actions.resetForm(); // Optional: reset after submit
    navigate(ROUTE_PATHS.DASHBOARD_PAGE); // Just call it directly
  };

  return (
    <Background>
      <Formik
        initialValues={{ userName: "", email: "" }}
        validationSchema={loginValidation}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Fieldset>
              <Legend>ECOMMERCE LOGIN</Legend>
              <CustomTextField placeholder={USERNAME} name={USER} type="text" />
              <CustomTextField
                placeholder={EMAIL}
                name={EMAILNAME}
                type="email"
              />
              <LoginButton
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </LoginButton>
            </Fieldset>
          </Form>
        )}
      </Formik>
    </Background>
  );
};

export default LoginPage;
