import { Grid, TextField, StandardTextFieldProps } from '@mui/material'
import React from 'react'

interface IPROPS extends StandardTextFieldProps{
    
}

const TextFieldComponent: React.FC<IPROPS> = ({label, name, type, value, onChange, fullWidth}) => {
  return (
    <Grid>
      <TextField variant='outlined'
       label={label}
       name={name} 
       type={type}
       value={value}
       onChange={onChange}
       fullWidth={fullWidth}
        required
       />
    </Grid>
  )
}

export default TextFieldComponent
