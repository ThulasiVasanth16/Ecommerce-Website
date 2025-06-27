import {
  Paper,
  styled,
  TableCell,
  Box,
  Typography,
  Button,
  Container,
  Modal,
} from "@mui/material";
import { COLORS } from "../constants/colors";

const {
  PRIMARY,
  SECONDARY_BUTTON,
  BACKGROUND,
  SECONDARY_BORDER_COLOR,
  TEXT_SECONDARY,
  TEXT_PRIMARY,
  PLACEORDER_BG
} = COLORS;

export const PlaceorderContainer = styled(Container)({
  padding: "66px 0 20px",
  background: BACKGROUND,
  maxWidth: "100vw !important",
  minHeight: "100vh",
 

});


export const PlaceorderPaper = styled(Paper)({
  width: "80%",
  padding: "20px",
  marginTop:"20px",
  backgroundColor: PLACEORDER_BG,
});



export const PlaceorderBox = styled(Box)({
  justifyContent: "space-between",
  borderBottom: `1px solid ${SECONDARY_BORDER_COLOR}`,
  paddingBottom: "20px",
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


export const OrderedModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

export const ChildModal = styled(Box)({
    backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: 24,
      
      outline: "none",
      minWidth: "300px",
})

export const ModalButton = styled(Button)({
    float:"right",
    margin:"20px 10px 0 ",
})