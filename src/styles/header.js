import { AppBar, styled, Box,Button } from "@mui/material";
import { COLORS } from "../constants/colors";


const {PRIMARY, TEXT_PRIMARY} = COLORS;

export const HeaderAppBar = styled(AppBar)({
  // position: "static",
  height: "56px",
  background:PRIMARY,
  display:"flex",
  flexDirection:"row",
  alignItems: "center",
  justifyContent:"space-between",
  padding:"0 28px",
});


export const HeaderBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"22px"
})


export const LogoutButton = styled(Button)({
 color:TEXT_PRIMARY,
 fontWeight:600,
})

// export CartIcon = styled()