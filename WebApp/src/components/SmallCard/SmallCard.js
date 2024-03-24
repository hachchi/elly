import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { blue } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: 0,
    height: 100,
    maxWidth: 900,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: blue[500],
  },
  title: {
    fontFamily: "Montserrat-Regular",
    fontSize: theme.typography.h5.fontSize,
  },
  count: {
    fontFamily: "Montserrat-Regular",
    fontSize: theme.typography.h3.fontSize,
  },
}));

export default function SmallCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography className={classes.title} component="h2" variant="h5">
            {props.type}
          </Typography>
        }
        subheader={
          <Typography className={classes.count} component="h2" variant="h3">
            {props.count}
          </Typography>
        }
      />
    </Card>
  );
}
