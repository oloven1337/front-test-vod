import React from 'react'
import { motion } from 'framer-motion'

import { Wrapper } from './style'

// @ts-ignore
import backgroundVideo from '../../assets/video.mp4'
import { Card } from '../../components/card'

export const Banner = () => {
    return (
        <Wrapper>
            <video autoPlay loop muted>
                <source src={backgroundVideo} />
            </video>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    delay: 5,
                    duration: 0.7
                }}
            >
                <Card
                    title="ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
                ПОДАРИТЕ ЕМУ СОБАКУ!"
                    text="Сканируйте QR-код
                или нажмите ОК"
                    textButton="OK"
                />
            </motion.div>
        </Wrapper>
    )
}
