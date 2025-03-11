import React from 'react'

const ProfileCard = (props) => {
  return (
    <>
    <h2>name:{props.name}</h2>
    <p>age:{props.age}</p>
    <p>greeting:{props.greeting}</p>
    <div></div>
    </>
  )
}

export default ProfileCard