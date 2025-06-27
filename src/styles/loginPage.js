import { Container, styled, TextField , Button} from "@mui/material";
import loginBackground from "../assets/two.jpg";
import {COLORS} from  "../constants/colors"
import { Form as FormikForm } from "formik";

const {SECONDARY,PRIMARY,TEXT_PRIMARY} =COLORS;

export const Background = styled(Container)({
  height: "100vh",
  width: "100vw",
  backgroundImage: `url(${loginBackground})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Form = styled(FormikForm)({
  height: "250px",
  width: "340px",
});

export const Fieldset = styled("fieldset")({
  width: "100%",
  height: "100%",
  border: `3px solid ${SECONDARY}`,
  background: "white",
  display: "flex",
  gap: "22px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "& .MuiOutlinedInput-root:hover":{
    borderColor:"none"
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor:`${SECONDARY} !important`,
  },
});


export const Legend = styled("legend")({
  marginLeft: "20px",
  fontFamily: "math",
  fontWeight: 600,
  background: SECONDARY,
  padding: "2px 14px",
  color: "white",
  fontSize: "smaller",
});

export const LoginTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: 26,
    width: 224,
    padding: 6,
    marginBottom: 6,
  },

  "& .MuiInputBase-input": {
    padding: 0,
    fontSize: 12,
  },
  "& .Mui-error": {
    margin: 0,
    fontSize: 10,
  },
});

export const LoginButton  = styled(Button)({
    width: "74px",
    fontSize: "12px",
    height: "32px",
    background:PRIMARY,
    color:TEXT_PRIMARY,
})