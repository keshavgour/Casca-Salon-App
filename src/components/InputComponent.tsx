import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

interface IPROPS {
    type:string,
    placeholder:string
}

const InputComponent : React.FC<IPROPS> = ({ type, placeholder }) => {
    
  return (
    <Grid>
        <TextField fullWidth 
         type={type}
         placeholder={placeholder} 
         variant='outlined' 
         sx={{ width:'850px', backgroundColor:'#fafafa'}} 
         InputProps={{
            startAdornment: (
                <InputAdornment position='start'>
                    <IconButton sx={{":hover":{backgroundColor:'#fff3e0'}}}>
                    <SearchIcon sx={{":hover":{color:'#ff9800'}}}/>
                    </IconButton>
                </InputAdornment>
            ),
            endAdornment:(
                <InputAdornment position='end'>
                  <IconButton sx={{":hover":{backgroundColor:'#fff3e0'}}}>
                    <SortIcon sx={{color:'#ff9800'}} />
                    </IconButton>
                </InputAdornment>
            )
        }} ></TextField>
    </Grid>
  )
}

export default InputComponent
