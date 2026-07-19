import type { CSSProperties } from "react";
import { Activity, AudioLines, Globe, Headset, Mail, MessageCircle, MessagesSquare, RotateCcw, Volume2, Waves, Zap } from "lucide-react";

// Bespoke architecture panels for /products — one layout per product, shaped like
// the system itself: a live signal path (Voice), a quality cycle (Testing), and a
// resolution routing map (Support). Presentation only; copy lives with the design.
// Scoped under .pa (see globals.css); accent is set per product.

type Variant = "voice" | "testing" | "support";
const ACCENT: Record<Variant, string> = { voice: "#58e6ff", testing: "#5b8cff", support: "#8b5cf6" };

export function ProductPanel({ variant }: { variant: Variant }) {
  return (
    <div className="pa" style={{ "--accent": ACCENT[variant] } as CSSProperties}>
      {variant === "voice" ? <VoicePanel /> : variant === "testing" ? <TestingPanel /> : <SupportPanel />}
    </div>
  );
}

const VOICE_LINKS = "M300 66 C345 66 348 200 372 200 M300 200 H372 M300 334 C345 334 348 200 372 200 M628 200 C652 200 655 66 700 66 M628 200 H700 M628 200 C652 200 655 334 700 334";
const SUPPORT_LINKS = "M270 64 C305 64 305 200 330 200 M270 200 H330 M270 336 C305 336 305 200 330 200 M670 200 C700 200 700 100 730 100 M670 200 C700 200 700 300 730 300";

function VoicePanel() {
  return (
    <section className="system" aria-label="Live call signal path">
      <div className="system__topline"><span>Live call signal path</span><span className="system__status">Streaming</span></div>
      <div className="voice-path">
        <svg className="voice-links" viewBox="0 0 1000 400" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path className="voice-link-base" d={VOICE_LINKS} />
          <path className="voice-link-flow" d={VOICE_LINKS} />
        </svg>
        <div className="signal-col signal-col--in">
          <div className="signal-col__label">Signals in</div>
          <div className="signal"><Waves strokeWidth={1.7} aria-hidden="true" /><div><div className="signal__name">Telephony &amp; WebRTC ingress</div><div className="signal__sub">PSTN · SIP · browser</div></div></div>
          <div className="signal"><AudioLines strokeWidth={1.7} aria-hidden="true" /><div><div className="signal__name">Streaming transcription</div><div className="signal__sub">Low latency · endpointing</div></div></div>
          <div className="signal"><MessagesSquare strokeWidth={1.7} aria-hidden="true" /><div><div className="signal__name">Dialog state &amp; turn-taking</div><div className="signal__sub">Barge-in aware</div></div></div>
        </div>
        <div className="voice-core">
          <span className="ring" aria-hidden="true" /><span className="ring" aria-hidden="true" />
          <div className="core-wave" aria-hidden="true">{Array.from({ length: 11 }, (_, i) => <i key={i} />)}</div>
          <h3>Reasoning + retrieval</h3>
          <span className="sub">Grounded in your knowledge · policy-aware</span>
        </div>
        <div className="signal-col signal-col--out">
          <div className="signal-col__label">Systems out</div>
          <div className="signal"><Volume2 strokeWidth={1.7} aria-hidden="true" /><div><div className="signal__name">Natural speech, streamed</div><div className="signal__sub">Sub-second response</div></div></div>
          <div className="signal"><Zap strokeWidth={1.7} aria-hidden="true" /><div><div className="signal__name">Actions in business systems</div><div className="signal__sub">APIs · MCP · CRM</div></div></div>
          <div className="signal"><Headset strokeWidth={1.7} aria-hidden="true" /><div><div className="signal__name">Warm handoff &amp; transcripts</div><div className="signal__sub">Context travels with the call</div></div></div>
        </div>
      </div>
      <div className="note"><Activity strokeWidth={1.8} aria-hidden="true" /><span>Sub-second by design — the loop streams continuously instead of waiting turn by turn.</span></div>
    </section>
  );
}

const TEST_STEPS: [string, string, string][] = [
  ["Application model", "Maps the app, requirements, and existing tests into one living view of behaviour.", "Understand"],
  ["Risk-led planning", "Derives test cases, data, edge conditions, and priorities from every change.", "Plan"],
  ["Parallel execution", "Drives browser, API, and environment checks without serial bottlenecks.", "Run"],
  ["Behaviour verification", "Checks functional output, visual state, accessibility, and data integrity.", "Verify"],
  ["Failure triage", "Clusters related failures and isolates the most likely root cause.", "Diagnose"],
  ["CI/CD reporting", "Returns reproducible evidence, artifacts, and trends to the delivery team.", "Improve"],
];

function TestingPanel() {
  return (
    <section className="system" aria-label="Quality operating cycle">
      <div className="system__topline"><span>Quality operating cycle</span><span className="system__status">Latest change passing</span></div>
      <div className="test-layout">
        <div className="test-summary">
          <div>
            <h3>Tests that evolve with the product.</h3>
            <p>The model and test suite are maintained together, so coverage never becomes a snapshot of last quarter&rsquo;s application.</p>
          </div>
          <div className="run-state" aria-label="Example run state">
            <div className="run-state__row"><span>UI runners</span><strong>complete</strong></div>
            <div className="run-state__row"><span>API runners</span><strong>complete</strong></div>
            <div className="run-state__row"><span>A11y checks</span><strong>complete</strong></div>
          </div>
        </div>
        <ol className="test-pipeline">
          {TEST_STEPS.map(([title, detail, verb], i) => (
            <li key={title} className="test-step">
              <span className="test-step__number">{String(i + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{detail}</p></div>
              <span className="test-step__verb">{verb}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="note"><RotateCcw strokeWidth={1.8} aria-hidden="true" /><span>Continuous by design — every deployment refreshes the model and runs the cycle again.</span></div>
    </section>
  );
}

const ENGINE_STAGES: [string, string][] = [
  ["Understand and route", "intent · urgency · ownership"],
  ["Retrieve the right evidence", "docs · account · ticket history"],
  ["Reason and take action", "tools · policy · approvals"],
];

function SupportPanel() {
  return (
    <section className="system" aria-label="Resolution routing map">
      <div className="system__topline"><span>Resolution routing map</span><span className="system__status">Routing active</span></div>
      <div className="support-map">
        <svg className="support-connectors" viewBox="0 0 1000 400" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path className="connector-base" d={SUPPORT_LINKS} />
          <path className="connector-flow" d={SUPPORT_LINKS} />
        </svg>
        <div className="route-zone">
          <div className="route-zone__label">Channels in</div>
          <div className="channel-list">
            <div className="channel"><MessageCircle strokeWidth={1.7} aria-hidden="true" /><span>Chat and messaging</span></div>
            <div className="channel"><Mail strokeWidth={1.7} aria-hidden="true" /><span>Email</span></div>
            <div className="channel"><Globe strokeWidth={1.7} aria-hidden="true" /><span>Web and in-app</span></div>
          </div>
        </div>
        <div className="route-zone support-core">
          <div className="support-core__head"><h3>Resolution engine</h3><span>case context live</span></div>
          {ENGINE_STAGES.map(([name, detail], i) => (
            <div key={name} className="core-stage"><span className="core-stage__index">{String(i + 1).padStart(2, "0")}</span><div><div className="core-stage__name">{name}</div><div className="core-stage__detail">{detail}</div></div></div>
          ))}
        </div>
        <div className="route-zone">
          <div className="route-zone__label">Right outcome</div>
          <div className="outcome-list">
            <div className="outcome"><h3>Resolved by the agent</h3><p>Answer delivered or account action completed in the original channel.</p></div>
            <div className="outcome outcome--human"><h3>Escalated to a person</h3><p>Owner, summary, evidence, and conversation history arrive together.</p></div>
          </div>
        </div>
      </div>
      <div className="note"><RotateCcw strokeWidth={1.8} aria-hidden="true" /><span>Resolution outcomes feed the knowledge and routing policy for the next case.</span></div>
    </section>
  );
}
