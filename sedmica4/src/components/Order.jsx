import React, { useState } from 'react'
import Item from './Item'

function Order({orders}) {

    return (
        <div>
            {orders.map((item, i) => (
        <Item key={i} item={item}/>
      ))}
        </div>
    )
}

export default Order
