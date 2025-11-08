import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for legibility (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Daily Conversation Cards
        </h1>
        <p className="mt-4 max-w-2xl text-base/relaxed text-white/90 sm:text-lg">
          Practice English speaking fluency with interactive, daily prompts. Flip, shuffle, and discuss.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#topics"
            className="rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-white"
          >
            Choose a topic
          </a>
          <a
            href="#how-to-play"
            className="rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            How to play
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
