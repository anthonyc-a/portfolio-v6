import React from "react"

const SocialIcon = ({img, link}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="social-icon">
      <img src={img} alt="Social Icon" />
    </a>
  )
}

export default SocialIcon
