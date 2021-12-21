import React, { useState } from 'react'
import Order from './components/Order'

function Sedmica5() {

    const orderItems =  [{id:1, name:'Шапка', count:1}, {id:2, name:'Яке', count:2}, {id:3, name:'Блуза', count:3}]

    const [items, setItems] = useState(orderItems)

    return (
        <div>
            <h1>БУтончета</h1>
            <Order orders={items}/>
        </div>
    )
}

export default Sedmica5
