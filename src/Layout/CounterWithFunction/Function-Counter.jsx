import { useState } from "react"

const CounterFn = () => {
    const [count, setCount] = useState(0)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count > 0 ? count - 1 : count)
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center fw-bolder">Counter Using Function Component</h1>
                <div className="row">
                    <div className="col-lg-6 mx-auto my-5 p-5 shadow text-center">
                        <h3>{count}</h3>
                        <div className="btn-group">
                            <button onClick={inc} className="btn btn-danger">+</button>
                            <button onClick={dec} className="btn btn-success">-</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterFn