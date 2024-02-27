import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent } from '@mui/material';
import './Main.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
const Food = () => {
  const [inputs, setinputs] = useState({
             Foodname:'',
             Foodtype:'',
             Amount:'', 
             Description:'',
             Eventid:'',
             Status:'ACTIVE'
  });

  const [selectedImage, setSelectedImage] = useState(null);
  var [Eventview, setEventview] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:4005/eventview")
    .then(response =>{
        console.log(response.data)
        setEventview(response.data)
    })
    .catch(err=>console.log(err))
},[])

  const inputsHandler = (Food) => {
    const { name, value } = Food.target;
    setinputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const saveData = () => {
    const formData = new FormData();

    formData.append('Foodname', inputs.Foodname);
    formData.append('Foodtype', inputs.Foodtype);
    formData.append('Amount', inputs.Amount);    
    formData.append('Description', inputs.Description);
    formData.append('Eventid', inputs.Eventid);
    formData.append('Status', inputs.Status);
    formData.append('Foodimage', selectedImage);

    fetch('http://localhost:4005/Foodnew', {
      method: 'POST',
      body: formData
    })
    
      .then((response) => response.json())
      .then(() => {
        alert('Record saved');
        // navigate('/Foodview');
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };

  const handleImage = (Food) => {
    const file = Food.target.files[0];
    setSelectedImage(file);
    setinputs((inputs) => ({ ...inputs, image: file }));
  };

  return (
    <div className='background-3'>
      <Navbar />
      <Sidebar />
      <form>
        <Card sx={{ minWidth: 350, backgroundColor: '#f0e0e0',marginTop:"5vw"}}>
          <CardContent>
            <center><h1>Food Details</h1></center>
             
              Food Name:
              <br/>
              <input type='text' name='Foodname' id='p2' value={inputs.Foodname} onChange={inputsHandler} />
              <br />
              <br />
              Food Type:
              <br/>
              <select name='Foodtype' value={inputs.Foodtype} onChange={inputsHandler}>
                <option>Veg</option>
                <option>NonVeg</option>
                <option>Desert</option>
                <option>Snacks</option>
              </select>
              <br />
              <br />
              Amount:
              <br/>
              <input type='number' name='Amount' id='p6' value={inputs.Amount} onChange={inputsHandler} />
              <br />
              <br />
              Food Image:
              <br/>
              <input type='file' onChange={handleImage} />
              <br />
              <br />
              Description:
              <br/>
              <textarea
                rows='4'
                name='Description'
                id='p7'
                value={inputs.Description}
                onChange={inputsHandler}
              />
              <br />
              <br />
              Event Name: 
              <br/>
      
              <select name="Eventid" value={inputs.Eventid} onChange={inputsHandler}  >
            {
            Eventview.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Eventname}</option>
                )


            })
        }
    </select><br/>
    <br/>
              Status:
              <br/>
              <select name='Status' value={inputs.Status} onChange={inputsHandler}>
                <option>ACTIVE</option>
                <option>INACTIVE</option>
              </select>
              <br />
              <br />
              <Button variant='contained' onClick={saveData}>
                SAVE
              </Button>
         
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default Food;
