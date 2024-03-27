import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    marginRight: 2,
    borderRadius: 0,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9,
    height: 400,
  },
}));

export default function TileImage(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={props.obPhoto}
        title="Image title"
      />
    </Card>
  );
}
