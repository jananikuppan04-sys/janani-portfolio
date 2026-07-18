import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { person } from "../../data/portfolioData";

const suggestions = [
  "What can Janani build?",
  "What are her strongest skills?",
  "Is she available for internships?",
];

function answerQuestion(question) {
  const text = question.toLowerCase();
  if (text.includes("available") || text.includes("intern")) return person.availability;
  if (text.includes("skill") || text.includes("technology")) {
    return "Janani works with React, JavaScript, Java, Spring Boot, Python, REST APIs, PostgreSQL, RAG systems and LLM applications.";
  }
  if (text.includes("build") || text.includes("service")) {
    return "Janani builds responsive full-stack applications, Java backends, REST APIs, RAG assistants, AI chatbots and focused MVPs.";
  }
  return "Ask me about Janani’s skills, projects, services, achievements or availability.";
}

function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "assistant", text: "Hi — what would you like to know about Janani’s work?" },
  ]);

  function send(question) {
    const clean = question.trim();
    if (!clean) return;
    setMessages((current) => [
      ...current,
      { type: "user", text: clean },
      { type: "assistant", text: answerQuestion(clean) },
    ]);
    setInput("");
  }

  return (
    <>
      <button
        className="assistant-launcher"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        {open ? <X size={19} /> : <MessageCircle size={19} />}
        <span>{open ? "Close" : "Ask Janani AI"}</span>
      </button>

      <aside className={`assistant-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <header>
          <div className="assistant-avatar"><Sparkles size={18} /></div>
          <div><strong>Ask Janani AI</strong><small>Portfolio assistant</small></div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant"><X /></button>
        </header>
        <div className="assistant-messages">
          {messages.map((message, index) => (
            <p className={message.type} key={`${message.text}-${index}`}>{message.text}</p>
          ))}
          {messages.length === 1 && (
            <div className="assistant-suggestions">
              {suggestions.map((item) => (
                <button type="button" onClick={() => send(item)} key={item}>{item}</button>
              ))}
            </div>
          )}
        </div>
        <form onSubmit={(event) => { event.preventDefault(); send(input); }}>
          <label className="sr-only" htmlFor="assistant-question">Ask about Janani</label>
          <input
            id="assistant-question"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about skills or projects…"
          />
          <button type="submit" aria-label="Send question"><Send size={17} /></button>
        </form>
      </aside>
    </>
  );
}

export default PortfolioAssistant;
