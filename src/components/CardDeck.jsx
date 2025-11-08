import React, { useMemo, useState } from 'react';
import { Shuffle, RefreshCw, Volume2 } from 'lucide-react';

const PROMPTS = {
  announcement: [
    {
      title: 'School Assembly Announcement',
      questions: [
        'What is the announcement about?',
        'Who needs to attend and when?',
        'What should listeners remember to bring or do?'
      ],
      vocab: ['assembly', 'urgent', 'schedule', 'venue']
    },
    {
      title: 'Weather Alert',
      questions: [
        'What kind of weather is expected?',
        'How should people prepare?',
        'What changes might happen to plans?'
      ],
      vocab: ['forecast', 'cancel', 'postpone', 'advisory']
    },
  ],
  advertisement: [
    {
      title: 'New Cafe Opening',
      questions: [
        'What makes this cafe special?',
        'What promotions are they offering?',
        'Where is it located?'
      ],
      vocab: ['grand opening', 'discount', 'cozy', 'limited time']
    },
    {
      title: 'Smartphone Ad',
      questions: [
        'What are the key features?',
        'Who is the target customer?',
        'Why should someone buy it now?'
      ],
      vocab: ['battery life', 'performance', 'camera', 'trade-in']
    },
  ],
  invitation: [
    {
      title: 'Birthday Invitation',
      questions: [
        'When and where is the party?',
        'What is the theme or dress code?',
        'What should guests bring?'
      ],
      vocab: ['RSVP', 'venue', 'host', 'guest of honor']
    },
    {
      title: 'Club Meeting Invite',
      questions: [
        'What is the meeting agenda?',
        'Who should attend?',
        'How can members prepare?'
      ],
      vocab: ['agenda', 'minutes', 'committee', 'attendance']
    },
  ],
  'daily-life': [
    {
      title: 'Grocery Shopping',
      questions: [
        'What items do you need?',
        'How do you compare prices?',
        'What is your plan to save money?'
      ],
      vocab: ['budget', 'receipt', 'fresh produce', 'brand']
    },
  ],
};

const Card = ({ prompt, flipped, onFlip }) => {
  return (
    <div
      className="relative h-80 w-full max-w-md cursor-pointer select-none [perspective:1200px]"
      onClick={onFlip}
      role="button"
      aria-label="Flip card"
    >
      <div
        className={`absolute inset-0 rounded-2xl bg-white p-6 shadow-xl transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 grid place-items-center p-6 [backface-visibility:hidden]">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-600">Topic</p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">{prompt.title}</h3>
            <p className="mt-3 text-sm text-gray-600">Tap to flip for guiding questions</p>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rotate-y-180 p-6 [backface-visibility:hidden]">
          <p className="text-xs uppercase tracking-widest text-blue-600">Guiding Questions</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-800">
            {prompt.questions.map((q, i) => (
              <li key={i} className="text-sm">{q}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs uppercase tracking-widest text-fuchsia-600">Vocabulary Hints</p>
          <div className="mt-1 flex flex-wrap gap-2">
            {prompt.vocab.map((v) => (
              <span key={v} className="rounded-full bg-fuchsia-100 px-2.5 py-1 text-xs font-medium text-fuchsia-700">
                {v}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
};

const CardDeck = ({ topic }) => {
  const prompts = useMemo(() => PROMPTS[topic] || [], [topic]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = prompts[index] || prompts[0];

  const shuffle = () => {
    if (!prompts.length) return;
    const next = Math.floor(Math.random() * prompts.length);
    setIndex(next);
    setFlipped(false);
  };

  const nextCard = () => {
    if (!prompts.length) return;
    setIndex((i) => (i + 1) % prompts.length);
    setFlipped(false);
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Conversation Card</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={shuffle}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50"
            aria-label="Shuffle"
          >
            <Shuffle size={16} /> Shuffle
          </button>
          <button
            onClick={nextCard}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50"
            aria-label="Next"
          >
            <RefreshCw size={16} /> Next
          </button>
          <button
            onClick={() => {
              if (!current) return;
              const utter = new SpeechSynthesisUtterance(
                `${current.title}. Questions: ${current.questions.join(', ')}`
              );
              window.speechSynthesis.speak(utter);
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50"
            aria-label="Read aloud"
          >
            <Volume2 size={16} /> Read aloud
          </button>
        </div>
      </div>

      {current ? (
        <div className="grid place-items-center">
          <Card prompt={current} flipped={flipped} onFlip={() => setFlipped((f) => !f)} />
        </div>
      ) : (
        <p className="text-gray-600">No prompts available for this topic yet.</p>
      )}

      <p className="mt-6 text-center text-sm text-gray-500">
        Tip: Click the card to flip. Use Shuffle to randomize and Next to cycle through the deck.
      </p>
    </section>
  );
};

export default CardDeck;
