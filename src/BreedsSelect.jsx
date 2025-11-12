// @ts-check

export const BreedsSelect = ({
  selectedBreed,
  setSelectedBreed,
  breeds = [],
}) => {
  return (
    <>
      <select
        name="breeds"
        id="breedsList"
        value={selectedBreed}
        onChange={e => setSelectedBreed(e.target.value)}
      >
        <option value="" disabled>
          犬種を選択
        </option>
        {breeds.map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect
