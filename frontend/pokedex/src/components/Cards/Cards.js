import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core/';

import Card from "./Card";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

const CardsList = data => {
    const classes = useStyles();

    const dataArr = data.data;
    
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >

                {dataArr.map(elem => (
                    <Grid item xs={12} sm={6} md={3} key={dataArr.indexOf(elem)}>
                        <Card name= {elem.pokemonname} />
                     </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default CardsList;