import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // recuperar imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split(' ', 3).join(' ')
    fetch(
        `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWord}?size=50&color=red`
    ).then(response => response.url) // Obtener la URL directamente de la respuesta
      .then(url => {
        setImageUrl(url)
      })
      .catch(error => {
        console.error('Error fetching cat image:', error)
      })
  }, [fact])

  return { imageUrl }
}
