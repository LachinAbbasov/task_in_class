import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
import { deleteOne, getAll } from "./API";
import "./App.css"

const CustomTable = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    
    getAll(products)
      .then(data => {
        setProducts(data.data); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
 
  const handleFavoriteClick = (productId) => {

  };

  const handleDeleteClick = (productId) => {
  
    deleteOne(productId)
      .then(() => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== productId)); 
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  const handleUpdateClick = (productId) => {
    
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>companyName</th>
          <th>contactName</th>
          <th>Favorite</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
  {products.length > 0 ? (
    products.map(product => (
      <tr key={product.id}>
        <td>{product.companyName}</td>
        <td>{product.contactName}</td>
        <td><Button variant="primary" onClick={() => handleFavoriteClick(product.id)}>Favorite</Button></td>
        <td><Button variant="danger" onClick={() => handleDeleteClick(product.id)}>Delete</Button></td>
        <td><Button variant="warning" onClick={() => handleUpdateClick(product.id)}>Update</Button></td>
      </tr>
   
    ))
   
  ) : (
    <tr>
      <td colSpan="5">No products found</td>
    </tr>
  )}
</tbody>
    </Table>
  );
};

export default CustomTable;