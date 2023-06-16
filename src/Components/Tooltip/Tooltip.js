import './Tooltip.scss'

export const Tooltip = ({ email }) => {
  return (
    <div className="tooltip">
      <p> {email} </p>
    </div>
  )
}
