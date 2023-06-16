import './InputRadio.scss'

export const InputRadio = ({ value, id, name, checked, handleChange }) => {
  return (
    <input
      className="inputRadio"
      value={value}
      name={name}
      id={id}
      checked={checked}
      type="radio"
      onChange={() => handleChange(id)}
    />
  )
}
