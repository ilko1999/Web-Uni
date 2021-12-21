import React, { useState } from 'react'

function Item({item}) {
    const [count, setCount] = useState(item.count)
    return (
        <div className="cards">
            <h3>{item.name}, брой:{count}</h3>
            <div>

            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count * count)}>X</button>
            </div>
        </div>
    )
}

export default Item
