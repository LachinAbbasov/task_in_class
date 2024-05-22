import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData, getDeleteData } from '../Redux/EstoreSlice';
import '../Scss/Add.scss'





export const Add = () => {

    const disptach = useDispatch()
    const { clothes, error, loading } = useSelector((state) => state.estore)

    useEffect(() => {
        disptach(getAllData(),getDeleteData());
    }, [disptach]);


    let content;
    if (loading) {
        content = <div>Loading...</div>
    } else if (error) {
        content = <div>{error}</div>
    } 

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tablename' align="left">Name</TableCell>
                        <TableCell align="right">Clothes Image</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">OldPrice</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clothes.map((cloth) => (
                        <TableRow
                            key={cloth.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {cloth.name}
                            </TableCell>
                           
                            <TableCell align="right"><img className='tableimg' src={cloth.img} alt="" /></TableCell>
                            <TableCell align="right">${cloth.price}.00</TableCell>
                            <TableCell className='oldprices' align="right">${cloth.oldprice}.00</TableCell>
                            <TableCell align="right"><button onClick={} className='btn btn-danger'>Delete</button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
