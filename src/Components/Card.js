import React from 'react'

const Card = ({name, email, id}) => {
  return (
    <div className="cardCont">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>

  )
}

export default Card