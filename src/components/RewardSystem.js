import './RewardSystem.css';
import React, { useState, useEffect } from 'react';

function RewardSystem({ maxScore }) {
  const [tokens, setTokens] = useState(0);

  useEffect(() => {
    if (maxScore > 0) {
      const reward = maxScore * 2; // For example, 2 tokens per max score point
      setTokens(reward);
    }
  }, [maxScore]);

  return (
    <div className="reward-system">
      <h2>Token Reward System</h2>
      <p>Total Tokens: {tokens}</p>
      <button onClick={() => alert(`You earned ${tokens} tokens!`)}>Claim Tokens</button>
    </div>
  );
}

export default RewardSystem;
