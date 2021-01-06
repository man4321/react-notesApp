import React, { Fragment, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
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
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  action: {
    justifyContent: "center",
  },
  text: {
    margin: "10px",
  },
});

export default function AddNote(props) {
  const [data, setData] = useState({ title: "", text: "", hideShow: false });
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  function submitForm() {
    props.action(data);
    setData({ ...data, text: "", title: "",hideShow:false });
  }
  function changeTitle(event) {
    setData({ ...data, title: event.target.value });
  }
  function changeText(event) {
    setData({ ...data, text: event.target.value });
  }

  function show() {
    setData({ ...data, hideShow: true });
  }
  function hide() {
    setData({
      ...data,
      hideShow: data.title == "" && data.text == "" ? false : true,
    });
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <form className={classes.form} onMouseOver={show} onMouseLeave={hide}>
          <TextField
            autoComplete="off"
            onChange={(event) => {
              changeTitle(event);
            }}
            value={data.title}
            className={classes.text}
            label={!data.hideShow ? "take a note..." : "Title"}
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <TextareaAutosize
            hidden={!data.hideShow}
            value={data.text}
            onChange={(event) => {
              changeText(event);
            }}
            className={classes.text}
            aria-label="minimum height"
            rowsMin={5}
            placeholder="Text"
          />
        </form>
      </CardContent>
      <CardActions className={classes.action}>
        <Button
          disabled={data.text === "" && data.title === ""}
          variant="contained"
          color="primary"
          onClick={submitForm}
        >
          Add Note
        </Button>
      </CardActions>
    </Card>
  );
}
