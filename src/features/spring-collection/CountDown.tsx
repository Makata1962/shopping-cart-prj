import { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return timeLeft;
};

function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  });

  return (
    <div className='flex justify-center items-center space-x-3'>
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className='text-center'>
          <span className='block text-4xl font-medium'>
            {String(timeLeft[interval]).padStart(2, '0')}
          </span>
          <span className='block text-sm font-medium capitalize font-medium'>
            {interval}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Countdown;
