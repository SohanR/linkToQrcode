import DownloadIcon from '@mui/icons-material/Download';
import { Button, Container, InputLabel, NativeSelect, TextField, Typography } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';
import { useState } from 'react';
function App() {


  const [url, setUrl] = useState('');
  const [size, setSize] = useState(300);

const downloadImag = (url) =>{
  const img = document.createElement('a')
  img.href = document.getElementById('canvas').toDataURL();
  img.download = 'qrcode.png'
  img.click()
}


  return (

    <Container align='center'  >
      <Typography align='center' variant='h3' mt={5} color='secondary'   > 
        Link To QR Code Generator
      </Typography>
      <p style={{fontSize:10,marginBottom:50}} >Made with &#9829; by <a href="https://mrsohan.netlify.app/" target="_blank" rel='noreferrer'> <Button style={{fontSize:10}} color='secondary' >Md. Mizanur Rahman </Button> </a></p>

      <TextField id="outlined-basic" type={URL} margin='normal' label="Enter URL" variant="outlined" value={url} onChange={(e) => setUrl(e.target.value)} />

     
        <InputLabel style={{marginTop:20, marginBottom:10}} variant="standard" htmlFor="uncontrolled-native">
          Size
        </InputLabel>
        <NativeSelect
          value={size}
          onChange ={ (e) => setSize(e.target.value)}
          style={{marginBottom:10}}
          variant='filled'
          defaultValue={300}
          inputProps={{
            name: 'size',
            id: 'uncontrolled-native',
          }}
        >
          <option value={100}>Small</option>
          <option value={300}>Medium</option>
          <option value={700}>Large</option>
        </NativeSelect>
   



        <QRCodeCanvas id='canvas' style={{display:'block', marginTop:30,marginBottom:30, width:{size}}} value={url} size={size} renderAs="canvas"  />
      


      <Button  onClick={downloadImag} variant="contained" color='secondary' style={{display:'flex', marginTop:20}} endIcon={<DownloadIcon />} >
            Download
      </Button>

      




        
    </Container>
      




  );
}

export default App;
