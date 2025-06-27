import { useState } from "react";
import Header from "../Header";
import {
  ActionButton,
  HeadingCart,
  TableCellStyle,
  CheckoutButton,
} from "../../styles/checkout";
import {
  PlaceorderContainer,
  PlaceorderPaper,
  PlaceorderBox,
  OrderedModal,
  ChildModal,
  ModalButton,
} from "../../styles/placeorder";

import {
  TableFooter,
  TableRow,
  TableBody,
  Table,
  Typography,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../router/routePaths";
import Dashboard from "./Dashboard";

const PlaceOrder = ({
  totalCartQuantity,
  cartList,
  totalPrice,
  handleClearCart,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  return (
    <>
      <Header
        totalCartQuantity={totalCartQuantity}
        handleClearCart={handleClearCart}
      />
      <PlaceorderContainer>
        <ActionButton onClick={() => navigate(ROUTE_PATHS.CHECKOUT_PAGE)}>
          BACK TO CART
        </ActionButton>
        <PlaceorderPaper>
          <PlaceorderBox>
            <HeadingCart variant="h6">Order Summary</HeadingCart>
            <Typography variant="subtitle2">
              You Have {totalCartQuantity} Items in Your Cart
            </Typography>
          </PlaceorderBox>

          <Table aria-label="simple table">
            <TableBody>
              {cartList.map((product) => (
                <TableRow key={product.id}>
                  <TableCellStyle>
                    {product.quantity} *{product.name}
                  </TableCellStyle>
                  <TableCellStyle align="right">
                    ${product.quantity * product.cost}
                  </TableCellStyle>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCellStyle>TotalPrice</TableCellStyle>
                <TableCellStyle align="right">${totalPrice}</TableCellStyle>
              </TableRow>
            </TableFooter>
          </Table>
        </PlaceorderPaper>

        <CheckoutButton onClick={handleOpen}>PLACEORDER</CheckoutButton>

        <OrderedModal open={open} onClose={handleClose}>
          <ChildModal>
            <Typography>Thank You For Placing the Order</Typography>
            <ModalButton
              variant="text"
              onClick={() => {
                handleClearCart(), navigate(ROUTE_PATHS.DASHBOARD_PAGE);
              }}
            >
              OKAY
            </ModalButton>
          </ChildModal>
        </OrderedModal>
      </PlaceorderContainer>
    </>
  );
};

export default PlaceOrder;
