import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Question from '../Question/index';
import questions from '../questionsRepository.json'
import Button from '@material-ui/core/Button';
import Score from '../Score/index';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function Form() {
  const [quizeScore, setQuizeScore] = React.useState(0);
  const [quizeSent, setQuizeSent] = React.useState(false);

  const classes = useStyles();

  const calculateScore = (questionObj, answer) => {
    const { correctAnswer, score } = questionObj;
    const questionScore = correctAnswer === answer ? Number(score) : 0;
    setQuizeScore(quizeScore + questionScore);
  };

  const getQuizeScore = (event) => {
    event.preventDefault();
    setQuizeSent(true);
  };

  return quizeSent ? <Score quizeScore={quizeScore} /> :
    (
      <form onSubmit={getQuizeScore}>
        <Grid container spacing={3}> {questions.map((item, index) => {
          return <Question questionObj={item} key={index} calculateScore={calculateScore} />;
        })}
          <Grid item xs={12}>
            <Button type="submit" variant="outlined" color="primary" className={classes.button}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    )
}