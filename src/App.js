import Navbar from './components/Navbar'
import Leftbar from './components/Leftbar'
import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Add from './components/Add';

const useStyle = makeStyles((theme) => {
  return {
    container: {
      margin: `0 auto`,
    },
    right: {
      [theme.breakpoints.down(`sm`)]: {
        display: `none`
      },
    },
  }
});

function App() {
  const classes = useStyle();
  return (
    <div>
    <Navbar />
    <Grid container className={classes.container} maxWidth={`xl`}>
      <Grid item sm={2} xs={2}><Leftbar /></Grid>
      <Grid item sm={6.5} xs={10}><Feed /></Grid>
      <Grid item sm={3.5} className={classes.right}><Rightbar /></Grid>
    </Grid>
    <Add />
    </div>
  );
}

export default App;
