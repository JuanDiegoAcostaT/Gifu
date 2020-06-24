import React from 'react'
import useSingleGif from '../hooks/useSingleGif'
import LoadingSpinner from '../components/Spinner/LoadingSpinner'
import OnlyGif from '../components/OnlyGif/OnlyGif'

export default function Detail ({ id}) {
  const {gif, isLoading, isError} = useSingleGif({id})
  const title = gif ? gif.title : '';
  const rating = gif ? gif.rating : ''
  const import_datetime = gif ? gif.import_datetime : ''
  const bitly_gif_url = gif ? gif.bitly_gif_url : ''
  const slug = gif ? gif.slug : ''
  const mp4 = gif ? gif.mp4 : ''
  
    if(isLoading) return <LoadingSpinner />
  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return <>
      <OnlyGif 
        title={title}
        id={id}
        rating={rating}
        bitly_gif_url={bitly_gif_url}
        import_datetime={import_datetime}
        slug={slug}
        mp4={mp4}
      />
    </>
}