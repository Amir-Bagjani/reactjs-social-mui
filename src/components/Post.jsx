import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => {
  return {
    media: {
        height: 250,
        [theme.breakpoints.down(`sm`)]: {
            height: 150,
        },
    },
    card: {
        marginBottom: theme.spacing(3)
    },
  };
});

export default function Post() {
  const classes = useStyle();

  return <Card className={classes.card}>
      <CardActionArea>
          <CardMedia className={classes.media}  image="https://images.pexels.com/photos/211290/pexels-photo-211290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="My Post" />
          <CardContent>
              <Typography gutterBottom variant="h5">My First Post</Typography>
              <Typography variant="body2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, maiores adipisci illo neque autem laboriosam voluptates quia dicta laborum? Ab dolorum a labore aliquam dolorem voluptates necessitatibus doloribus quibusdam rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum temporibus fugit obcaecati nostrum veniam saepe consequuntur aliquam expedita placeat repellat? Eum corrupti sapiente, ipsam eveniet animi mollitia ullam molestias natus!</Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small">SHARE</Button>
          <Button size="small">LEARN MORE</Button>
      </CardActions>
  </Card>;
}
