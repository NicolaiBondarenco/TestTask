import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { GetList } from './Components/GetList/GetList'
import { WokrPost } from './Components/WokrPost/WokrPost'

import './App.css'

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
        <GetList />
        <WokrPost />
      </div>
    </div>
  )
}
