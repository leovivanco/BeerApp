const URL = 'https://api.punkapi.com/v2/beers'

export const getBeers = async () => {
  const beerPromise = await fetch(URL)
  return await beerPromise.json()
}

export const getBeersById = async (id) => {
  const beerPromise = await fetch(`${URL}/${id}`)
  return await beerPromise.json()
}
