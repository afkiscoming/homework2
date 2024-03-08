import React from 'react'
import { Link } from 'react-router-dom'

const SchoolLogo = ({ schoolName }) => {
  const imagePath = `/assets/${schoolName}-logo.webp`;

  return (
    <Link to="/">
      <img src={imagePath} alt="" className="school-logo" />
    </Link>
  )
}

export default SchoolLogo