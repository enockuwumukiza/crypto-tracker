# 💹 CryptoWatch

A **Real-Time Cryptocurrency Price Tracker** that streams live market data using WebSockets. Designed with elegant UI and built for performance and clarity using modern technologies.


## 🌟 Demo

![CryptoWatch Demo](https://youtu.be/gV1kz1-C454?si=fnDs43sCvR5JQj7B)  
> 📽️ *Click above to watch a full walkthrough video of CryptoWatch in action.
---

## 🛠️ Tech Stack & Architecture

### 📦 Frontend
- **React 19 + TypeScript** — Component-based UI
- **Vite** — Blazing fast build tool
- **TailwindCSS + DaisyUI** — Modern styling with prebuilt UI components
- **Framer Motion** — Smooth UI animations
- **Radix UI Tooltips + HeroIcons + Lucide Icons** — Beautiful, accessible UI/UX
- **Redux Toolkit + React Redux** — Global state management
- **React Router v7** — Page navigation

### 🔄 Real-Time Integration
- **Binance WebSocket API** – Live price updates

---

## 🧠 Project Structure

```
src/
│
├── components/                # Reusable UI building blocks
│   ├── CryptoTable/           # Table displaying live crypto data
│   │   ├── CryptoTableHeader.tsx
│   │   ├── CryptoTableRow.tsx
│   ├── CryptoTracker/         # Main dashboard with grid + chart
│   │   ├── CryptoGrid.tsx
│   │   ├── FilterButtons.tsx
│   │   ├── FilterOptions.tsx
│   ├── Header/                # App header and logo
│   │   └── index.tsx
│   ├── MinChart/              # Mini live chart
│   │   └── index.tsx
│   └── ui/
│       └── tooltip.tsx        # Tooltip wrapper
│
├── features/crypto/           # Redux slice for crypto data
│   ├── binanceSocket.ts       # WebSocket connection setup
│   ├── cryptoSlice.ts         # Redux slice logic
│   └── CryptoTracker.tsx      # Connects data to display
│
├── hooks/                     # Custom React hooks
│
├── redux/                     # Redux store config
│   └── store.ts
│
├── utils/                     # Utility functions
│   ├── colors.ts
│   ├── formats.ts
│
├── pages/                     # App-level routes (if expanded)
│
├── services/                  # WebSocket mocks / API
│   └── mocCryptoWebsockets.ts
│
├── App.tsx                    # Main App component
├── main.tsx                   # Vite entry point
├── Menu.tsx                   # Side or dropdown menu
├── index.css                  # Global styles
└── vite-env.d.ts              # TypeScript Vite support
```


## ⚙️ Setup Instructions

1. **Clone the Repository**  
   ```bash
   https://github.com/enockuwumukiza/crypto-watch.git
   ```

2. **Install Dependencies**  
   ```bash
   npm run install
   ```

3. **Run in Development**  
   ```bash
   npm run dev
   ```

4. **Build for Production**  
   ```bash
   npm run build
   ```

5. **Preview Production Build**  
   ```bash
   npm run preview
   ```


## 🔮 Features

- Real-time price updates via **Binance WebSocket**
- Filter by **top 10 coins**, **price change**, or **volume**
- Live sparkline chart (MiniChart)
- Responsive, mobile-first UI
- Smooth animations + tooltips
- Clean and modular code structure


## 📌 Thought Process

> CryptoWatch was built with simplicity and real-time clarity in mind. From choosing Vite for its speed to Redux Toolkit for easy state logic, each decision aimed to make the app both developer-friendly and user-satisfying. The UI was designed to mimic financial dashboards while being lightweight and accessible.

## 📽️ Demo Walkthrough

> For a detailed walkthrough, UI explanation, and feature showcase:  
**👉 [Watch Full Demo Video](https://youtu.be/gV1kz1-C454?si=fnDs43sCvR5JQj7B)**  




## 📄 License

This project is open-source and available under the [MIT License](LICENSE).


Made with ❤️ Enock UWUMUKIZA
```
