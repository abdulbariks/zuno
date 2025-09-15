import React from "react";

const Questions = () => {
  return (
    <div className="w-10/12 md:w-9/12 mx-auto my-10">
      <div className="flex flex-col items-center justify-center">
        <button className="bg-gray-300 py-1 px-5 rounded-3xl">
          Questions?
        </button>
        <h2 className="text-4xl font-bold pt-5 pb-10">We’re here to help</h2>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">What is Zuno?</div>
        <div className="collapse-content text-sm">
          Zuno combines AI technology with real psychology-based techniques,
          offering support that adapts to your mood, routine, and specific
          challenges like anxiety, sleep, libido, and focus.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Is Zuno a replacement for therapy?
        </div>
        <div className="collapse-content text-sm">
          No. Zuno is a powerful daily tool for emotional well-being, but it’s
          not a medical service or a substitute for professional therapy. It’s
          here to support you, not replace clinical care
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">Who is Zuno for?</div>
        <div className="collapse-content text-sm">
          Zuno is designed for women aged 18–35 who want to better understand
          their mental and emotional health using modern, tech-savvy tools — no
          stigma, no pressure.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How does the AI actually help?
        </div>
        <div className="collapse-content text-sm">
          Zuno uses AI to learn your patterns, suggest personalized exercises,
          monitor your emotional shifts, and guide you through breathing,
          journaling, focus-building, and self-awareness practices.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          What kind of issues can Zuno help me with?
        </div>
        <div className="collapse-content text-sm">
          Zuno helps with everyday mental health challenges like anxiety, sleep
          issues, low libido, poor focus, emotional eating, and burnout — all in
          one gentle, beautiful space
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Can I use Zuno every day?
        </div>
        <div className="collapse-content text-sm">
          Absolutely. Zuno was built to support your daily rhythms—from your
          morning energy to nighttime rest.
        </div>
      </div>
    </div>
  );
};

export default Questions;
