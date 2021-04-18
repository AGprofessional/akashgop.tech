import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';

import "./MCard.css"
import FavoriteIcon from '@material-ui/icons/Favorite';



const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    
  },
  media: {
    height: 220,
   
  },
});
const Video = styled.div`
  position: relative;
  overflow: hidden;
`
export default function MCard2(props) {
  const classes = useStyles();
 const [fav, setFav]=useState(true);
 const [open, setOpen]= useState(false);
 const clickFav=()=>{
  setFav(!fav);
 }

 const learnMore=()=>{
   setOpen(!open);
 }
  return (
    <Card className={classes.root} >
      {open?<CardActionArea >
      <CardMedia
          className="gif"
          image={props.videoGIF}
          title={props.title}
      />
        
        <Typography variant="h1" gutterBottom>
          {""}
          </Typography>
        <Typography className="learnMoreDesc" variant="body2" gutterBottom>
        {props.purpose}
        </Typography>
        <Typography className="learnMoreDesc" variant="body2" gutterBottom>
        {props.techStack}
        </Typography>
        <Typography className="learnMoreDesc" variant="body2" gutterBottom>
        {props.whatItDoes}
        </Typography>
        <CardContent>
        <Typography gutterBottom variant="body2" component="h5">
           {props.github}
          </Typography>
          {/*
          <Typography variant="body2" color="textSecondary" component="p">
            {props.point1}
      </Typography>*/}
        </CardContent>
      </CardActionArea>:<CardActionArea >
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        {/*<Typography className="CardDims">
        <Video className={classes.media}>
            <iframe className="iframe" src={props.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Video>
        </Typography>*/}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>}
      <CardActions>
           <IconButton onClick={clickFav} aria-label="add to favorites">
             {fav? <FavoriteIcon/>:<FavoriteIcon style={{color:red[500]}}/>}
          
        </IconButton>
        <Button onClick={learnMore} size="small" color="primary">
          {!open? "Learn More":"Less"}
        </Button>
      </CardActions>
    </Card>
  );
}
