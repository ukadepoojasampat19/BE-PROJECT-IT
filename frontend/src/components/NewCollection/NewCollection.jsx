import React from 'react'
import "./NewCollection.css"
import newCollection from "../../assets/Assets/Frontend_Assets/new_collections"
import Item from '../Items/Item'
const NewCollection = () => {
  return (
    <div className='newcollections'>
      <h1>Upcoming Events</h1>
      <hr />
      <div className="collections">
        {newCollection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollection
