import React, { useState } from 'react'
import { Tooltip } from '../Tooltip/Tooltip'
import './GetItem.scss'

const truncateTitle = (str) => {
  if (str.length >= 15) return str.substr(0, 15) + '...'
  return str
}

const modNumber = (str) => {
  const digitsToEnclose = str.substring(3, 6)
  return str.replace(digitsToEnclose, `(${digitsToEnclose})`)
}

export const GetItem = ({
  email,
  image,
  name,
  phone,
  position,
  id,
  allUsers,
}) => {
  const [visibleTooltip, setVisibleTooltip] = useState(false)

  const showTooltip = () => {
    return allUsers.find((el) => {
      if (el.id === id) return setVisibleTooltip(true)
    })
  }

  const closeTooltip = () => {
    return allUsers.find((el) => {
      if (el.id === id) return setVisibleTooltip(false)
    })
  }

  return (
    <div className="getItem">
      <img className="getItem__image" src={image} alt="PhotoUser" />
      <p className="getItem__name">{truncateTitle(name)}</p>
      <p className="getItem__position">{position}</p>
      <p
        className="getItem__email"
        onMouseEnter={showTooltip}
        onMouseLeave={closeTooltip}
      >
        {truncateTitle(email)}
      </p>
      {visibleTooltip && <Tooltip email={email} />}
      <p className="getItem__phone"> {modNumber(phone)} </p>
    </div>
  )
}
