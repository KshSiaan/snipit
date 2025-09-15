# 🎮 Snipit

Snipit is a retro-styled, cute pinky console-like web application built with **Next.js**.
Its main feature: powered by **Sonoma Sky Alpha AI**, Snipit lets you **summarize any provided text** instantly and copy the result for later use.

✨ This project was created purely for **learning purposes** and as a way to experiment with building fun, responsive, AI-powered web apps.

---

## 🚀 Features

* 🎨 **Retro gamelike UI** — a pinky console-inspired interface.
* 🤖 **AI Summarization** — uses **Sonoma Sky Alpha** through the **OpenAI SDK**.
* 📋 **Copy results** — one-click copy of the summarized text.
* 📱 **Responsive design** — works smoothly across devices.
* ⚡ **Next.js powered** — modern React-based framework.

---

## 🛠️ Tech Stack

* [Next.js](https://nextjs.org/) – React framework for building modern web apps.
* [OpenAI SDK](https://www.npmjs.com/package/openai) – for handling AI summarization requests.
* [Tailwind CSS](https://tailwindcss.com/) – for styling

---

## 📦 Installation & Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/snipit.git
cd snipit
npm install
```

Add your **OpenAI API key** to `.env.local`:

```env
NEXT_PUBLIC_HFC_TOKEN=your_api_key_here
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---

## 📝 Notes

* This app does **not** support streaming responses (summaries appear after processing).
* It was created for **practice and learning purposes only**.
