import { useState, useEffect } from "react";

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const isPM = hours >= 12;
  const displayHours = (hours % 12 || 12).toString().padStart(2, "0");

  const greeting =
    hours < 12
      ? "Good Morning"
      : hours < 17
        ? "Good Afternoon"
        : "Good Evening";

  const greetingEmoji = hours < 12 ? "🌤️" : hours < 17 ? "☀️" : "🌙";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      {/* Greeting */}
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-0.5">
          {greetingEmoji} {greeting}
        </p>
        <h1 className="text-xl font-bold text-slate-100 tracking-tight">
          Expense Tracker
        </h1>
      </div>

      {/* Digital Clock */}
      <div className="flex items-end gap-1 font-mono">
        <span className="text-3xl font-bold text-slate-100 tabular-nums">
          {displayHours}
        </span>
        <span className="text-3xl font-bold text-emerald-400 animate-pulse mb-0.5">
          :
        </span>
        <span className="text-3xl font-bold text-slate-100 tabular-nums">
          {minutes}
        </span>
        <span className="text-3xl font-bold text-emerald-400 animate-pulse mb-0.5">
          :
        </span>
        <span className="text-3xl font-bold text-slate-100 tabular-nums">
          {seconds}
        </span>
        <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-1 ml-1">
          {isPM ? "PM" : "AM"}
        </span>
      </div>
    </div>
  );
}

export default Header;
