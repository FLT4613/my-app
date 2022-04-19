
import React from "react"

type Props = {
    id: string,
    name: string,
    price: number,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ id, name, price, onClick }) => (<button className="w-32 px-2 py-1 flex justify-between border-2 border-black shadow-md rounded-md" data-testid={id} onClick={onClick}><span>{name}</span><span>{price}円</span></button >)

export default Button