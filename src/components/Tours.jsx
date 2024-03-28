import Card from "./Card"
// import './Tours.css'
function Tours(props) {
    return (
      <div className="tour-container">
          <div > 
            <h2 className="title">PLAN WITH LOVE</h2>
          </div>
        <div className="cards-container">
          {props.tours.map((tour) => (
            <Card
              key={tour.id}
              id={tour.id}
              name={tour.name}
              info={tour.info}
              price={tour.price}
              image={tour.image}
              removeTours={props.removeTours}
            />
          ))}
        </div>
      </div>
    );
}
export default Tours;