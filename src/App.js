import { Button, CircularProgress, Container, InputLabel, NativeSelect, TextField, Typography } from '@mui/material';
function App() {
  return (

    <Container align='center'  >
      <Typography align='center' variant='h3' mb={10} mt={10} color='secondary'   > 
        Link To QR Code Generator
      </Typography>

      <TextField id="outlined-basic" type={URL} margin='normal' label="Enter URL" variant="outlined" />

     
        <InputLabel style={{marginTop:20, marginBottom:10}} variant="standard" htmlFor="uncontrolled-native">
          Size
        </InputLabel>
        <NativeSelect
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
   
        <Button variant="contained" color='secondary' style={{display:'flex', marginTop:20}} >
           Generate
      </Button>

      <CircularProgress style={{margin:150}} color="secondary" />


      <Button variant="contained" color='secondary' style={{display:'flex', marginTop:20}} >
            Download Image
      </Button>
    </Container>
      

  );
}

export default App;
