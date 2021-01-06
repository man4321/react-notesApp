import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import ReactPDF from "@react-pdf/renderer";
// import { PDFViewer } from "@react-pdf/renderer";
// import MyDocument from "./resume";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "8px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    // fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: "400px",
    //   margin:"16px"
  },
});

export default function Profile() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Typography className={classes.title} variant="h3">
        About me
      </Typography>
      <CardContent>
        <img src="../../manohar.jpeg" className={classes.media} />
        <Typography className={classes.title} variant="h6">
          Created by Manohar Seervi
        </Typography>
      </CardContent>
    </Card>
  );
}
