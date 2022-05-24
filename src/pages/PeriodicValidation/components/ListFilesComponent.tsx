import React from 'react';
import {Box, IconButton, List, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const ListFilesComponent = ({files, handleDeleteFile}: any) => {
  const myFiles: any[] = [];
  Array.from(files).forEach((file:any) => {
    myFiles.push(file);
  })


  return (
    <Box sx={{
      backgroundColor: "#8DB763",
      border: "1px solid #FFFFFF",
      width: "100%",
      marginTop: "10px",
      borderRadius: "5px",
      height: "auto",
      boxSizing: "border-box",
      padding: "10px",
      maxHeight: "300px",
      overflowY: "scroll",
    }}>
      {myFiles.map((file:File) =>
        <List key={file.name}>
          <ListItem  secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteFile(file.name)}>
              <DeleteIcon style={{ color: 'white' }} />
            </IconButton>
          }>
            <ListItemText  style={{
              color: 'white',
            }}
              primary={file.name}
            />
          </ListItem>
        </List>
      )}
    </Box>
  );
};

export default ListFilesComponent;