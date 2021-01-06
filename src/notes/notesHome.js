import React, { Fragment, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Notes from "./notes";
import AddNote from "./addNote";
import {
  createNote,
  showAction,
  deleteNote,
  updateNote,
  getAllNotes,
} from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  notes: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: "32px",
  },
}));

function NotesHome(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getAllNotes();
  }, [getAllNotes, props.notesData]);

  return (
    <Fragment>
      <AddNote
        action={props.createNote}
        showAction={props.showAction}
        showTextForm={props.showTextForm}
      />
      <hr />
      <Typography variant="h3">Your Notes</Typography>
      <hr />
      {props.notesData && Object.keys(props.notesData).length ? (
        <div className={classes.notes}>
          {Object.values(props.notesData).map((note, index) => (
            <Fragment key={index}>
              <Notes
                index={index + 1}
                title={note.title}
                text={note.text}
                marked={note.marked}
                id={Object.keys(props.notesData)[index]}
                deleteNote={props.deleteNote}
                updateNote={props.updateNote}
              />
            </Fragment>
          ))}
        </div>
      ) : (
        <Typography variant="subtitle1">
          Nothing to show! use above function to add notes...
        </Typography>
      )}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    notesData: state.notesData,
    showTextForm: state.showTextForm,
  };
};
const mapActionToProps = (dispatch) => {
  return bindActionCreators(
    {
      createNote,
      showAction,
      deleteNote,
      updateNote,
      getAllNotes,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapActionToProps)(NotesHome);
