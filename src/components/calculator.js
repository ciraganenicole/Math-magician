import React, { Component } from 'react';
import './style.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <section>
          <div className="row">
            <div className="grid-item item2"><input type="number" defaultValue={0} /></div>
            <div className="grid-item"> AC </div>
            <div className="grid-item"> +/- </div>
            <div className="grid-item"> % </div>
            <div className="grid-item orange"> ÷ </div>
            <div className="grid-item"> 7 </div>
            <div className="grid-item"> 8 </div>
            <div className="grid-item"> 9 </div>
            <div className="grid-item orange"> x </div>
            <div className="grid-item"> 4 </div>
            <div className="grid-item"> 5 </div>
            <div className="grid-item"> 6 </div>
            <div className="grid-item orange"> - </div>
            <div className="grid-item"> 1 </div>
            <div className="grid-item"> 2 </div>
            <div className="grid-item"> 3 </div>
            <div className="grid-item orange"> + </div>
            <div className="grid-item item1"> 0 </div>
            <div className="grid-item"> . </div>
            <div className="grid-item orange"> = </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Calculator;
