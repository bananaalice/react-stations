// @ts-check
import { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const initialBreeds = /** @type {string[]} */ ([])
  const [breeds, setBreeds] = useState(initialBreeds)
  const url = 'https://dog.ceo/api/breeds/list/all'

  useEffect(() => {
    async function getbreedsList() {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)
      const breedArray = Object.keys(json.message)
      console.log(breedArray)
      setBreeds(breedArray)
    }
    getbreedsList()
  }, [])

  return (
    <>
      <select name="breeds" id="breedsList">
        {breeds.map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </>
  )
}

export default DogListContainer
