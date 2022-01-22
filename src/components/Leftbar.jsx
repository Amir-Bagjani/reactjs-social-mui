import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      paddingTop: theme.spacing(10),
      backgroundColor: theme.palette.primary.main,
      height: `100vh`,
      color: `white`,
      position: `sticky`,
      top: 0,
      overflowY: `auto`,
      [theme.breakpoints.up(`sm`)]: {
        backgroundColor: `white`,
        color: `#555`,
        border: `1px solid lightgray`
      },
    },
    item: {
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      gap: theme.spacing(1),
      cursor: `pointer`,
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up(`sm`)]: {
        marginBottom: theme.spacing(3),
        justifyContent: `flex-start`,
      },
    },
    icon: {
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px !important",
      },
    },
    text: {
      fontWeight: `500 !important`,
      [theme.breakpoints.down(`sm`)]: {
        display: `none`,
      },
    },
  };
});

function Leftbar() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className={classes.text}>home</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
