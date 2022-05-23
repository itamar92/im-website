import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    maxWidth: "100%",
    height: "100%",
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
    padding: "4px",
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    height: "1px",
  },
  removeButton: {
    minWidth: "100px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    marginRight: "12px",
  },
}));
