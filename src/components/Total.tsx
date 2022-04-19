import React from "react"


type Props = {
    numberOfItems: number;
    price: number;
}

const Total: React.FC<Props> = (props) => {
    return <div className="rounded-lg shadow-xl px-3 py-5">
        <div>お会計</div>
        <hr className="my-2 border-gray-400" />
        <div className="w-40">商品数：<span data-testid="count">{props.numberOfItems}</span> 個</div>
        <div className="w-40">合計金額：<span data-testid="price">{props.price}</span> 円</div>
    </div >

}

export default Total