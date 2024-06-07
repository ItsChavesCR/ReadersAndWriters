// src/App.js
import  { useState, useEffect} from 'react';
import ConflictCounter from './components/ConflictCounter';
import Counter from './components/Counter';
import { ControlButtons } from './components/ControlButtons';
import './styles/ReadersAndWriters.css'

export function ReadersAndWriters() {
  
  const [readCount, setReadCount] = useState(0);
  const [writeCount, setWriteCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [conflictCount, setConflictCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const readOrWrite = Math.random() > 0.5;
        if (readOrWrite) {
          setReadCount(prev => prev + 1);
        } else {
          setWriteCount(prev => prev + 1);
        }
        if (Math.random() > 0.8) { 
          setConflictCount(prev => prev + 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setStartTime(new Date());
    setIsRunning(true);
  };

  const handleStop = () => {
    setEndTime(new Date());
    setIsRunning(false);
  };

  const handleReset = () => {
    setReadCount(0);
    setWriteCount(0);
    setStartTime(null);
    setEndTime(null);
    setConflictCount(0);
    setIsRunning(false);
  };

  const getExecutionTime = () => {
    if (!startTime || !endTime) return 'N/A';
    const diff = endTime - startTime;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
  
    if (minutes > 0) {
      return `${minutes} minutes and ${remainingSeconds} seconds`;
    } else {
      return `${seconds} seconds`;
    }
  };
  

  return (
    <div className="App">
      <div className='header'>
      <h1>Readers and Writers</h1>
      </div>
      <ControlButtons onStart={handleStart} onStop={handleStop} onReset={handleReset} startTime={startTime} />
      <div className="info-container">
        {startTime && <div>Hora de comienzo: {startTime.toLocaleTimeString()}</div>}
        <Counter readCount={readCount} writeCount={writeCount} />
        <ConflictCounter conflictCount={conflictCount} />
        <div className='Time'> Execution time: {getExecutionTime()}</div>
      </div>
    </div>
  );
}






