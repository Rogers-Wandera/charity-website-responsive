import  React,{useEffect} from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SuccessMessage({errorMessage,handleCloseModal}) {

    useEffect(() => {
        setTimeout(() => {
            handleCloseModal()
        },6000)
    })
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Alert severity="info">{errorMessage}!</Alert>
    </Stack>
  );
}