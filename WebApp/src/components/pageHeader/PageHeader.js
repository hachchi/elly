import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Define styles using makeStyles hook
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2), // Padding applied to the root element
  },
}));

// Functional component PageHeader
export default function PageHeader(props) {
  const classes = useStyles(); // Apply styles using useStyles hook

  return (
    // Paper component with custom styles
    <Paper className={classes.root}>
      {/* Typography component for the title */}
      <Typography variant="h5" component="h3">
        {props.title} {/* Render title passed as props */}
      </Typography>
      {/* Typography component for the subtitle */}
      <Typography component="p">
        {props.subtitle} {/* Render subtitle passed as props */}
      </Typography>
    </Paper>
  );
}
