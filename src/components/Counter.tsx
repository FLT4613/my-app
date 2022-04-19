import React from "react"

type Props = {
    id: string,
    value: number
}

const Counter: React.FC<Props> = ({ id, value }) => (
    <div className="w-6 h-6 text-center rounded-full bg-red-500 text-white" data-testid={`${id}-count`}>{value}</div>
)

export default Counter