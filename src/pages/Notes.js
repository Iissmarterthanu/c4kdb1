import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Notes() {
  const classes = useStyles();
  console.log("notes");
  return (
    <Container>
      <h3>Collars For Kings Database</h3>
    </Container>
  )
}
