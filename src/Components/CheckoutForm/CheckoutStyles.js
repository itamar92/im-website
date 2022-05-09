import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "1%",
    textAlign: "center",
  },

  checkoutContainer: {
    display: "grid",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
}));
