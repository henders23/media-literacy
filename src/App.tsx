import { HashRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { IndexScreen } from './screens/IndexScreen';
import { StartScreen } from './screens/StartScreen';
import { CardScreen } from './screens/CardScreen';
import { ReviewScreen } from './screens/ReviewScreen';
import { TeacherPanel } from './teacher/TeacherPanel';
import { MusicToggle } from './components/Music';
import { useUi } from './store/ui';

const GRAIN =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.82%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22saturate%22 values=%220%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')";

function Header() {
  const { teacherOpen, toggleTeacher } = useUi();
  return (
    <div className="relative z-[2] flex items-center justify-between gap-6 border-b border-line px-8 pb-3 pt-3.5">
      <Link
        to="/"
        className="flex items-center gap-2.5 border-b-0 text-[13px] uppercase tracking-[.42em] text-ink hover:text-ink"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px] -translate-y-px">
          <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M5.9 8.2a4.7 4.7 0 0 1 2.6-2.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            opacity=".45"
          />
          <line x1="15.1" y1="15.1" x2="21" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        loupe
      </Link>
      <nav className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[.16em]">
        <Link to="/" className="border-b-0 text-muted hover:text-blue">
          index
        </Link>
        <Link to="/review" className="border-b-0 text-muted hover:text-blue">
          confidence review
        </Link>
        <button
          type="button"
          onClick={toggleTeacher}
          className="cursor-pointer uppercase text-muted hover:text-blue"
        >
          {teacherOpen ? 'close teacher mode' : 'teacher mode'}
        </button>
        <MusicToggle />
      </nav>
    </div>
  );
}

/** `#/teacher` opens the panel over the index (BUILD.md phase 7). */
function TeacherRoute() {
  const navigate = useNavigate();
  const { teacherOpen, toggleTeacher } = useUi();
  useEffect(() => {
    if (!teacherOpen) toggleTeacher();
    navigate('/', { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <div className="relative min-h-screen">
        <div
          className="pointer-events-none fixed inset-0 z-[60] opacity-40 mix-blend-multiply"
          style={{ backgroundImage: GRAIN }}
        />
        <div
          className="pointer-events-none fixed inset-0 z-[59] opacity-50 mix-blend-multiply"
          style={{
            backgroundImage: 'radial-gradient(115% 90% at 50% 45%, transparent 55%, rgba(120,110,88,.28))',
          }}
        />
        <Header />
        <Routes>
          <Route path="/" element={<IndexScreen />} />
          <Route path="/start" element={<StartScreen />} />
          <Route path="/card/:id" element={<CardScreen />} />
          <Route path="/review" element={<ReviewScreen />} />
          <Route path="/teacher" element={<TeacherRoute />} />
          <Route path="*" element={<IndexScreen />} />
        </Routes>
        <TeacherPanel />
      </div>
    </HashRouter>
  );
}
