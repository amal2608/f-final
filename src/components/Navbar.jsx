import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import React from 'react'
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';

const Navbar = () => {
  return (
    <div>

    <Box>
      <AppBar position="fixed" 
      sx={{ backgroundColor : '#1769aa' }}>
        <Toolbar>
          <FoodBankOutlinedIcon/>
          <Typography variant="h6" 
          component="div" sx={{ flexGrow: 1 ,
          fontFamily : 'Arial Black',
          color : 'BLACK'}}>
            ACP EVENTMANGEMENT
          </Typography>
          <Button component={Link} to="/" color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar