import "./index.css"

const Card = ({lacin,onDelete}) => {
 
  
    return (
    
         <div className="cardborder">
    <div className="imgcard" key={lacin.id}>
        <img src={lacin.image} alt="image" />  
    </div>
    <h1>{lacin.title}</h1>
    <p><b>{lacin.price}$</b></p>
    <button type="button" className='Delete' onClick={()=>onDelete(lacin.id)} >Delete</button>
    </div>
    
    
   
  )
}

export default Card