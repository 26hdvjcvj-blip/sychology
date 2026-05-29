/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Languages, Mic } from 'lucide-react';
import { allBooks } from './data';
import persuasionImage from './assets/images/persuasion_art_cover_1780035476325.png';

export default function App() {
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');

  const speak = (text: string, lang: 'bn' | 'en') => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'bn' ? 'bn-BD' : 'en-US';
    
    // Attempt to find a native voice for better quality
    const voices = window.speechSynthesis.getVoices();
    if (lang === 'bn') {
      const bengaliVoice = voices.find(v => v.lang.startsWith('bn'));
      if (bengaliVoice) {
        utterance.voice = bengaliVoice;
      }
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-8 md:p-16">
      <div className="flex flex-col gap-4 mb-8 sticky top-0 bg-neutral-50/90 backdrop-blur-sm p-4 z-10 border-b border-neutral-200">
        <div className="flex justify-end">
          <button
            onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-neutral-800 border border-neutral-200 rounded-full font-medium hover:bg-neutral-100 transition shadow-sm hover:border-neutral-300"
          >
            <Languages size={18} className="text-neutral-500" />
            {language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
          </button>
        </div>
        <nav className="flex gap-2 overflow-x-auto pb-2">
          {allBooks.map((book) => (
            <button
              key={book.id}
              onClick={() => {
                const el = document.getElementById(book.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm font-medium hover:border-neutral-400 whitespace-nowrap shadow-sm"
            >
              {book.title[language]}
            </button>
          ))}
        </nav>
      </div>

      {allBooks.map((book) => (
        <div id={book.id} key={book.id} className="mb-16">
          <header className="mb-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 text-neutral-400 border border-neutral-200 rounded-xl bg-neutral-100 flex items-center justify-center h-48">
              <p>{book.title[language]}</p>
            </div>
            <div>
              <h1 className="text-4xl font-sans font-medium tracking-tight mb-2">
                {book.title[language]}
              </h1>
              <p className="text-lg text-neutral-600 font-mono">{language === 'bn' ? 'লেখক' : 'Author'}: {book.author}</p>
            </div>
          </header>
          <div className="grid gap-8">
            {book.sections.map((section) => (
              <section key={section.id} className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 flex flex-col md:flex-row gap-6 items-center">
                {section.imageUrl && (
                  <div className="w-full md:w-1/4 shrink-0">
                    <img 
                      src={section.imageUrl} 
                      alt={section.title[language]} 
                      className="w-full h-auto rounded-lg shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h2 className="text-2xl font-sans font-medium text-neutral-800">
                      {section.title[language]}
                    </h2>
                    <button 
                      onClick={() => speak(section.content[language], language)}
                      className="p-2 text-neutral-400 hover:text-neutral-800 transition"
                      title={language === 'bn' ? 'শুনুন' : 'Listen'}
                    >
                      <Mic size={20} />
                    </button>
                  </div>
                  <p className="text-sm font-mono text-neutral-500 mb-4">{section.caption[language]}</p>
                  <p className="text-neutral-700 leading-relaxed font-sans text-lg">
                    {section.content[language]}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
