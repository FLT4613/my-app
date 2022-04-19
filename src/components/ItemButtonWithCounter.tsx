
import React, { useCallback } from "react"
import ItemButton from "./ItemButton"
import Counter from "./Counter"


type Props = {
    id: string;
    name: string;
    price: number;
    count: number;
    setCount?: (x: number) => void;
}

const ItemButtonWithCounter: React.FC<Props> = (props) => {
    const onClick = useCallback(() => props.setCount && props.setCount(props.count + 1), [props])
    return <div className="flex">
        <ItemButton {...props} onClick={onClick} />
        <div className="relative right-3 -top-2">
            <Counter value={props.count} {...props} />
        </div>
    </div>

}

export default ItemButtonWithCounter