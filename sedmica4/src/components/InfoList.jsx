import React from 'react'
import InfoCard from './InfoCard'

export default function InfoList(props) {
    return (
        <div>
            <ul>
      {props.data.map((item, i) => (
        <InfoCard key={i} item={item}/>
      ))}
    </ul>
        </div>
    )
}
