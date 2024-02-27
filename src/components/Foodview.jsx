import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Foodedit from './Foodedit';
import { Buffer } from 'buffer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Foodview = () => {


  var [Foodview, setFoodview] = useState([])
  var [selected, setSelected] = useState();
  var [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4005/Foodview/')
      .then(response => {
        console.log(response.data);
        setFoodview(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const deletevalues = (id) => {
    console.log("Deleting", id);
    axios.put(`http://localhost:4005/foodupdatestatus/${id}`)
      .then(() => {
        console.log("Deleted successfully");
        alert("DELETED");
        setFoodview(prevDetails =>
          prevDetails.map(item =>
            item._id === id ? { ...item, status: "INACTIVE" } : item
          )
        );
      })
      .catch(error => {
        console.error("Error deleting record:", error);
        alert("Error deleting record. Please check console for details.");
      });
  };

  const updatevalues = (value) => {
    console.log("Updating", value);
    setSelected(value);
    setUpdate(true);
  };

  var result =

    <div>
      <Navbar />
      <Sidebar />

      <center>
        <Typography><h3><b>Food Details view</b></h3></Typography>
      </center>
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Food ID</b></TableCell>
              <TableCell><b>Food Name</b></TableCell>
              <TableCell><b>Food Type</b></TableCell>

              <TableCell><b>Amount</b></TableCell>
              <TableCell><b>Description</b></TableCell>

              <TableCell><b>Image</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Edit</b></TableCell>
              <TableCell><b>Delete</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Foodview.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.Foodid}</TableCell>
                  <TableCell>{value.Foodname}</TableCell>
                  <TableCell>{value.Foodtype}</TableCell>

                  <TableCell>{value.Amount}</TableCell>
                  <TableCell>{value.Description}</TableCell>

                  <TableCell>
                    <img src={`data:image/jpeg;base64, ${Buffer.from(value.Foodimage.data).toString('base64')}`}
                      width="50" height="50" alt="Error" />
                  </TableCell>
                  <TableCell>{value.Status}</TableCell>
                  <TableCell>
                    <ModeEditOutlineIcon color='secondary' onClick={() => updatevalues(value)} />
                  </TableCell>
                  <TableCell>
                    <DeleteForeverIcon color='error' onClick={() => deletevalues(value._id)}>
                    </DeleteForeverIcon>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>

        </Table>
      </TableContainer>


    </div>

  if (update) {
    result = <Foodedit data={selected} method='put' />
  }

  return (result)
}



export default Foodview