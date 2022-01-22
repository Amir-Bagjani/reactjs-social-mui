import { useState } from "react";
import { Close, Mail, Notifications, Search } from "@mui/icons-material";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Container,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => {
  return {
    toolbar: {
      display: `flex`,
      justifyContent: `space-between`,
    },
    logoLg: {
      display: `none`,
      [theme.breakpoints.up(`sm`)]: {
        display: `block`,
      },
    },
    logoSm: {
      display: `block`,
      [theme.breakpoints.up(`sm`)]: {
        display: `none`,
      },
    },
    search: {
      display: `flex`,
      alignItems: `center`,
      gap: theme.spacing(2),
      width: `50%`,
      paddingLeft: theme.spacing(1),
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      borderRadius: theme.shape.borderRadius,
      [theme.breakpoints.down(`sm`)]: {
        display: (props) => (props.showSearch ? `flex` : `none`),
        width: `70%`,
      },
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
    },
    searchInput: {
      color: `white !important`,
      width: `100%`,
    },
    closeSearch: {
      [theme.breakpoints.up(`sm`)]: {
        display: `none !important`,
      },
    },
    icon: {
      display: (props) => (props.showSearch ? `none` : `flex`),
      alignItems: `center`,
      gap: theme.spacing(2),
    },
    searchSm: {
      [theme.breakpoints.up(`sm`)]: {
        display: `none !important`,
      },
    },
  };
});

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const classes = useStyle({ showSearch });
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" component="h1" className={classes.logoLg}>
            Site brand
          </Typography>
          <Typography variant="h5" component="h1" className={classes.logoSm}>
            Brand
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase
              placeholder="Search..."
              className={classes.searchInput}
            />
            <Close
              className={classes.closeSearch}
              onClick={() => setShowSearch(false)}
            />
          </div>
          <div className={classes.icon}>
            <Search
              className={classes.searchSm}
              onClick={() => setShowSearch(true)}
            />
            <Badge badgeContent={4} color="secondary">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
            <Avatar
              alt="username"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
