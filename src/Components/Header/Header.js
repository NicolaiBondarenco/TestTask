import React from 'react'
import { Button } from '../../ui/Button/Button'

import './Header.scss'

import logo from '../../assets/Logo.svg'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <a href="#">
          <img className="header__image" src={logo} alt="Logo" />
        </a>
        <div className="header__box">
          <Button title="Users" width="100" ml="0" />
          <Button title="Sign up" width="100" ml="10" />
        </div>
      </div>
    </div>
  )
}
