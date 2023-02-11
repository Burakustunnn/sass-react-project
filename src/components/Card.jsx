import CardStyle from "../scss/Card.module.scss";

const Card = (props) => {
    const {title,image,desc,id}=props
  return (
    <div key={id} className={CardStyle.cards}>

      <div className={CardStyle.title}>
        <h1>{title}</h1>
      </div>

      <img src={image} alt="" className={CardStyle.CardImg} />
      <div className={CardStyle.cardOver}>
        <p>{desc}</p>
      </div>
      
      
    </div>
  )
}

export default Card
