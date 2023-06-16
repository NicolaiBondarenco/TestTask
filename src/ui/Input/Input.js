import './Input.scss'

export const Input = ({
  placeholder,
  handleChange,
  type,
  value,
  handleBlur,
  inputClass,
  validValue,
}) => {
  const handleChangeInput = (value) => {
    handleChange(value)
  }

  const colorBorder = !validValue ? '1px solid #d0cfcf' : '2px solid #CB3D40'

  return (
    <input
      className={`${inputClass}`}
      type={type}
      onChange={(e) => handleChangeInput(e.target.value)}
      onBlur={handleBlur}
      value={value}
      placeholder={placeholder}
      style={{ border: `${colorBorder}` }}
    />
  )
}
