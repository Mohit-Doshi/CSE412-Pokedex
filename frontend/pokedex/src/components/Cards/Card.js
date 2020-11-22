import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import CustomAccordion from "../Accordion/Accordion";


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    textAlign: "center"
  },
});

const PokemonCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src = {`data:image/png;base64,${props.props.img_base64encoded}`} alt="Pokemon img"/>
      <CardActionArea>
      <CardContent>
          <CustomAccordion props={props}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;