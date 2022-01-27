import React from 'react'

import {Wrapper} from './style'

// @ts-ignore
import backgroundVideo from '../../assets/video.mp4'

export const Banner = () => {
    return (
        <Wrapper>
            <video autoPlay loop muted>
                <source src={backgroundVideo}/>
            </video>
        </Wrapper>
    )
}
