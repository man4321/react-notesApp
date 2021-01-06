import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 400,
    margin: "16px",
    padding: "8px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    "&:hover": {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      opacity: "1",
      transition: "transform 0.3s ease",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Notes(props) {
  const { index, title, text, marked, id, deleteNote, updateNote } = props;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={classes.root}
      style={
        marked ? { backgroundColor: "Highlight" } : { backgroundColor: "white" }
      }
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Note {index}
        </Typography>
        <Typography variant="h6" component="p">
          {title}
        </Typography>
          <hr />
        <Typography variant="subtitle1">{text}</Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={() => deleteNote(id)}
        >
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => updateNote(id, { text, title, marked })}
        >
          {marked ? "Unmark" : "mark"}
        </Button>
      </CardActions>
    </Card>
  );
}
