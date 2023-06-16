import './Loading.scss'

export const Loading = () => {
  return (
    <div className="wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
