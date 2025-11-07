// DO NOT DELETE

import './App.css'
import Header from './Header.jsx'
import Description from './Description.jsx'
import DogListContainer from './DogListContainer.jsx'
import { useState } from 'react' // useStateを使うのに必要
/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  const url = 'https://dog.ceo/api/breeds/image/random'
  async function getImage() {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('レスポンスステータス: ${...}')
      } else {
        const json = await response.json()
        return json
      }
    } catch (e) {
      console.error(e)
    }
  }

  const [dogURL, setdogUrl] = useState('') //state変数:レンダー間でデータ保持 stateセッタ関数:変数を更新し再度レンダー

  async function handleClick() {
    const image = await getImage()
    console.log(image)
    setdogUrl(image.message)
  }

  console.log(Header)
  return (
    <div>
      <Header />
      <Description handleClick={handleClick} url={dogURL} />
      <DogListContainer />
    </div>
  )
}
