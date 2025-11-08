import React from 'react';

const TOPICS = [
  { key: 'announcement', label: 'Announcement' },
  { key: 'advertisement', label: 'Advertisement' },
  { key: 'invitation', label: 'Invitation' },
  { key: 'daily-life', label: 'Daily Life' },
];

const TopicSelector = ({ value, onChange }) => {
  return (
    <section id="topics" className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Choose Topic</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {TOPICS.map((t) => (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`rounded-xl border p-3 text-sm font-medium transition ${
              value === t.key
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            aria-pressed={value === t.key}
          >
            {t.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TopicSelector;
