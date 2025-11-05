// DO NOT DELETE

import { useState } from 'react' // useStateを使うのに必要
import './App.css'

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

  return (
    <div>
      <header className="header">
        <h1>Dogアプリ</h1>
      </header>
      <button onClick={handleClick}>更新</button>
      <p>犬の画像を表示するアプリです</p>
      <img src={dogURL} alt="dog" />
    </div>
  )
}
