import { useState } from 'react';
import { Check, Code2, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

const steps = [
  { name: 'Zaplanuj', icon: Sparkles, command: '> agent.plan("nowy pomysł")', line: 'Kontekst. Architektura. Dobry plan.', result: 'Od pomysłu do konkretnego zadania.' },
  { name: 'Zbuduj', icon: Code2, command: '> agent.build("twoja aplikacja")', line: 'Małe kroki. Przegląd kodu. Twój projekt.', result: 'Ty wyznaczasz kierunek. AI pomaga tworzyć.' },
  { name: 'Zweryfikuj', icon: Check, command: '> agent.test("gotowe na produkcję")', line: 'Testy. Debugowanie. Pewne wdrożenie.', result: 'Jakość kodu pozostaje w Twoich rękach.' },
];

export default function Workflow() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return <div className="workflow">
    <div className="workflow-top"><span><span className="status-dot" /> AI-NATIVE WORKFLOW</span><span>01 — 03</span></div>
    <div className="workflow-tabs" role="tablist" aria-label="Etapy pracy z AI">
      {steps.map((item, index) => <button key={item.name} role="tab" id={`workflow-tab-${index}`} aria-selected={active === index} aria-controls="workflow-panel" tabIndex={active === index ? 0 : -1} className={active === index ? 'active' : ''} onClick={() => setActive(index)} onKeyDown={e => {
        if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) {
          e.preventDefault(); const next = e.key === 'Home' ? 0 : e.key === 'End' ? 2 : (active + (e.key === 'ArrowRight' ? 1 : 2)) % 3;
          setActive(next); document.getElementById(`workflow-tab-${next}`)?.focus();
        }
      }}><item.icon size={14} />{item.name}</button>)}
    </div>
    <div id="workflow-panel" role="tabpanel" aria-labelledby={`workflow-tab-${active}`} className="workflow-code" aria-live="polite"><code>{step.command}<span className="cursor">▊</span></code><p>{step.line}</p><span className="workflow-result"><Check size={13} /> {step.result}</span></div>
    <div className="workflow-bottom"><span><Terminal size={13} /> 10xDevs · ucz się, tworząc</span><ArrowUpRight size={15} /></div>
  </div>;
}
