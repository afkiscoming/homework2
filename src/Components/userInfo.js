import React from 'react'

const userInfo = ({user}) => {

  return (
    <div className="user-info">
        <p> {user.name} {user.surname}</p>
        <p> {user.school}/ {user.position}</p>
    </div>
  )
}

export default userInfo