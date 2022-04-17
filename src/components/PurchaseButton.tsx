
import React from "react"

type Props = {
    id: string,
    name: string,
    price: number
}

const Button: React.FC<Props> = ({ id, name, price }) => (<button data-testid={id}> {name} {price}円</button >)

export default Button