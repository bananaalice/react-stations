// @ts-check
import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect.jsx'

export const DogListContainer = () => {
  const initialBreeds = /** @type {string[]} */ ([])
  const [breeds, setBreeds] = useState(initialBreeds) //犬種リスト
  const [selectedBreed, setSelectedBreed] = useState('') //選択した犬種
  const [images, setImages] = useState([])
  const DogListUrl = 'https://dog.ceo/api/breeds/list/all'

  useEffect(() => {
    async function getbreedsList() {
      try {
        const response = await fetch(DogListUrl)
        const json = await response.json()
        const breedArray = Object.keys(json.message)
        setBreeds(breedArray)
      } catch (e) {
        console.error('犬種リスト取得失敗', e)
        setBreeds([])
      }
    }
    getbreedsList()
  }, [])

  async function getSelectedImg(breed) {
    const breedToUse = breed || breeds[0]
    if (!breedToUse) {
      console.warn('犬種を選択してください')
      return
    }
    const url = `https://dog.ceo/api/breed/${breedToUse}/images/random/12`
    try {
      const response = await fetch(url)
      const json = await response.json()
      console.log('json:', json)
      setImages(json.message)
      console.log('json.message:' + json.message)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    console.log('images state updated:', images)
  }, [images])

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        setSelectedBreed={setSelectedBreed}
        selectedBreed={selectedBreed}
      />
      <button
        onClick={() => {
          console.log('selectedBreed:' + selectedBreed)
          getSelectedImg(selectedBreed)
        }}
      >
        表示
      </button>
      {images.map(url => (
        <img key={url} src={url} alt="dog" />
      ))}
    </>
  )
}

export default DogListContainer
