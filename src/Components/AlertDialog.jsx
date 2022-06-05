import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ open, setClose, handleOperation, text }) {
  const handleCloseOperation = () => {
    setClose();
    handleOperation();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={setClose}
        aria-labelledby="Alert-Dialog"
        aria-describedby="Befor-Action"
      >
        <DialogTitle id="alert-dialog-title">{"Logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={setClose}>No</Button>
          <Button onClick={handleCloseOperation} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
