"use client"

import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";

export default function AddPost() {
    const [textValue, setTextValue] = useState<string>("");

    const onTextChange = (e: any) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");
  
    return (
      <Paper>
        <h2>Form Add</h2>
  
        <TextField
          onChange={onTextChange}
          value={textValue}
          label={"Text Value"} 
        />
  
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleReset}>Reset</Button>
      </Paper>
    );
  };