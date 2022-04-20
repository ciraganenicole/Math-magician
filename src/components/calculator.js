import React, { Component } from 'react';
import './style.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(e) {
    this.setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <main>
        <section>
          <div className="row">
            <div className="grid-item item2">
              {total}
              {operation}
              {next}

            </div>

            <button type="button" className="grid-item" onClick={this.clickHandle} name="AC">AC </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="+/-"> +/- </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="%"> % </button>
            <button type="button" className="grid-item orange" onClick={this.clickHandle} name="÷"> ÷ </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="7"> 7 </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="8"> 8 </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="9"> 9 </button>
            <button type="button" className="grid-item orange" onClick={this.clickHandle} name="x"> x </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="4"> 4 </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="5"> 5 </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="6"> 6 </button>
            <button type="button" className="grid-item orange" onClick={this.clickHandle} name="-"> - </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="1"> 1 </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="2"> 2 </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="3"> 3 </button>
            <button type="button" className="grid-item orange" onClick={this.clickHandle} name="+"> + </button>
            <button type="button" className="grid-item item1" onClick={this.clickHandle} name="0"> 0 </button>
            <button type="button" className="grid-item" onClick={this.clickHandle} name="."> . </button>
            <button type="button" className="grid-item orange" onClick={this.clickHandle} name="="> = </button>
          </div>
        </section>
      </main>
    );
  }
}

export default Calculator;
