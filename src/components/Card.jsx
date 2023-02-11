import "../scss/Card.module.scss"

const Card = (props) => {
    const {title,image,desc,id}=props
  return (
    <div className="cards">
      <div>
        <h1>{title}</h1>
      </div>
      <img src={image} alt="" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
      
      
    </div>
  )
}

export default Card
