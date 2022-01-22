import {
  Avatar,
  AvatarGroup,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      paddingTop: theme.spacing(10),
      position: `sticky`,
      top: 0
    },
    title: {
      fontSize: 16,
      fontWeight: 500,
      color: `#500`,
    },
    avatar: {
      display: `flex`,
      justifyContent: `center`,
      marginBottom: 15
    },
    link: {
      marginRight: `8px !important`,
      color: `#555 !important`,
      fontSize: `16px !important`
    },
  };
});

function Rightbar() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Online Friends
      </Typography>
      <div className={classes.avatar}>
      <AvatarGroup max={8} >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar alt="Travis Howard" src="" />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/8.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/9.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/10.jpg"
        />
      </AvatarGroup>
      </div>
      
      <Typography variant="h6" gutterBottom className={classes.title}>
        Gallery
      </Typography>
      <ImageList sx={{ width: `100%`, height: `auto` }}  cols={3} rowHeight={140} style={{marginBottom: 16}}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>

      <Typography variant="h6" gutterBottom className={classes.title}>
        Categories
      </Typography>
      <Link href="#" variant="body2" className={classes.link}>Sport</Link>
      <Link href="#" variant="body2" className={classes.link}>Food</Link>
      <Link href="#" variant="body2" className={classes.link}>Movies</Link>
      <Link href="#" variant="body2" className={classes.link}>Life</Link>
      <Divider orientation="vertical" flexItem style={{marginBottom: 6}} />
      <Link href="#" variant="body2" className={classes.link}>Science</Link>
      <Link href="#" variant="body2" className={classes.link}>Fun</Link>
      <Link href="#" variant="body2" className={classes.link}>Music</Link>
      <Link href="#" variant="body2" className={classes.link}>ReactJS</Link>
    </Container>
  );
}

export default Rightbar;
