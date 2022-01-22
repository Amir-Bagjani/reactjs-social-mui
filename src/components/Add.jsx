import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => {
  return {
    fab: {
      position: "fixed !important",
      bottom: 20,
      right: 20,
    },
    modal: {
      backgroundColor: `white`,
      width: `400px !important`,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      [theme.breakpoints.down(`sm`)]: {
        width: `100vw !important`,
        height: `100vh !important`,
      },
    },
    form: {
      margin: `1rem 0`,
    },
    formItem: {
      marginBottom: theme.spacing(3),
    },
  };
});

function Add() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Add Post" onClick={() => setOpen(true)}>
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Container className={classes.modal}>
          <div className={classes.form}>
            <div className={classes.formItem}>
              <TextField
                id="standard-basic"
                label="Title post"
                variant="standard"
                fullWidth
              />
            </div>
            <div className={classes.formItem}>
              <TextField
                id="standard-multiline-static"
                rows={4}
                multiline
                label="Tell your story..."
                variant="outlined"
                fullWidth
              />
            </div>
            <div className={classes.formItem}>
              <TextField
                variant="standard"
                select
                value={`Public`}
                id="standard-select-currency"
                label="Visibility"
                fullWidth
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.formItem}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everyone"
                  control={<Radio size="small" />}
                  label="Everyone"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
            <div className={classes.formItem}>
              <Button
                variant="outlined"
                onClick={() => setOpen(false)}
                style={{ marginRight: `1rem` }}
              >
                CREATE
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                CANCEL
              </Button>
            </div>
          </div>
        </Container>
      </Modal>
    </>
  );
}

export default Add;
