import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';


function App() {
    const [favorito, setFav] = useState(''); // <-- valor inicial vacío (ninguno seleccionado)

   const [data,setData] = useState({nombre:'',apellidos:'',edad:'',genero:''})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleLimpiar = () => {
    setData({ nombre: "", apellidos: "", edad: "", genero: "" }); 
    setFav('');
   };
  function cambioSelect(e){
    setFav(e.target.value); 
  }

  return (
    <>        
    
      <Box style={{flexDirection:"row" }}>
        <TextField style={{padding:"10px",width:"450px"}} name="nombre" onChange={handleChange} required="true" placeholder='Nombre*'></TextField>
        <TextField style={{padding:"10px",width:"400px"}} name="apellidos" onChange={handleChange} required="true" placeholder='Apellidos*'></TextField>
        <TextField style={{padding:"10px",width:"200px"}} type='number' name="edad" onChange={handleChange} required="true" placeholder='Edad*'></TextField>
        </Box>
        <br/>
        <Box style={{flexDirection:"row"}}>
           
            <div id="izquierda">Generos</div> 
            <RadioGroup style={{  marginLeft: '100px',flexDirection: 'row' }} name="genero" value={data.genero} onChange={handleChange}>
              <Radio value={"masculino"}/> Masculino
              <Radio value={"femenino"}/> Femenino
              <Radio value={"otro"}/> Otro               
              
              <Select style={{ marginLeft: '200px', width:"500px" }}sx={{ ml: 4 }} value={favorito} onChange={cambioSelect}>
              <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
              <MenuItem value={"Java"}>Java</MenuItem>
              <MenuItem value={"Python"}>Python</MenuItem>
            </Select>
            </RadioGroup>
        </Box>
        <br/>

        <Divider></Divider>
        <div className="encuesta">
        Puntua esta encuesta: 
        <Rating></Rating>
        <br/>
        <Checkbox></Checkbox>He leido los terminos y condiciones
        </div>
        <br/>

        <Button variant="contained" color="primary"style={{ flex:"true", maxWidth: '200px' }} onClick={()=> console.log(data)}>
          Enviar
        </Button>
        <Button color="info" onClick={handleLimpiar}>
          Limpiar
        </Button>
    </>
  )
}

export default App
