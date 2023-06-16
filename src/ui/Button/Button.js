import './Button.scss'

export const Button = ({ title, width, ml, handleClick, disabled }) => {
  const colorBtn = disabled ? '#B4B4B4' : '#F4E041'
  return (
    <button
      className="button"
      disabled={disabled}
      onClick={handleClick}
      style={{
        background: `${colorBtn}`,
        borderRadius: '80px',
        width: `${width}px`,
        padding: '4px',
        border: 'none',
        marginLeft: `${ml}px`,
        cursor: 'pointer',
      }}
    >
      {title}
    </button>
  )
}
