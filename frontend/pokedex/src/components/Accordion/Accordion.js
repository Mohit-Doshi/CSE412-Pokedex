import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions = props => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const info = props.props.props;

  let pokemonName = info.pokemonname;
  pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{pokemonName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            <p style={{fontSize: "75%"}}>HP: {info.hp}</p>
            <p style={{fontSize: "75%"}}>Attack: {info.attack}</p>
            <p style={{fontSize: "75%"}}>Defense: {info.defense}</p>
            <p style={{fontSize: "75%"}}>Speed: {info.speed}</p>
            <p style={{fontSize: "75%"}}>Special Attack: {info.sp_attack}</p>
            <p style={{fontSize: "75%"}}>Special Defense: {info.sp_defense}</p>
            <p style={{fontSize: "75%"}}>Abilities: {info.ability1}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CustomizedAccordions;
