import React from "react";
import ImageEditorRc from "react-cropper-image-editor";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

export const ImageCropper = ({ open, handleClose, handleSave, image }) => {
  if (!image) {
    return null;
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" onClose={handleClose}>
        Crop Profile Picture
      </DialogTitle>
      <DialogContent>
        <ImageEditorRc
          // ref="cropper"
          crossOrigin="true" // boolean, set it to true if your image is cors protected or it is hosted on cloud like aws s3 image server
          src={image}
          style={{ height: 400, width: 600 }}
          aspectRatio={1 / 1}
          className={"your custom class"}
          guides={true}
          rotatable={true}
          saveImage={(e) => handleSave(e)} // it has to catch the returned data and do it whatever you want
          responseType="blob/base64"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageCropper;
