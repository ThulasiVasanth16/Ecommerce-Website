import Header from "../Header";
import {
  ActionButton,
  CheckoutContainer,
  CheckoutPaper,
  HeadingCart,
  CheckoutBox,
  ShopCartHeading,
  TableCellStyle,
  CheckoutButton,
} from "../../styles/checkout";

import { COLORS } from "../../constants/colors";

import {
  QuantityControlBox,
  CountButton,
  ProductImage,
  ProductCount,
} from "../../styles/slidebar";

import { useNavigate } from "react-router-dom";
import {
  TableFooter,
  TableRow,
  TableHead,
  TableBody,
  Table,
  Typography,
} from "@mui/material";
import { ROUTE_PATHS } from "../../router/routePaths";

const { SECONDARY_BORDER_COLOR } = COLORS;

const Checkout = ({
  totalCartQuantity,
  handleClearCart,
  cartList,
  handleAddToCart,
  handleRemoveFromCart,
  totalPrice,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Header totalCartQuantity={totalCartQuantity} handleClearCart={handleClearCart}/>
      {totalCartQuantity === 0 ? (
        <CheckoutContainer>
          <ActionButton onClick={() => navigate(ROUTE_PATHS.DASHBOARD_PAGE)}>
            BACK TO PRODUCTS
          </ActionButton>

          <ShopCartHeading variant="subtitle1">
            Please Purchase the Product
          </ShopCartHeading>

          <CheckoutPaper>
            <Typography variant="subtitle2"> No Items Added</Typography>
          </CheckoutPaper>
        </CheckoutContainer>
      ) : (
        <CheckoutContainer>
          <ActionButton onClick={() => navigate(ROUTE_PATHS.DASHBOARD_PAGE)}>
            BACK TO PRODUCTS
          </ActionButton>

          <ShopCartHeading variant="subtitle1">Shopping Cart</ShopCartHeading>

          <CheckoutPaper>
            <CheckoutBox>
              <HeadingCart variant="h6">
                You Have {totalCartQuantity} Items in Your Cart
              </HeadingCart>
              <ActionButton onClick={handleClearCart}>
                CLEAR SHOPPING CART
              </ActionButton>
            </CheckoutBox>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCellStyle
                    align="center"
                    sx={{ borderLeft: `1px solid ${SECONDARY_BORDER_COLOR}` }}
                  >
                    Product Image
                  </TableCellStyle>
                  <TableCellStyle align="center">Products</TableCellStyle>
                  <TableCellStyle align="center">Quantity</TableCellStyle>
                  <TableCellStyle
                    align="center"
                    sx={{ borderRight: `1px solid ${SECONDARY_BORDER_COLOR}` }}
                  >
                    Price
                  </TableCellStyle>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartList.map((product) => (
                  <TableRow key={product.id}>
                    <TableCellStyle
                      align="center"
                      sx={{ borderLeft: `1px solid ${SECONDARY_BORDER_COLOR}` }}
                    >
                      <ProductImage
                        sx={{ width: "80px", height: "80px" }}
                        src={product.image}
                        alt={product.name}
                      />
                    </TableCellStyle>
                    <TableCellStyle align="center">
                      {product.name}
                    </TableCellStyle>
                    <TableCellStyle align="center">
                      <QuantityControlBox>
                        <CountButton
                          variant="contained"
                          onClick={() => handleRemoveFromCart(product)}
                        >
                          -
                        </CountButton>
                        <ProductCount>{product.quantity}</ProductCount>
                        <CountButton
                          variant="contained"
                          onClick={() => handleAddToCart(product)}
                        >
                          +
                        </CountButton>
                      </QuantityControlBox>
                    </TableCellStyle>
                    <TableCellStyle
                      align="center"
                      sx={{
                        borderRight: `1px solid ${SECONDARY_BORDER_COLOR}`,
                      }}
                    >
                      ${product.quantity * product.cost}
                    </TableCellStyle>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCellStyle
                    align="center"
                    colSpan={3}
                    sx={{ borderLeft: `1px solid ${SECONDARY_BORDER_COLOR}` }}
                  >
                    TotalPrice
                  </TableCellStyle>
                  <TableCellStyle
                    align="center"
                    sx={{ borderRight: `1px solid ${SECONDARY_BORDER_COLOR}` }}
                  >
                    ${totalPrice}
                  </TableCellStyle>
                </TableRow>
              </TableFooter>
            </Table>
          </CheckoutPaper>
          <CheckoutButton onClick={() => navigate(ROUTE_PATHS.PLACEHOLDER_PAGE)}>
            CHECKOUT
          </CheckoutButton>
        </CheckoutContainer>
      )}
    </>
  );
};

export default Checkout;
