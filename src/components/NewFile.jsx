import React from "react";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import "../styles/NewFile.css";

import firebase from "firebase/compat/app";
import { storage, db } from "../firebase";

import { makeStyles } from "mui-styles-hook";
import Modal from "@mui/material/Modal";

function getModalStyle() {
  return {
    height: `116px`,
    position: `relative`,
    width: `400px`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    backgroundColor: `rgba(218,211,211,.5)`,
    borderRadius: `15px`,
    padding: `.5rem`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function NewFile() {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setUploading(true);

    storage
      .ref(`files/${file.name}`)
      .put(file)
      .then((snapshot) => {
        console.log(snapshot);

        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            //post image inside the db

            db.collection("myFiles").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: file.name,
              fileUrl: url,
              size: snapshot._delegate.bytesTransferred,
            });

            setUploading(false);
            setOpen(false);
            setFile(null);
          });

        storage
          .ref("files")
          .child(file.name)
          .getMetadata()
          .then((meta) => {
            console.log(meta.size);
          });
      });
  };

  return (
    <div className="newFile">
      <div className="newFile__container" onClick={handleOpen}>
        <AddIcon />
        <p>New</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <p style={{ marginBottom: "1rem", padding: "1rem" }}>
            Select files you want to upload!....
          </p>
          {uploading ? (
            <p>Uploading...</p>
          ) : (
            <>
              <input
                type="file"
                onChange={handleChange}
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  padding: "4px 4px 4px 3px",
                  marginRight: "1rem",
                  marginLeft: "1rem",
                }}
              />
              <button
                onClick={handleUpload}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "4px 4px 4px 3px",
                }}
              >
                Upload
              </button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default NewFile;
