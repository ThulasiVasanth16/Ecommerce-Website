import React from "react";
import { Typography } from "@mui/material";
import { HeaderAppBar, HeaderBox, LogoutButton } from "../Styles/header";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { COLORS } from "../constants/colors";
import { ROUTE_PATHS } from "../router/routePaths";


const { TEXT_PRIMARY, DISABLE_CART } = COLORS;

const Header = ({ totalCartQuantity,handleClearCart }) => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderAppBar>
        <Typography variant="h6">
          Welcome To React E-commerce Shopping Mart
        </Typography>
        <HeaderBox>
          <LogoutButton variant="text" onClick={() =>{ handleClearCart(); navigate(ROUTE_PATHS.LOGIN_PAGE); }}>
            LOGOUT
          </LogoutButton>
          <Badge badgeContent={totalCartQuantity} color="error">
            <ShoppingCartIcon
              sx={{
                cursor: "pointer",
                color: totalCartQuantity ? TEXT_PRIMARY : DISABLE_CART,
              }}
              onClick={() => navigate(ROUTE_PATHS.CHECKOUT_PAGE)}
            />
          </Badge>
        </HeaderBox>
      </HeaderAppBar>
    </>
  );
};

export default Header;
