import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {

  return (
    <Box >
      <CircularProgress 
        style={{height: "200px", width: "200px", alignSelf: "center", color: "#002244"}}
        />
    </Box>
  );
}