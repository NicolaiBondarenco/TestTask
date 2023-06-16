import './Main.scss'
import { Button } from '../../ui/Button/Button'

export const Main = () => {
  return (
    <div className="main">
      <div className="main__box box">
        <h1 className="box__title">Test assignment for front-end developer</h1>
        <p className="box__desc">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button title="Sign up" width="100" ml="0" />
      </div>
    </div>
  )
}
