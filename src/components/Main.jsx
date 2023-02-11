import MainStyle from "../scss/Main.module.scss"

import { data } from "../helper/data"
// data.js dosyasının içinde export data olduğu için burda böyle dest. ediyoruz

import Card from "./Card"

const Main = () => {
  return (
    <div className={MainStyle.card-container}>
        {data.map((e)=><Card {...e}/>)}      
    </div>
  )
}

export default Main
