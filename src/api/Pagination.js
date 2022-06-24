import {Box , Pagination} from "@mui/material";



function Pagination1 ()  {
  return (
    <Box justifyContent={"center"} alignItems="center" display={"flex"}
    sx={{
        margin:"20px 0px"
    }}>
<Pagination 
count={10}/>
    </Box>
  )
};

export default Pagination1;