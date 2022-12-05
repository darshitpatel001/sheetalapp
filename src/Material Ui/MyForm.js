import React from 'react'
import TextField from '@mui/material/TextField';

export default function MyForm() {
  return (
    <div>
         <TextField label="First Name" variant="standard" />
         <TextField label="Middle Name" variant="standard" />
         <TextField label="email" variant="standard" />
         <TextField label="City" variant="standard" />

    </div>
  )
}
