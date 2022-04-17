
import React from "react"

type Props = {
    id: string,
    name: string,
    price: number,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ id, name, price, onClick }) => (<button data-testid={id} onClick={onClick}> {name} {price}円</button >)

export default Button