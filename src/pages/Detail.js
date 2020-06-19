import React from 'react'
import OnlyGif from '../components/OnlyGif/OnlyGif'
import { Link } from '@reach/router'

export default function Detail(props) {

    const{id} =props

    return (
        <div>
            <Link to='/'> Back</Link>
            <OnlyGif id={id} />
        </div>
    )
}
