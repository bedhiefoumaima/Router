import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "./AddMovie.css";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddMovie({ handleMovie }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add A Movie</h2>
      <label>Name</label>
      <input onChange={(e) => setName(e.target.value)} />
      <br />
      <label>image</label>
      <input onChange={(e) => setImage(e.target.value)} />
      <br />
      <label>Date</label>
      <input onChange={(e) => setDate(e.target.value)} />
      <br />
      <label>Type</label>
      <input onChange={(e) => setType(e.target.value)} />
      <br />
      <label>Description</label>
      <input onChange={(e) => setDescription(e.target.value)} />
      <br />
      <label>Rating</label>
      <input type="number" onChange={(e) => setRating(e.target.value)} />
      <br />
      <button
        onClick={() => {
          handleMovie({ name, image, description, image, rating, date });
          handleClose();
        }}
      >
        AddMovie
      </button>
    </div>
  );

  return (
    <div>
      <AddCircleOutlineIcon
        type="button"
        onClick={handleOpen}
        style={{ fontSize: 80, color: "black", position: "fixed" }}
        className="addBtn"
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
