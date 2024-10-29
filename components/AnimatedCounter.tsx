'use client';

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        decimals={2}
        end={amount}
        decimal=","
        prefix="&#8377; "
      />
    </div>
  )
}

export default AnimatedCounter
