import React from 'react'

function InfoCard(item) {
    return (
        <div style={{"borderRadius": "20px", "backgroundColor": "rebeccapurple"}}>
            <p style={{"color": "white"}}>{item.item.name}</p>
            <p style={{"color": "white"}}>Movies:</p>
            <ul>
                {item.item.films.map((film) => (
                    <div> <a style={{"color": "white"}} href={film}>{film}</a></div>
                ))}
            </ul>
        </div>
    )
}

export default InfoCard
