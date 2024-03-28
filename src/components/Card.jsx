import React,{useState} from "react";
// import "./Card.css"; // Import CSS file
function Card(props) {
    const [readmore,Setreadmore] = useState(false);
    const description = readmore ? props.info : `${props.info.substring(0,200)}...`;
    function readmoreHandler(){
        Setreadmore(!readmore);
    }
    return (
        
            <div className="card">
                <img className="image" src={props.image} alt={props.name} />
                <div className="tour-info">
                    <div className="details">
                        <div className="price">₹{props.price}</div>
                        <div className="name">{props.name}</div>
                    </div>
                    
                    <div className="description">{description}
                        <span onClick={readmoreHandler} className="readmore">{readmore ? "showless": "readmore"}</span>
                    </div>
                </div>

                <button className="btn" onClick={()=> props.removeTours(props.id)}>Not Interested</button>
            </div>
        
    );
}

export default Card;
