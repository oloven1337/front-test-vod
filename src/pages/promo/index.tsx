import React from 'react'

import { Wrapper, Card, TextNumber, WrapperItems, ButtonClearStyled, WrapperApprov } from './style'

export const Promo = () => {
    const [currentNumber, setCurrentNumber] = React.useState<null | number>(null)

    const handleClick = (event: React.MouseEvent) => {
        // @ts-ignore
        const number = event.target.innerHTML

        if (!isNaN(number)) {
            setCurrentNumber(number)
        }
    }

    return (
        <Wrapper>
            <Card>
                <h5>
                    Введите ваш номер
                    мобильного телефона
                </h5>
                <TextNumber>
                    +7(___)___-__-__
                </TextNumber>
                <p>
                    и с Вами свяжется наш менеждер для дальнейшей консультации
                </p>
                <WrapperItems onClick={handleClick}>
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                    </div>
                    <div>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                    </div>
                    <div>
                        <ButtonClearStyled>Стереть</ButtonClearStyled>
                        <button>0</button>
                    </div>
                </WrapperItems>
                <WrapperApprov>
                    <input type="checkbox" />
                    <span>
                        Согласие на обработку персональных данных
                    </span>
                </WrapperApprov>
                <button type="submit" style={{
                    width: 246,
                    padding: "16px 19px",
                    border: "1px solid #4E4E4E",
                    background: "transparent",
                    color: "#4E4E4E",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    marginTop: 13,
                    cursor: "pointer"
                }}>Подтвердить номер</button>
            </Card>
        </Wrapper>
    )
}
