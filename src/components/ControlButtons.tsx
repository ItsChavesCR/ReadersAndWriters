import './ControlButton.css'

export function ControlButtons({ onStart, onStop, onReset, startTime }) {
  return (

    <div className="ControlButtons">
      <button className="Start" onClick={onStart}>Start Process</button>
      <button className="Finish" onClick={onStop}>Finish Process</button>
      <button className="Reset" onClick={onReset}>Reset</button>  
    </div>
    
  );
}


