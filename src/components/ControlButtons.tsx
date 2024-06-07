

export function ControlButtons({ onStart, onStop, onReset, startTime }) {
  return (
    <div>
      <button onClick={onStart}>Start Process</button>
      <button onClick={onStop}>Finish Process</button>
      <button onClick={onReset}>Reset</button>
      {startTime && <div>Hora de comienzo: {startTime.toLocaleTimeString()}</div>}
    </div>
  );
}


