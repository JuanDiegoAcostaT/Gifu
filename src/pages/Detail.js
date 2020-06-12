import React from 'react'
import OnlyGif from '../components/OnlyGif/OnlyGif'

export default function Detail(props) {

    const{id} =props

    return (
        <div>
            <OnlyGif id={id} />
        </div>
    )
}
