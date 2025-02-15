// components/PomodoroTimer.tsx
import { useState, useEffect } from 'react'

const PomodoroTimer = () => {
  const initialTime = 25 * 60 // 25 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
    }
    return () => clearInterval(timer)
  }, [isRunning, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0')
    const secs = (seconds % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl mb-4">Pomodoro Timer</h2>
      <div className="text-6xl font-mono mb-8">
        {formatTime(timeLeft)}
      </div>
      <div>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded mx-2"
          onClick={() => setIsRunning(true)}
          disabled={isRunning || timeLeft === 0}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded mx-2"
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
        >
          Pause
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded mx-2"
          onClick={() => {
            setIsRunning(false)
            setTimeLeft(initialTime)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default PomodoroTimer
