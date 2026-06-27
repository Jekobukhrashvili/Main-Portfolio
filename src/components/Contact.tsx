import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent from: ${email}`);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-md w-full mx-auto px-6 text-center select-none opacity-0 animate-fade-in-up">
      <h2 className="text-3xl font-bold text-emerald-400 mb-3">
        {t.contact.git}
      </h2>
      <p className="dark:text-slate-400 text-black-900  text-sm mb-8">
        {t.contact.text}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-mono dark:text-slate-400 text-black-900 mb-1.5">
            {t.contact.mail}
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            className="w-full dark:bg-slate-800 bg-slate-400 border border-slate-700/80 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-100 focus:outline-none focus:border-emerald-500/80 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-black-900  dark:text-slate-400 mb-1.5">
            {t.contact.message}
          </label>
          <textarea
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.contact.txtmessage}
            className="w-full dark:bg-slate-800 bg-slate-400 border border-slate-700/80 rounded-lg px-4 py-2.5 text-sm dark:text-slate-100 text-slate-100 dark:placeholder-slate-500 placeholder-slate-100 focus:outline-none focus:border-emerald-500/80 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
        >
          {t.contact.btn}
        </button>
      </form>
    </div>
  );
};
