
function Counter({ readCount , writeCount }) {
  return (
    <div>
      <div className="Time">Readings: {readCount}</div>
      <div className="Time">Scriptures: {writeCount}</div>
    </div>
  );
} 

export default Counter;
