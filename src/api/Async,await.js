import  Axios from 'axios'
import {useEffect, useState} from 'react'
import React from 'react';
import "./Async,await.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination1 from './Pagination';

// MATERIAL-UI table {START}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

// MATERIAL-UI TABLE {END}

 function AsyncAxios () {

    const [Product, setProduct] = useState([])
    const [search, setSearch] = useState(" ");

    const getProductData = async ()=>{
        try{
            const data= await Axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(data.data);
            setProduct(data.data);
        } catch (e){
            console.log(e)
        }
    };

    useEffect(() => {
    getProductData();
        }, [])
        
    return(
    <div className='axios'>
        <input type='text'
        placeholder='Search here'
        onChange={(e)=>{
            setSearch(e.target.value);
        }}
        />

{/*  material UI table {START}       */}

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>

          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="left">Product price</StyledTableCell>
          </TableRow>

        </TableHead>
        <TableBody>
         
          {/* Here we using the Search box -- start*/}
           {Product.
         filter(item =>{
            if (search ==" "){
                return item
            }
            else if (item.title.toLowerCase().includes(search.toLowerCase())){
                return item
            }
            
         }).map((item)=>{
            return (

                // <p> {item.id} - {item.title}</p>
                <StyledTableRow >
                <StyledTableCell component="th" scope="row">
          {item.id}
                </StyledTableCell>
                <StyledTableCell align="left">{item.title}</StyledTableCell>
              </StyledTableRow>
            )
         })}
          {/* search box end  */}
        
        </TableBody>
      </Table>
    </TableContainer>

    <Pagination1/>
    </div>
    );
    }
    
 export default AsyncAxios ;