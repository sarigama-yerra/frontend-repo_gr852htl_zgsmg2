import React from 'react';

const HowToPlay = () => {
  return (
    <section id="how-to-play" className="border-t bg-gradient-to-b from-white to-blue-50/40 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">How to Play</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-700">1. Pick a Topic</p>
            <p className="mt-2 text-sm text-gray-700">
              Choose a category that matches your lesson: Announcement, Advertisement, or Invitation.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-700">2. Flip the Card</p>
            <p className="mt-2 text-sm text-gray-700">
              Read the topic on the front. Flip to reveal guiding questions and vocabulary hints.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-700">3. Speak & Rotate</p>
            <p className="mt-2 text-sm text-gray-700">
              Speak for 60–90 seconds. Then shuffle or go next. Partners can take turns answering.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-semibold">For Students</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Record yourself and listen for clarity, speed, and pronunciation.</li>
              <li>Use the vocabulary hints naturally; add your own words.</li>
              <li>Try connecting your ideas with linking phrases (first, then, however).</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-semibold">For Teachers</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Use cards for warm-ups, timed speaking drills, or pair work.</li>
              <li>Encourage follow-up questions to extend conversations.</li>
              <li>Assign different topics to groups and rotate every few minutes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
