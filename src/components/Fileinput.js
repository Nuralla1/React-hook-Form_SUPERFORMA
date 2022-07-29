import React from "react";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";

const FileInput = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      shouldUnregister={true}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <>
            <Dropzone onDrop={onChange}>
              {({ getRootProps, getInputProps }) => (
                <Paper
                  variant="outlined"
                  {...getRootProps()}
                  sx={{
                    background: "grey",
                    textAlign: "center",
                    cursor: "pointer",
                    color: "white",
                    padding: "10px",
                    mt: "20px",
                  }}
                >
                  <CloudUploadIcon sx={{ fontSize: "42px", mt: "16px" }} />
                  <input name={name} onBlur={onBlur} {...getInputProps()} />
                  <p>Drag and drop files here, or click to select files</p>
                </Paper>
              )}
            </Dropzone>
            <List>
              {value.map((f, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFileIcon />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        );
      }}
    />
  );
};

export default FileInput;
