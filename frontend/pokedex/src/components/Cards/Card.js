import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import pokeImage from "../../images/abomasnow.png"

const useStyles = makeStyles({
  root: {
    maxWidth: 215,
  },
});

const PokemonCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.name}
          </Typography>
        <CardMedia
          component="img"
          alt="Pokemon Image"
          image={pokeImage}
          title={props.name}
        />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;