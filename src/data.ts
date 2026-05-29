import { BookData } from './types';

export const allBooks: BookData[] = [
  {
    id: "winning-without-intimidation",
    title: { 
      bn: "CÓMO GANAR sin intimidar (EL ARTE DE LA PERSUASIÓN)", 
      en: "HOW TO WIN without intimidating (THE ART OF PERSUASION)" 
    },
    author: "Bob Burg",
    sections: [
      {
        id: "intro",
        title: { bn: "ভূমিকা", en: "Introduction" },
        content: { 
          bn: "প্ররোচনা মানে কাউকে জোর করে নিজের কথা মানানো নয়, বরং অন্যের চাহিদাকে সম্মান করে একটি পারস্পরিক জয়ের পথ খুঁজে বের করা। নিজের লক্ষ্য অর্জনের সাথে সাথে অন্যের মতামতকেও গুরুত্ব দিলে দীর্ঘমেয়াদী信任 বা বিশ্বাস তৈরি হয়।",
          en: "Persuasion isn't about forcefully convincing someone, but finding a mutual win by respecting others' needs. Achieving your goals while valuing their perspective builds lasting trust."
        },
        caption: { bn: "প্ররোচনার মূল ধারণা", en: "Core Concept of Persuasion" }
      },
      {
        id: "focus",
        title: { bn: "অন্যের উপর মনোযোগ দিন", en: "Focus on Others" },
        content: {
          bn: "সফল প্ররোচনাকারীরা সব সময় অন্য ব্যক্তির দৃষ্টিভঙ্গি এবং চাহিদার উপর ফোকাস করেন। নিজেকে নয়, বরং অন্যকে গুরুত্ব দিন। যখন আপনি বুঝতে পারেন অন্য পক্ষ কী চায়, তখন সমাধান খুঁজে পাওয়া সহজ হয়ে যায়।",
          en: "Successful persuaders always focus on the other person's perspective and needs. Value others, not yourself. When you understand what the other party wants, finding a solution becomes easy."
        },
        caption: { bn: "অন্যের গুরুত্ব বোঝা", en: "Understanding the Importance of Others" }
      },
      {
        id: "rapport",
        title: { bn: "পারস্পরিক সম্পর্ক তৈরি করুন (Rapport)", en: "Building Rapport" },
        content: {
          bn: "মানুষ এমন ব্যক্তিদের কথা শোনে যাদের তারা বিশ্বাস করে। তাই শুরুতেই একটি ইতিবাচক সম্পর্ক স্থাপন করা জরুরি। হাসিখুশি থাকা, অন্যের কথা শোনা এবং তাদের প্রতি সম্মান জানানো rapport তৈরির মূল চাবিকাঠি।",
          en: "People listen to those they trust. Establishing a positive rapport at the beginning is essential. Staying cheerful, listening to others, and showing respect are keys to building rapport."
        },
        caption: { bn: "বিশ্বাস ও সম্পর্ক", en: "Trust and Relationships" }
      },
      {
        id: "win-win",
        title: { bn: "উভয়ের জয় (Win-Win Solution)", en: "Win-Win Solution" },
        content: {
          bn: "এমন একটি সমাধান খুঁজে বের করুন যেখানে আপনি এবং অপর ব্যক্তি, দুজনেই লাভবান হন। প্ররোচনা মানেই কারোর পরাজয় নয়, বরং একটি সৃজনশীল পথ খুঁজে বের করা যা সবার উপকারে আসে।",
          en: "Find a solution where both you and the other person benefit. Persuasion doesn't mean someone loses; it's about finding a creative path that benefits everyone."
        },
        caption: { bn: "সবার জয়", en: "Mutual Victory" }
      },
      {
        id: "yes-tech",
        title: { bn: "হ্যাঁ শোনার কৌশল", en: "The 'Yes' Technique" },
        content: {
          bn: "কথোপকথনের এমন কিছু প্রশ্ন করুন যাতে অপর ব্যক্তি সহজেই 'হ্যাঁ' বলতে পারে। এটি আলোচনার গতিপথ ইতিবাচক দিকে রাখতে সাহায্য করে এবং ছোট ছোট মিল থেকে বড় ঐকমত্যে পৌঁছানো সম্ভব হয়।",
          en: "Ask questions that lead the other person to easily say 'yes'. It helps keep the conversation positive and makes reaching a consensus from small agreements possible."
        },
        caption: { bn: "সম্মতি তৈরির কৌশল", en: "Technique to Build Consensus" }
      },
      {
        id: "confidence-humility",
        title: { bn: "আত্মবিশ্বাস ও বিনয়", en: "Confidence and Humility" },
        content: {
          bn: "প্ররোচিত করার সময় অবশ্যই আত্মবিশ্বাসী হতে হবে, কিন্তু একই সাথে বিনয়ী থাকতে হবে। অহংকার প্রদর্শন করলে মানুষ দূরে সরে যায়, কিন্তু বিনয় মানুষকে আপনার কাছাকাছি আনে।",
          en: "Be confident but humble while persuading. Arrogance turns people away, while humility brings people closer to you."
        },
        caption: { bn: "ব্যক্তিত্বের ভারসাম্য", en: "Balance of Personality" }
      },
      {
        id: "be-genuine",
        title: { bn: "আন্তরিক হোন", en: "Be Genuine" },
        content: {
          bn: "কপটতা বা মিথ্যে প্রশংসা পরিহার করুন। প্রকৃত আন্তরিকতা আপনাকে অন্যের মনে জায়গা করে দিতে সাহায্য করবে। যখন মানুষ বুঝতে পারে আপনি সত্যিই তাদের ভালো চান, তখন তারা আপনার কথায় উদ্বুদ্ধ হতে আগ্রহী হয়।",
          en: "Avoid deception or false praise. Genuine sincerity helps you find a place in others' hearts. When people realize you really care about their well-being, they are more eager to be influenced by you."
        },
        caption: { bn: "আন্তরিকতার শক্তি", en: "Power of Sincerity" }
      }
    ]
  },
  {
    id: "influence",
    title: { 
      bn: "ইনফ্লুয়েন্স: পারসুয়েশনের সাইকোলজি", 
      en: "Influence: The Psychology of Persuasion" 
    },
    author: "Robert Cialdini",
    sections: [
      {
        id: "reciprocity",
        title: { bn: "পারস্পরিকতা (Reciprocity)", en: "Reciprocity" },
        content: {
          bn: "উপকার পাওয়ার পর প্রতিদান দেওয়ার একটি সহজাত প্রবণতা মানুষের মধ্যে কাজ করে। তাই আপনি যদি আগে কাউকে ছোটখাটো সাহায্য করেন বা উপকার করেন, তবে ভবিষ্যতে তারাও আপনার অনুরোধ রক্ষা করতে বেশি আগ্রহী হবে।",
          en: "Humans have an innate tendency to return favors. If you provide a small favor or help first, others will feel an unspoken urge to reciprocate your request later."
        },
        caption: { bn: "প্রদান ও গ্রহণ", en: "Give and Take" }
      },
      {
        id: "social-proof",
        title: { bn: "সামাজিক প্রমাণ (Social Proof)", en: "Social Proof" },
        content: {
          bn: "মানুষ যখন সিদ্ধান্ত নিতে দ্বিধায় থাকে, তখন সে অন্যদের সিদ্ধান্তকে অনুসরণ করে।",
          en: "When people are uncertain, they tend to look to others to guide their own behavior."
        },
        caption: { bn: "অন্যের অনুসরণ", en: "Following Others" }
      }
    ]
  },
  {
    id: "48-laws",
    title: { 
      bn: "পাওয়ার এর ৪৮টি নিয়ম", 
      en: "The 48 Laws of Power" 
    },
    author: "Robert Greene",
    sections: [
      {
        id: "never-outshine",
        title: { bn: "কখনো গুরুকে ছাড়িয়ে যাবেন না", en: "Never Outshine the Master" },
        content: {
          bn: "আপনার ঊর্ধ্বতনের সামনে সব সময় বিনয়ী থাকুন এবং তাদের বেশি কৃতিত্ব দিন, যাতে তারা আপনার প্রতি নিরাপত্তাহীনতায় না ভোগে।",
          en: "Always make those above you feel comfortably superior. In your desire to please or impress them, do not display your talents too much."
        },
        caption: { bn: "ঊর্ধ্বতনের সম্মান", en: "Respecting Authority" }
      }
    ]
  },
  {
    id: "atomic-habits",
    title: { 
      bn: "অ্যাটোমিক হ্যাবিটস", 
      en: "Atomic Habits" 
    },
    author: "James Clear",
    sections: [
      {
        id: "habit-loop",
        title: { bn: "হ্যাবিট লুপ", en: "The Habit Loop" },
        content: {
          bn: "প্রতিটি অভ্যাসের নেপথ্যে একটি চক্র কাজ করে: ১. সংকেত (কিউ) যা মস্তিষ্ককে শুরু করতে বলে, ২. তীব্র আকাঙ্ক্ষা, ৩. সেই অনুযায়ী প্রতিক্রিয়া, এবং ৪. কাজের শেষে পুরস্কার। এই চক্রটি পরিবর্তন বা নতুন অভ্যাস গড়ে তোলার চাবিকাঠি।",
          en: "Every habit operates in a cycle: 1. The Cue (triggering the brain), 2. Craving, 3. Response, 4. The Reward. Mastering this cycle is the key to breaking bad habits or building new ones."
        },
        caption: { bn: "নতুন অভ্যাস গঠন", en: "Forming New Habits" }
      }
    ]
  },
  {
    id: "thinking-fast-slow",
    title: { 
      bn: "থিংকিং, ফাস্ট অ্যান্ড স্লো", 
      en: "Thinking, Fast and Slow" 
    },
    author: "Daniel Kahneman",
    sections: [
      {
        id: "system-1-2",
        title: { bn: "সিস্টেম ১ এবং সিস্টেম ২", en: "System 1 and System 2" },
        content: {
          bn: "মস্তিষ্ক মূলত দুই পদ্ধতিতে চিন্তা করে। সিস্টেম ১ হলো স্বয়ংক্রিয় ও দ্রুত, যা অভ্যাসের বশে কাজ করে। আর সিস্টেম ২ হলো ধীর ও সচেতন, যা যুক্তিনির্ভর কাজের জন্য ব্যবহৃত হয়। সফল হতে আমাদের বুঝতে হবে কখন কোনটি ব্যবহার করতে হবে।",
          en: "The brain processes thoughts in two modes. System 1 is automatic, fast, and habit-driven. System 2 is slow, conscious, and analytical. Success requires knowing which mode to apply to which situation."
        },
        caption: { bn: "চিন্তার ধরন", en: "Modes of Thinking" }
      }
    ]
  },
  {
    id: "courage-to-be-disliked",
    title: { 
      bn: "দ্য কারেজ টু বি ডিসলাইকড", 
      en: "The Courage to Be Disliked" 
    },
    author: "Ichiro Kishimi and Fumitake Koga",
    sections: [
      {
        id: "interpersonal-problems",
        title: { bn: "সম্পর্কের সমস্যা", en: "Interpersonal Problems" },
        content: {
          bn: "পৃথিবীর সব সমস্যার মূলে রয়েছে মানুষের সাথে মানুষের সম্পর্কের টানাপোড়েন। ব্যক্তিগত সমস্যাগুলো আসলে সামাজিক সম্পর্কের জটিলতার বহিঃপ্রকাশ।",
          en: "All problems are interpersonal relationship problems. Personal struggles are often reflections of complex human relationships."
        },
        caption: { bn: "সম্পর্কের গুরুত্ব", en: "Importance of Relationships" }
      },
      {
        id: "expectations",
        title: { bn: "প্রত্যাশা বর্জন", en: "Rejection of Expectations" },
        content: {
          bn: "অন্যকে খুশি করতে জীবন কাটানো মানে নিজের ইচ্ছাকে বিসর্জন দেওয়া। জীবনের সত্যিকারের সুখ ও স্বাধীনতা পেতে হলে, অন্যের প্রত্যাশার চাপ থেকে নিজেকে মুক্ত করার সাহস দেখানোই হলো বাঁচার আসল উপায়।",
          en: "Living only to please others means sacrificing your own desires. True happiness and freedom arise only when you have the courage to break free from the burden of others' expectations."
        },
        caption: { bn: "নিজের পরিচয়", en: "Defining Yourself" }
      }
    ]
  },
  {
    id: "laws-human-nature",
    title: {
      bn: "দ্য লজ অফ হিউম্যান নেচার",
      en: "The Laws of Human Nature"
    },
    author: "Robert Greene",
    sections: [
      {
        id: "irrationality",
        title: { bn: "অযৌক্তিকতা", en: "Irrationality" },
        content: {
          bn: "আমরা মনে করি আমরা যুক্তিবাদী, কিন্তু বাস্তবে আমাদের আবেগের প্রভাব অনেক বেশি। আমাদের চরিত্রের এই দুর্বলতাগুলো বুঝতে পারলে অন্যের সাথে সম্পর্ক সহজতর হয়।",
          en: "We think we are rational, but our emotions drive us more than we think. Understanding these flaws in character makes relating to others easier."
        },
        caption: { bn: "আবেগের প্রভাব", en: "Impact of Emotions" }
      },
      {
        id: "narcissism",
        title: { bn: "নার্সিসিজম", en: "Narcissism" },
        content: {
          bn: "প্রত্যেক মানুষের মধ্যেই আত্মকেন্দ্রিকতা থাকে। এটি বুঝতে পারা মানে হলো মানুষের আসল রূপকে চিনে নেওয়া এবং নিজের চারপাশের মানুষের ব্যক্তিত্ব সম্পর্কে সচেতন হওয়া।",
          en: "Everyone possesses a level of narcissism. Understanding this means recognizing true colors of people and being aware of the personalities around us."
        },
        caption: { bn: "আত্মকেন্দ্রিকতা", en: "Self-absorption" }
      }
    ]
  },
  {
    id: "mans-search-for-meaning",
    title: {
      bn: "ম্যানস সার্চ ফর মিনিং",
      en: "Man's Search for Meaning"
    },
    author: "Viktor Frankl",
    sections: [
      {
        id: "logotherapy",
        title: { bn: "লোগোথেরাপি", en: "Logotherapy" },
        content: {
          bn: "অস্তিত্বের সংকট নিরসনে জীবনের উদ্দেশ্য খুঁজে পাওয়া জরুরি। জীবনের কঠিনতম পরিস্থিতিতেও যদি আপনি আপনার কাজের বা অনুরাগের একটি উদ্দেশ্য খুঁজে পান, তবে যেকোনো কষ্ট সহ্য করা সম্ভব।",
          en: "Finding purpose is crucial to overcoming existential crises. Even in the most difficult situations, if you find meaning in your work or passion, you can endure any suffering."
        },
        caption: { bn: "জীবনের উদ্দেশ্য", en: "Purpose of Life" }
      },
      {
        id: "hope-factor",
        title: { bn: "আশা ও টিকে থাকা", en: "Hope and Survival" },
        content: {
          bn: "জীবনের প্রতি আশা এবং ভবিষ্যতের লক্ষ্যের দিকে তাকিয়ে থাকাই মানুষকে চরম দুর্ভোগের মধ্যেও বাঁচিয়ে রাখে। আশা আমাদের মানসিকভাবে শক্তিশালী করে।",
          en: "Focusing on hope and future goals keeps people alive even in extreme suffering. Hope makes us mentally strong."
        },
        caption: { bn: "আশার শক্তি", en: "Power of Hope" }
      }
    ]
  },
  {
    id: "flow",
    title: {
      bn: "ফ্লো",
      en: "Flow"
    },
    author: "Mihaly Csikszentmihalyi",
    sections: [
      {
        id: "flow-state",
        title: { bn: "ফ্লো স্টেট", en: "The Flow State" },
        content: {
          bn: "যখন আপনি এমন কোনো কাজে ডুবে যান যে সময়বোধ হারিয়ে যায়, তাকেই বলে ফ্লো। এটি পূর্ণ মনোযোগ এবং কাজের চরম দক্ষতার একটি অবস্থা, যা অনেক সন্তুষ্টি দেয়।",
          en: "When you are so immersed in an activity that you lose sense of time, it is called Flow. It is a state of full focus and peak efficiency, providing great satisfaction."
        },
        caption: { bn: "কাজের তন্ময়তা", en: "Optimal Focus" }
      },
      {
        id: "intrinsic-joy",
        title: { bn: "কাজের আনন্দ", en: "Joy in Work" },
        content: {
          bn: "বহিরাগত পুরস্কারের চেয়ে কাজের প্রক্রিয়া নিজেই যখন আনন্দদায়ক হয়ে ওঠে, তখনই মানুষ সবচেয়ে সৃজনশীল হয়। নিজের কাজকে ভালোবাসা কাজের মান বাড়িয়ে দেয়।",
          en: "When the process itself becomes enjoyable rather than just external rewards, people are most creative. Loving your work enhances its quality."
        },
        caption: { bn: "কাজের ভালোলাগা", en: "Intrinsic Joy" }
      }
    ]
  }
];
