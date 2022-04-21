import React, { useState } from 'react';
import './style.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandle = (e) => {
    setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  };
  const { total, next, operation } = state;
  return (
    <main>
      <section>
        <div className="row">
          <div className="grid-item item2">
            {total}
            {operation}
            {next}

          </div>

          <button type="button" className="grid-item" onClick={clickHandle} name="AC">AC </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="+/-"> +/- </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="%"> % </button>
          <button type="button" className="grid-item orange" onClick={clickHandle} name="÷"> ÷ </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="7"> 7 </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="8"> 8 </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="9"> 9 </button>
          <button type="button" className="grid-item orange" onClick={clickHandle} name="x"> x </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="4"> 4 </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="5"> 5 </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="6"> 6 </button>
          <button type="button" className="grid-item orange" onClick={clickHandle} name="-"> - </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="1"> 1 </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="2"> 2 </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="3"> 3 </button>
          <button type="button" className="grid-item orange" onClick={clickHandle} name="+"> + </button>
          <button type="button" className="grid-item item1" onClick={clickHandle} name="0"> 0 </button>
          <button type="button" className="grid-item" onClick={clickHandle} name="."> . </button>
          <button type="button" className="grid-item orange" onClick={clickHandle} name="="> = </button>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
