import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  Compass,
  Menu,
  ScanLine,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'

const steps = [
  {
    label: 'See the whole picture',
    description:
      'Bring the scattered pieces into one calm, honest view. The first win is knowing what is actually happening.',
    metric: '01 / notice',
  },
  {
    label: 'Choose one clear move',
    description:
      'Turn a vague worry into a next step you can finish this week — without rebuilding your entire life around a spreadsheet.',
    metric: '02 / decide',
  },
  {
    label: 'Keep your future visible',
    description:
      'Watch your decisions compound into room, options and momentum. Progress should feel tangible, not theoretical.',
    metric: '03 / grow',
  },
]

const faqs = [
  {
    question: 'Is Fermor another budgeting app?',
    answer:
      'Not quite. Fermor is designed to help you understand the shape of your financial life and decide what matters next. Budgeting is one tool inside that bigger picture.',
  },
  {
    question: 'Who is Fermor for?',
    answer:
      'For people who are earning, saving and making real decisions — but still feel like their money lives in too many tabs, accounts and mental notes.',
  },
  {
    question: 'Do I need to be “good with money”?',
    answer:
      'No. Fermor starts with clarity, not financial fluency. You do not need to know the right words before you can make a better next move.',
  },
]

function Wordmark({ inverse = false }) {
  return (
    <span className={`wordmark ${inverse ? 'wordmark--inverse' : ''}`}>
      <span className="wordmark__mark">f</span>
      <span>fermor</span>
    </span>
  )
}

function HeroMap() {
  return (
    <div className="hero-map-wrap">
      <div className="hero-map-glow" aria-hidden="true" />
      <div className="hero-map">
        <div className="hero-map__topline">
          <div>
            <p className="eyebrow eyebrow--dark">Your money map</p>
            <p className="hero-map__updated">A clearer view of right now</p>
          </div>
          <div className="signal-pill">
            <span className="signal-pill__dot" />
            signal / 74%
          </div>
        </div>

        <div className="hero-map__numbers">
          <div>
            <span className="hero-map__number-label">monthly flow</span>
            <strong>8,420</strong>
          </div>
          <div>
            <span className="hero-map__number-label">room to move</span>
            <strong className="hero-map__number--lime">1,290</strong>
          </div>
        </div>

        <div className="route-map" aria-label="Illustration of a personal money map">
          <div className="route-map__grid" aria-hidden="true" />
          <svg className="route-map__path" viewBox="0 0 440 190" fill="none" aria-hidden="true">
            <path d="M34 145C84 145 92 52 155 73C209 91 207 154 260 137C309 121 301 48 364 54C391 57 403 69 414 77" />
            <path d="M34 145C84 145 92 52 155 73C209 91 207 154 260 137C309 121 301 48 364 54C391 57 403 69 414 77" className="route-map__path-shadow" />
          </svg>

          <div className="route-node route-node--one">
            <span className="route-node__index">01</span>
            <span className="route-node__label">income</span>
            <strong>+ 8,420</strong>
          </div>
          <div className="route-node route-node--two">
            <span className="route-node__index">02</span>
            <span className="route-node__label">commitments</span>
            <strong>- 4,210</strong>
          </div>
          <div className="route-node route-node--three">
            <span className="route-node__index">03</span>
            <span className="route-node__label">next move</span>
            <strong>build buffer</strong>
          </div>

          <div className="route-map__cursor" aria-hidden="true">
            <CircleDot size={17} strokeWidth={1.8} />
            <span>you are here</span>
          </div>
        </div>

        <div className="hero-map__footer">
          <div className="hero-map__footer-icon">
            <ScanLine size={16} strokeWidth={1.7} />
          </div>
          <div>
            <span className="hero-map__number-label">this week’s focus</span>
            <strong>Give your buffer a job.</strong>
          </div>
          <ArrowUpRight size={19} strokeWidth={1.7} />
        </div>
      </div>

      <div className="hero-note hero-note--top">
        <Sparkles size={15} />
        <span>Less noise. More signal.</span>
      </div>
      <div className="hero-note hero-note--bottom">
        <span className="hero-note__check"><Check size={13} strokeWidth={2.8} /></span>
        One good move at a time
      </div>
    </div>
  )
}

function FeatureCard({ accent, icon, number, title, copy, children }) {
  return (
    <article className={`feature-card feature-card--${accent}`}>
      <div className="feature-card__header">
        <span className="feature-card__number">{number}</span>
        <span className="feature-card__icon">{icon}</span>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
      <div className="feature-card__visual">{children}</div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [activeFaq, setActiveFaq] = useState(0)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="shell-width site-header__inner">
          <a className="site-header__brand" href="#top" aria-label="Fermor home" onClick={closeMenu}>
            <Wordmark />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#method">The method</a>
            <a href="#reset">How it works</a>
            <a href="#start">Get started</a>
          </nav>

          <a className="header-cta" href="#start">
            Map your money <ArrowUpRight size={15} strokeWidth={2.1} />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav shell-width" id="mobile-nav" aria-label="Mobile navigation">
            <a href="#method" onClick={closeMenu}>The method <ArrowRight size={15} /></a>
            <a href="#reset" onClick={closeMenu}>How it works <ArrowRight size={15} /></a>
            <a href="#start" onClick={closeMenu}>Get started <ArrowRight size={15} /></a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-section__pattern" aria-hidden="true" />
          <div className="hero-section__orb hero-section__orb--one" aria-hidden="true" />
          <div className="hero-section__orb hero-section__orb--two" aria-hidden="true" />
          <div className="shell-width hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> Financial clarity, in plain English</p>
              <h1 id="hero-title">Make your money <em>make sense.</em></h1>
              <p className="hero-copy__lede">
                Fermor gives you a calmer view of what you have, what matters and what to do next — so progress feels like a direction, not a guess.
              </p>
              <div className="hero-actions">
                <a className="button button--lime" href="#start">
                  Start with a clearer next move <ArrowUpRight size={16} strokeWidth={2.2} />
                </a>
                <a className="text-link text-link--light" href="#method">
                  See the method <ArrowDownRight size={16} strokeWidth={1.8} />
                </a>
              </div>
              <div className="hero-reassurance">
                <ShieldCheck size={17} strokeWidth={1.7} />
                <span>No jargon. No judgement. Just a plan you can see.</span>
              </div>
            </div>
            <HeroMap />
          </div>
          <div className="shell-width hero-section__bottomline">
            <span>For people building a life, not just a balance.</span>
            <span className="scroll-cue"><span /> scroll to explore</span>
          </div>
        </section>

        <section className="section section--intro" id="method" aria-labelledby="method-title">
          <div className="shell-width">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow eyebrow--ink">The Fermor point of view</p>
                <h2 id="method-title">Money is a system.<br /><span>See the system.</span></h2>
              </div>
              <p className="section-heading__copy">The best financial decision is rarely the most complicated one. It is the one you can understand, make and keep making.</p>
            </div>

            <div className="feature-grid">
              <FeatureCard
                accent="coral"
                number="01"
                title="Notice what’s really happening."
                copy="Make the invisible visible: the patterns, pressure points and small pockets of room in your month."
                icon={<Compass size={20} strokeWidth={1.7} />}
              >
                <div className="notice-visual">
                  <div className="notice-visual__line notice-visual__line--one"><span /> <span /> <span /> <span /></div>
                  <div className="notice-visual__line notice-visual__line--two"><span /> <span /> <span /> <span /></div>
                  <div className="notice-visual__legend"><span className="legend-dot legend-dot--coral" /> fixed <span className="legend-dot legend-dot--ink" /> flexible</div>
                </div>
              </FeatureCard>
              <FeatureCard
                accent="lime"
                number="02"
                title="Decide without the drama."
                copy="Turn a noisy financial to-do list into one next move that fits the person you are today."
                icon={<ArrowUpRight size={20} strokeWidth={1.7} />}
              >
                <div className="decide-visual">
                  <div className="decide-visual__orbit decide-visual__orbit--one" />
                  <div className="decide-visual__orbit decide-visual__orbit--two" />
                  <div className="decide-visual__core">next<br /><strong>move</strong></div>
                  <span className="decide-visual__dot decide-visual__dot--one" />
                  <span className="decide-visual__dot decide-visual__dot--two" />
                  <span className="decide-visual__dot decide-visual__dot--three" />
                </div>
              </FeatureCard>
              <FeatureCard
                accent="blue"
                number="03"
                title="Grow with the signal."
                copy="Keep the right things in view, so your future gets a vote in the decisions you make today."
                icon={<Sparkles size={20} strokeWidth={1.7} />}
              >
                <div className="grow-visual">
                  <div className="grow-visual__bars"><span /><span /><span /><span /><span /><span /></div>
                  <div className="grow-visual__curve" />
                  <span className="grow-visual__label">more room, over time ↗</span>
                </div>
              </FeatureCard>
            </div>
          </div>
        </section>

        <section className="section section--dark" id="reset" aria-labelledby="reset-title">
          <div className="shell-width reset-grid">
            <div className="reset-copy">
              <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> A small ritual for a big picture</p>
              <h2 id="reset-title">The three-minute<br /><em>money reset.</em></h2>
              <p>Fermor helps you make a habit of clarity. Pick a moment, check the signal and leave with one thing that feels possible.</p>
              <a className="text-link text-link--light" href="#start">Make it your own <ArrowUpRight size={16} strokeWidth={1.8} /></a>
            </div>

            <div className="reset-panel">
              <div className="reset-panel__rail" aria-hidden="true">
                {steps.map((step, index) => (
                  <button
                    className={`reset-step-dot ${activeStep === index ? 'reset-step-dot--active' : ''}`}
                    key={step.metric}
                    type="button"
                    aria-label={`Show step ${index + 1}: ${step.label}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </button>
                ))}
              </div>
              <div className="reset-panel__content">
                <div className="reset-panel__meta">
                  <span>{steps[activeStep].metric}</span>
                  <span>3 min / once a week</span>
                </div>
                <h3>{steps[activeStep].label}</h3>
                <p>{steps[activeStep].description}</p>
                <div className="reset-panel__progress" aria-hidden="true">
                  {steps.map((step, index) => <span className={index <= activeStep ? 'is-filled' : ''} key={step.metric} />)}
                </div>
                <div className="reset-panel__nav">
                  <span>Tap a step to explore</span>
                  <div>
                    <button type="button" aria-label="Previous step" onClick={() => setActiveStep((activeStep + steps.length - 1) % steps.length)}><ArrowDownRight size={15} /></button>
                    <button type="button" aria-label="Next step" onClick={() => setActiveStep((activeStep + 1) % steps.length)}><ArrowUpRight size={15} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--audience" aria-labelledby="audience-title">
          <div className="shell-width audience-grid">
            <div className="audience-stamp" aria-hidden="true">
              <div className="audience-stamp__ring audience-stamp__ring--one" />
              <div className="audience-stamp__ring audience-stamp__ring--two" />
              <span>money<br /><strong>for real life</strong></span>
              <ArrowUpRight size={26} strokeWidth={1.5} />
            </div>
            <div className="audience-copy">
              <p className="eyebrow eyebrow--ink">Built for the in-between</p>
              <h2 id="audience-title">You don’t need a perfect plan.<br /><span>You need a truer one.</span></h2>
              <p>For the first good salary. The new city. The family chat. The side project. The version of you that is still figuring out what “enough” means.</p>
              <div className="audience-list">
                <div><span><Check size={14} /></span> See every decision in context</div>
                <div><span><Check size={14} /></span> Make progress feel less abstract</div>
                <div><span><Check size={14} /></span> Build a future you can actually picture</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--faq" aria-labelledby="faq-title">
          <div className="shell-width faq-grid">
            <div>
              <p className="eyebrow eyebrow--ink">Still thinking it through?</p>
              <h2 id="faq-title">Clear answers<br /><span>before you start.</span></h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className={`faq-item ${activeFaq === index ? 'faq-item--open' : ''}`} key={faq.question}>
                  <button type="button" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}>
                    <span>{faq.question}</span>
                    <ChevronDown size={18} strokeWidth={1.7} />
                  </button>
                  {activeFaq === index && <p>{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="start-section" id="start" aria-labelledby="start-title">
          <div className="start-section__pattern" aria-hidden="true" />
          <div className="shell-width start-content">
            <p className="eyebrow eyebrow--dark">Your next move starts here</p>
            <h2 id="start-title">A clearer relationship<br /><em>with your money.</em></h2>
            <p>Leave your email and we’ll let you know when Fermor is ready for you.</p>
            {submitted ? (
              <div className="success-note" role="status"><Check size={17} /> You’re on the list. We’ll be in touch.</div>
            ) : (
              <form className="signup-form" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="email">Email address</label>
                <input id="email" type="email" required placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                <button className="button button--navy" type="submit">Keep me posted <ArrowUpRight size={16} strokeWidth={2.1} /></button>
              </form>
            )}
            <span className="form-note">No noise. Just a note when it matters.</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell-width site-footer__top">
          <Wordmark inverse />
          <div className="site-footer__links">
            <a href="#method">Method</a>
            <a href="#reset">How it works</a>
            <a href="#start">Get started</a>
          </div>
          <a className="footer-arrow" href="#top" aria-label="Back to top"><ArrowUpRight size={20} /></a>
        </div>
        <div className="shell-width site-footer__bottom">
          <span>© 2026 Fermor. A clearer way forward.</span>
          <span>Made for the curious and the committed.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
