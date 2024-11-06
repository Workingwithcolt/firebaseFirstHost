import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Typography from '@mui/material/Typography'


function App() {
  return (
    <Grid2 container>
      <Typography variant="body1" className='text-center' color="initial">Todo App</Typography>
      <img src={'/neom-0SUho_B0nus-unsplash.jpg'} width={500} height={500}></img>
    </Grid2>
  );
}
export default App;
