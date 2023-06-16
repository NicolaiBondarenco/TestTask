import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input } from '../../ui/Input/Input'
import { UploadPhoto } from '../UploadPhoto/UploadPhoto'
import { Error } from '../Error/Error'
import { Loading } from '../Loading/Loading'
import { FormPosition } from '../FormPosition/FormPosition'
import { Button } from '../../ui/Button/Button'
import { getUsers, postData, getPositions } from '../../Server'
import { updateUsers } from '../../Store/UsersSlice'
import {
  setName,
  setEmail,
  setPhone,
  setPositionId,
} from '../../Store/NewUserSlice'

import './Form.scss'

const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/
const nameRegex = /^.{2,60}$/

export const Form = () => {
  const [positions, setPositions] = useState([])
  const [file, setFile] = useState()
  const [validName, setValidName] = useState(true)
  const [validEmail, setValidEmail] = useState(true)
  const [validPhone, setValidPhone] = useState(true)
  const [errorPosition, setErrorPosition] = useState(false)
  const [errorForm, setErrorForm] = useState(false)
  const [loadingPosition, setLoadingPosition] = useState(false)
  const [loadingSendForm, setLoadingSendForm] = useState(false)
  const dispatch = useDispatch()

  const { name, email, phone, position_id } = useSelector(
    (state) => state.newUser,
  )

  useEffect(() => {
    setLoadingPosition(true)
    getPositions()
      .then((res) => {
        setPositions(res.positions)
        setLoadingPosition(false)
      })
      .catch((err) => setErrorPosition(true))
  }, [])

  const sendDataNewUser = async (e) => {
    e.preventDefault()
    setLoadingSendForm(true)
    const isFormValid =
      !!validName && !!validEmail && !!validPhone && !!position_id && !!file
    if (!isFormValid) {
      setLoadingSendForm(false)
      return alert('All fields are required!')
    }
    try {
      const response = await postData(name, email, phone, position_id, file)
      if (!response.success) {
        alert(response.message)
        setLoadingSendForm(false)
      }
      const usersResponse = await getUsers(1)
      dispatch(updateUsers(usersResponse.users))
      dispatch(setName(''))
      dispatch(setEmail(''))
      dispatch(setPhone(''))
      setLoadingSendForm(false)
    } catch (error) {
      setLoadingSendForm(false)
      setErrorForm(true)
    }
  }

  const handleBlur = (regexp, action, value) => {
    const isValid = regexp
    if (!isValid.test(value)) return action(false)
    return action(true)
  }

  const handleChange = (value, action) => {
    dispatch(action(value))
  }

  if (errorForm) return <Error />

  return loadingSendForm ? (
    <Loading />
  ) : (
    <form className="form" onSubmit={sendDataNewUser}>
      <div className="form__data">
        <Input
          placeholder="Your name"
          type="text"
          handleChange={(value) => handleChange(value, setName)}
          handleBlur={() => handleBlur(nameRegex, setValidName, name)}
          value={name}
          inputClass="input input-mb"
          validValue={!validName}
        />
        {!validName && <span className="form__data-name">Invalid name</span>}
        <Input
          placeholder="Email"
          type="email"
          handleChange={(value) => handleChange(value, setEmail)}
          handleBlur={() => handleBlur(emailRegex, setValidEmail, email)}
          value={email}
          inputClass="input input-mb"
          validValue={!validEmail}
        />
        {!validEmail && <span className="form__data-email">Invalid email</span>}
        <Input
          placeholder="Phone"
          type="text"
          handleChange={(value) => handleChange(value, setPhone)}
          handleBlur={() => handleBlur(phoneRegex, setValidPhone, phone)}
          value={phone}
          inputClass="input"
          validValue={!validPhone}
        />
        {!validPhone && <span className="form__data-phone">Invalid phone</span>}
        <span className="form__data-subtitle">+38 (XXX) XXX - XX - XX</span>
      </div>
      <div className="form__position">
        <FormPosition
          positions={positions}
          loading={loadingPosition}
          error={errorPosition}
          onChange={(value) => handleChange(value, setPositionId)}
        />
      </div>
      <UploadPhoto setPhoto={(file) => setFile(file)} />
      <Button title="Sign up" width="100" ml="0" />
    </form>
  )
}
