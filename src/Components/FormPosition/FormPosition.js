import { Loading } from '../Loading/Loading'
import { Error } from '../Error/Error'
import { InputRadio } from '../../ui/InputRadio/InputRadio'

export const FormPosition = ({ positions, loading, error, onChange }) => {
  if (error) {
    return <Error />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <h3 className="form__position-title">Select your position</h3>
      {positions.map((el) => (
        <div className="form__position-inner" key={el.id}>
          <InputRadio
            value={el.name}
            id={el.id}
            name="formPosition"
            handleChange={onChange}
          />
          <label htmlFor={el.id}>{el.name}</label>
        </div>
      ))}
    </>
  )
}
