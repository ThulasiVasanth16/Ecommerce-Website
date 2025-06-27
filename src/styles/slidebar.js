import {
  Paper,
  styled,
  FormControlLabel,
  Card,
  Box,
  Typography,
  Button,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { COLORS } from "../constants/colors";

const {
  RESET,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  BACKGROUND,
  CART_BUTTON,
  TEXT_SECONDARY,
} = COLORS;

export const SlideBarPaper = styled(Paper)({
  width: "306px",
  height: "100vh",
  borderRadius: "0",
  position: "fixed",
});

export const CheckBoxLabel = styled(FormControlLabel)({
  margin: "6px 16px",
  gap: "28px",
  justifyContent: "space-between",
  "& .MuiFormControlLabel-label": {
    fontWeight: "600",
    fontSize: "15px",
  },
});

export const CheckboxIcon = styled(Checkbox)({
  "&.Mui-checked": {
    color: `${RESET}`,
  },
});

export const StyledCard = styled(Card)({
  height: "306px",
  width: "292px",
  border: `1px solid ${SECONDARY_BUTTON}`,
  boxShadow: `0 3px 10px ${PRIMARY_BUTTON}`,
  margin: "30px 16px",
  display: "flex",
  flexDirection: "column",
  padding: "16px",
});

export const ContainerBox = styled(Box)({
  display: "flex",
  marginTop: "56px",
  backgroundColor: BACKGROUND,
  minHeight: "90vh",
  width: "100%",
});

export const CardBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "306px",
  justifyContent: "space-evenly",
});

export const ProductImage = styled("img")({
  width: "50%",
  height: "50%",
  margin: "4px auto",
});

export const ProductCost = styled(Typography)({
  color: PRIMARY_BUTTON,
});

export const QuantityControlBox = styled(Box)({
  display: "flex",
  justifyContent:"space-evenly",
  alignItems: "center",
  gap: "10px",
  marginTop: "10px",

});

export const CountButton = styled(Button)({
  minWidth: "30px",
  padding: "6px 30px",
  background: CART_BUTTON,
  border: `0.2px solid ${SECONDARY_BUTTON}`,
  color: TEXT_SECONDARY,
  
});

export const AddCartButton = styled(Button)({
  marginTop: "10px",
  background: CART_BUTTON,
  color: TEXT_SECONDARY,
  border: `0.2px solid ${SECONDARY_BUTTON}`,
});


export const ProductCount = styled(Typography)({
  fontWeight:"700"
})