import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    // height: "200px",
    // backgroundColor: "rgb(44, 44, 150)",
    border: "1px solid transparent ",
    overflow: "hidden",
  },
  media: {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    height: "1px",
  },
}));
