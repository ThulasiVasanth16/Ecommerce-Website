import {
  Paper,
  styled,
  FormControlLabel,
  Card,
  TableCell,
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { COLORS } from "../constants/colors";

const {
  PRIMARY,
  SECONDARY_BUTTON,
  BACKGROUND,
  SECONDARY_BORDER_COLOR,
  TEXT_SECONDARY,
  TEXT_PRIMARY,
} = COLORS;

export const CheckoutContainer = styled(Container)({
  padding: "66px 0 20px",
  background: BACKGROUND,
  maxWidth: "100vw !important",
  minHeight: "100vh",
});

export const ActionButton = styled(Button)({
  minWidth: "30px",
  padding: "6px 20px",
  background: TEXT_PRIMARY,
  border: `0.2px solid ${SECONDARY_BUTTON}`,
  color: TEXT_SECONDARY,
  fontSize: "12px",
});

export const CheckoutPaper = styled(Paper)({
  width: "80%",
  padding: "20px",
  textAlign: "center",
});

export const HeadingCart = styled(Typography)({
  display: "inline-block",
});

export const CheckoutBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: `1px solid ${SECONDARY_BORDER_COLOR}`,
  paddingBottom: "20px",
});

export const ShopCartHeading = styled(Typography)({
  fontWeight: "600",
  margin: "10px 0",
});

export const TableCellStyle = styled(TableCell)({
  fontWeight: "600",
  fontSize: "0.9rem",
  color: TEXT_SECONDARY,
});

export const CheckoutButton = styled(Button)({
  fontSize: "12px",
  height: "32px",
  padding: "0 10px",
  marginTop: "20px",
  background: PRIMARY,
  color: TEXT_PRIMARY,
});
