import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Post from "./Post";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      paddingTop: theme.spacing(10),
    }
  }
});

function Feed() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feed;
