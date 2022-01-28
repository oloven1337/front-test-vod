import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import qrCode from './qr-code.jpg'

import { CardStyled } from './style'

interface Props {
    title: string,
    text: string,
    textButton: string
}

export const Card: React.FC<Props> = ({ title, text, textButton }) => {
    return (
        <CardStyled>
            <div>{title}</div>
            <img src={qrCode} alt="" />
            <p>{text}</p>
            <Link to="/promo">{textButton}</Link>
        </CardStyled>
    )
}
