
import React, { useCallback } from "react"
import PurchaseButton from "./PurchaseButton"

type Props = {
    id: string;
    name: string;
    price: number;
    count: number;
    setCount?: (x: number) => void;
}

const Counter: React.FC<Props> = (props) => {
    const onClick = useCallback(() => props.setCount && props.setCount(props.count + 1), [props])
    return <PurchaseButton {...props} onClick={onClick} />
}

export default Counter