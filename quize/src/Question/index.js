import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function Question({ questionObj, calculateScore }) {
  const [value, setValue] = useState('');

  const classes = useStyles();

  const handleAnswerChange = (event) => {
    setValue(event.target.value);
    calculateScore(questionObj, event.target.value);
  };

  const { id, title, answers } = questionObj;

  return (
    <Grid item xs={12}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{title}</FormLabel>
        <RadioGroup row aria-label={title} name={id} value={value} onChange={handleAnswerChange}>
          {answers.map((item, index) => { return <FormControlLabel value={item} control={<Radio color="primary" />} label={item} key={index} /> })}
        </RadioGroup>
      </FormControl>
    </Grid>

  );
}