// src/App.js
import  { useState, useEffect } from 'react';
import ConflictCounter from './components/ConflictCounter';
import Counter from './components/Counter';
import { ControlButtons } from './components/ControlButtons';

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
    return `${Math.floor(diff / 1000)} seconds`;
  };

  return (
    <div className="App">
      <h1>Readers and Writers</h1>
      <ControlButtons onStart={handleStart} onStop={handleStop} onReset={handleReset} startTime={startTime} />
      <Counter readCount={readCount} writeCount={writeCount} />
      <ConflictCounter conflictCount={conflictCount} />
      <div> Execution time: {getExecutionTime()}</div>
    </div>
  );
}



