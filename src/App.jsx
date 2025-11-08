import React, { useState } from 'react';
import HeroCover from './components/HeroCover';
import TopicSelector from './components/TopicSelector';
import CardDeck from './components/CardDeck';
import HowToPlay from './components/HowToPlay';

function App() {
  const [topic, setTopic] = useState('announcement');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroCover />
      <TopicSelector value={topic} onChange={setTopic} />
      <CardDeck topic={topic} />
      <HowToPlay />
      <footer className="border-t py-6 text-center text-xs text-gray-500">
        Built with love for EFL learners • Daily Conversation Cards
      </footer>
    </div>
  );
}

export default App;
