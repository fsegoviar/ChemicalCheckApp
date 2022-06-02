import React from 'react';
import {Box, Typography} from "@mui/material";

const ListFilesComponent = ({files, handleDeleteFile}: any) => {
  const myFiles: any[] = [];
  Array.from(files).forEach((file:any) => {
    myFiles.push(file);
  })


  return (
    <Box sx={{
      backgroundColor: "#8DB763",
      border: "1px solid #FFFFFF",
      marginTop: "10px",
      borderRadius: "5px",
      height: "auto",
      boxSizing: "border-box",
      maxHeight: "300px",
      padding: "0 10px",
    }}>
      {myFiles.map((file:File) =>
        /*<List key={file.name}>
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
        </List>*/
        <Typography variant={"h6"} color={"white"} style={{
          fontWeight: "bold",
          textAlign: "center",
        }}>{file.name}</Typography>
      )}
    </Box>
  );
};

export default ListFilesComponent;