import { Component } from "react";

class CounterClass extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }
    inc = () =>{
        this.setState({
            counter: this.state.counter+1
        })
    }
    dec = () =>{
        this.setState({
            counter: this.state.counter> 0 ? this.state.counter-1:0
        })
    }

    render(){
        return(
            <>
                <div className="container">
                    <h1 className="text-center fw-bolder">Counter Using Class Component</h1>
                    <div className="row">
                        <div className="col-lg-6 mx-auto my-5 p-5 shadow text-center">
                            <h3>{this.state.counter}</h3>
                            <div className="btn-group">
                                <button onClick={this.inc} className="btn btn-danger">+</button>
                                <button onClick={this.dec} className="btn btn-success">-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default CounterClass