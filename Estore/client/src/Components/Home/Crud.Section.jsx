import React ,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getAllData } from '../../Redux/EstoreSlice';
import '../../Scss/Crud.scss'

const ClothesList = () => {
const disptach = useDispatch()
const {clothes ,error,loading} =useSelector((state)=>state.estore) 

useEffect(()=>{
    disptach(getAllData());
},[disptach]);

let content ;
if(loading){
   content=  <div>Loading...</div>
}else if(error){
    content = <div>{error}</div>
}else{
    content = (
        <ul>
        {clothes.map((cloth)=>(
            <div className="card" key={cloth._id}>
                <div className="imgcard">
                    <img src={cloth.img} alt={cloth.name} />
                </div>
                <button className='btn btn-outline-success'>Detail</button>
                <button className='btn btn-outline-warning'>Basket</button>
                <button className='btn btn-outline-primary'>Wishlist</button>
                   <div className="imgname">{cloth.name}</div>
                   <div className="imgprice">{cloth.price}</div>
                   <div className="imgoldprice">{cloth.oldprice}</div>

            </div>
        )

        )}

        
    </ul>
    )
   
}



  return (
    <div><h2>Clothes List</h2>
     {content}
    </div>
    
  )
}


export default ClothesList