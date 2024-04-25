
import Card from "../Card"

const Cards = ({myCards,onDelete}) => {
 
    return(
         myCards.map((card,idx)=>(
            <Card key={idx} lacin={card} onDelete={onDelete} />
        ))
    
   
   )

  
}




export default Cards
