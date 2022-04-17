
import React, { useCallback, useState } from "react"
import PurchaseButton from "./PurchaseButton"

type Props = {
    id: string;
    name: string;
    price: number;
}

const Counter: React.FC<Props> = (props) => {
    const [count, setCount] = useState(0)
    const onClick = useCallback(() => setCount(count + 1), [count])

    return <>
        <PurchaseButton {...props} onClick={onClick} />
        <div data-testid={`${props.id}-count`}>{count}</div>
    </>
}

export default Counter