import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './Main.css';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Buffer } from 'buffer';

const Foodedit = (props) => {
    //   var [ptype, setPtype] = useState({
    //     "packid": '', "packname": '',
    //     "pprice": '', "pdescription": '', "status": 'ACTIVE'

    //   });
    var [ptype, setPtype] = useState(props.data);
    const [status, setStatus] = React.useState('');
    var [selectedimage, setSelectedimage] = useState([]);



    const navigate = useNavigate();

    const ptypehandler = (event) => {
        setStatus(event.target.value);
        const { name, value } = event.target
        setPtype((ptype) => ({ ...ptype, [name]: value }))
        // console.log(ptype)
    }

    // const saveData = () => {
    //   axios.post("http://localhost:3005/ptnew", ptype)
    //     .then((response) => { alert("Record saved") })
    //     .catch(err => console.log(err))
    //   navigate('/packageview')

    // }
    const saveData = () => {
        const formdata = new FormData();
        formdata.append('Foodname', ptype.Foodname);
        formdata.append('Foodtype', ptype.Foodtype);
        formdata.append('Amount', ptype.Amount);
        formdata.append('image', selectedimage);
        formdata.append('Description', ptype.pdescription);
        formdata.append('Status', ptype.status);
      
        fetch(`http://localhost:4005/Foodedit/${ptype._id}`,
            { method: 'put', body: formdata, })
            .then((response) => response.json())
            .then((data) => {
                alert("record saved")
            })
            .catch((err) => {
                console.log("error", err)
            })

        navigate('/packageview')

    }

    const handleImage = (event) => {
        const file = event.target.files[0];
        setSelectedimage(file)
        // ptype.image = file
    }

    return (
        <div className='background-3'>
            <Navbar />
            <Sidebar />
            <form>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <center>
                            <h1>Food Items</h1>

                            Food Name : <input type="text" name="Foodname" id="p2" value={ptype.Foodname} onChange={ptypehandler} />
                            <br /><br />
                            Event Type:
                             <br/>
                             <select name='Foodtype' value={ptype.Foodtype} onChange={ptypehandler}>
                            <option>Veg</option>
                            <option>NonVeg</option>
                            <option>Deserts</option>
                            <option>Snacks</option>
                             </select>
                             <br />
                            <br />
                            Amount : <input type="number" name="Amount" id="p6" value={ptype.Amount} onChange={ptypehandler} />
                            <br /><br />
                            Description : <textarea rows='4' name='Description' id='p7' value={ptype.Description} onChange={ptypehandler} />
                            <br /><br />
                            Image :  <img src={`data:image/*;base64,${Buffer.from(ptype.image.data).toString('base64')}`} width="50" height="50" alt='Error' />
                            <input type="file" onChange={handleImage} />
                            <br />
                           
                            Status :
                            <select name='Status'
                                value={status}
                                onChange={ptypehandler} >
                                <option >ACTIVE</option>
                                <option >INACTIVE</option>
                            </select>
                            <br /><br />
                            <Button variant='contained' onClick={saveData}>SAVE</Button>
                        </center>
                    </CardContent>
                </Card>
            </form>
        </div>

    )
}

export default Foodedit
