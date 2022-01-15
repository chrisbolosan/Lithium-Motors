import React from "react";
import useStore from "../../store";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import Colors from "../Colors/Colors";
import "./NavigationBar.css";

const pages = ["LOREM", "IPSUM", "EXCEPTEUR", "Consectetur", "Veniam"];

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElCart, setAnchorElCart] = React.useState(null);

  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenCartMenu = (event) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };

  return (
    <AppBar
      className="navigation-container"
      position="static"
      sx={{ background: "#FFFFFF", width: "100%", maxWidth: "1350px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex", color: "#000000" },
              fontSize: "20px",
              fontWeight: "bold",
            }}
            className="lorem-logo"
          >
            Lorem Ipsum
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className="hamburger-menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    className="navigation-menu-item"
                    sx={{
                      display: { color: "black" },
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "#000000" },
            }}
          >
            Lorem Ipsum
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", fontSize: "14px" },
              justifyContent: "space-around",
            }}
          >
            {pages.map((page) => (
              <Button
                className="navigation-menu-item"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={cart.length} color="primary">
              <IconButton onClick={handleOpenCartMenu} sx={{ p: 0 }}>
                <span className="material-icons">shopping_cart</span>
              </IconButton>
            </Badge>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElCart}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElCart)}
              onClose={handleCloseCartMenu}
            >
              {cart.length === 0 ? (
                <MenuItem>
                  <Typography textAlign="center">No items in cart</Typography>
                </MenuItem>
              ) : (
                cart.map((cartItem) => (
                  <MenuItem key={cartItem.id} sx={{ display: "flex" }}>
                    <img className="cart-item-img" src={cartItem.img} alt="" />
                    <div className="cart-item-details">
                      <h4>{cartItem.name}</h4>
                      <Colors />
                      <button onClick={() => removeFromCart(cartItem.id)}>
                        Remove
                      </button>
                    </div>
                  </MenuItem>
                ))
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
