// @ts-check

import DogImage from './DogImage.jsx'

export const Description = ({ handleClick, url }) => {
  return (
    <>
      <button onClick={handleClick}>更新</button>
      <p>犬の画像を表示するアプリです</p>
      <DogImage imageUrl={url} />
    </>
  )
}

export default Description
