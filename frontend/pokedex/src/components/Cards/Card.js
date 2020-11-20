import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import CustomAccordion from "../Accordion/Accordion";
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
          <CustomAccordion props={props}/>
        <CardMedia
          component="img"
          alt="Pokemon Image"
          image={pokeImage}
          title={props.pokemonname}
        />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;