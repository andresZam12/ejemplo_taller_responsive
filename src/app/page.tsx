"use client";

import { Bell, ChevronLeft, ChevronRight, Home, ListChecks, LogOut, Play, Search, Settings, Users, CalendarClock, Plus, UserCircle2 } from "lucide-react";
import { useMemo } from "react";

// ———————————————————————————————————————
// Datos de muestra
// ———————————————————————————————————————
const parties = [
  {
    id: 1,
    title: "Cadaver",
    subtitle: "Horror marathon!",
    avatars: ["/api/placeholder/24/24","/api/placeholder/24/24","/api/placeholder/24/24","/api/placeholder/24/24"],
    icon: "🍿",
  },
  {
    id: 2,
    title: "Bladerunner 2049",
    subtitle: "Sci-fi binge",
    avatars: ["/api/placeholder/24/24","/api/placeholder/24/24"],
    icon: "🟠",
  },
  {
    id: 3,
    title: "Monsters Inc.",
    subtitle: "Don't make me grow up",
    avatars: ["/api/placeholder/24/24"],
    icon: "🟦",
  },
  {
    id: 4,
    title: "Friends",
    subtitle: "We were on a break!",
    avatars: ["/api/placeholder/24/24","/api/placeholder/24/24","/api/placeholder/24/24"],
    icon: "🟩",
  },
];

const continueWatching = [
  { id: 1, title: "Haunting of Hill House", img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, title: "Ratched", img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, title: "El Camino", img: "https://images.unsplash.com/photo-1558981001-8c615a5e6a5e?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, title: "Stranger Things", img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop" },
];

// ———————————————————————————————————————
// Componentes pequeños
// ———————————————————————————————————————
function MenuItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className={`group flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-white/5 transition ${
        active ? "bg-white/8 text-white" : "text-white/70"
      }`}
    >
      <span className="opacity-90">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function AvatarRow({ srcs }: { srcs: string[] }) {
  return (
    <div className="flex -space-x-2">
      {srcs.map((s, i) => (
        <img
          key={i}
          src={s}
          alt="avatar"
          className="h-7 w-7 rounded-full ring-2 ring-panelSoft object-cover"
        />
      ))}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}

// ———————————————————————————————————————
// Sidebar
// ———————————————————————————————————————
function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col justify-between w-[210px] px-3 py-6 border-r border-white/10 bg-panel">
      <div className="space-y-6">
        <div className="px-3">
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-primary">Net</span>flix.
          </span>
        </div>

        <nav className="space-y-1">
          <div className="px-3 text-[11px] uppercase text-white/40 tracking-wide">Menu</div>
          <MenuItem icon={<Home size={18} />} label="Browse" active />
          <MenuItem icon={<ListChecks size={18} />} label="Watchlist" />
          <MenuItem icon={<CalendarClock size={18} />} label="Coming soon" />
        </nav>

        <nav className="space-y-1">
          <div className="px-3 text-[11px] uppercase text-white/40 tracking-wide">Social</div>
          <MenuItem icon={<Users size={18} />} label="Friends" />
          <MenuItem icon={<Users size={18} />} label="Parties" />
        </nav>

        <nav className="space-y-1">
          <div className="px-3 text-[11px] uppercase text-white/40 tracking-wide">General</div>
          <MenuItem icon={<Settings size={18} />} label="Settings" />
          <MenuItem icon={<LogOut size={18} />} label="Log out" />
        </nav>
      </div>

      {/* Widget "Popcorn Addict" */}
      <div className="glass rounded-2xl px-4 py-4 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-2xl">🍿</div>
          <div>
            <div className="text-sm font-semibold">Popcorn Addict</div>
            <div className="text-xs text-white/60">42h watching time</div>
          </div>
        </div>
        <button className="mt-3 w-full rounded-xl bg-white/10 hover:bg-white/15 text-sm py-2 transition">View challenges</button>
      </div>
    </aside>
  );
}

// ———————————————————————————————————————
// Rail derecho (avatares + botón rojo)
// ———————————————————————————————————————
function RightRail() {
  const people = useMemo(() => new Array(10).fill(0).map((_, i) => `https://i.pravatar.cc/100?img=${i+5}`), []);
  return (
    <div className="hidden xl:flex flex-col items-center gap-4 w-[70px] py-6">
      <button className="h-10 w-10 rounded-full bg-primary grid place-items-center shadow-soft">
        <Plus />
      </button>
      {people.map((p, i) => (
        <img key={i} src={p} alt="p" className="h-10 w-10 rounded-full object-cover ring-2 ring-panelSoft" />
      ))}
    </div>
  );
}

// ———————————————————————————————————————
// Topbar
// ———————————————————————————————————————
function Topbar() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-white/50">
        <button className="p-2 rounded-lg hover:bg-white/10"><ChevronLeft /></button>
        <button className="p-2 rounded-lg hover:bg-white/10"><ChevronRight /></button>
      </div>

      <div className="relative flex-1 max-w-xl">
        <input
          placeholder="Search..."
          className="w-full glass rounded-full pl-10 pr-4 py-2 text-sm outline-none placeholder:text-white/50"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-white/10"><Bell /></button>
        <div className="h-8 w-[1px] bg-white/10" />
        <div className="flex items-center gap-2">
          <img src="imgd.jpeg" alt="me" className="h-8 w-8 rounded-full object-cover" />
          <div className="text-sm leading-tight">
            <div className="font-semibold">Ramona F.</div>
            <div className="text-white/60 text-xs">Level 12</div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ———————————————————————————————————————
// Hero principal (The Witcher)
// ———————————————————————————————————————
function Hero() {
  return (
    <section className="mt-6">
      <div className="relative rounded-2xl overflow-hidden shadow-soft">
        <img
          src="imgd.jpeg"
          alt="The Witcher"
          className="w-full h-[260px] md:h-[320px] object-cover"
        />
        {/* capa oscura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
        {/* contenido */}
        <div className="absolute left-6 right-6 bottom-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Pill>1080p / episode</Pill>
              <Pill>51 friends are watching</Pill>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Witcher</h1>
            <div className="mt-1 flex items-center gap-3 text-sm text-white/80">
              <span>Sci-Fi, Action</span>
              <span>•</span>
              <span>2 seasons</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-[#c40811] px-4 py-2 font-semibold shadow-soft transition">
                <Play size={18}/> Watch
              </button>
              <button className="rounded-xl bg-white/10 hover:bg-white/15 px-4 py-2 font-semibold transition">
                +
              </button>
            </div>
          </div>
          {/* mini cards flotantes a la derecha del hero (simulan los dos rectángulos) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="glass rounded-xl2 px-4 py-3 text-sm">S1:E7</div>
            <div className="glass rounded-xl2 px-4 py-3 text-sm">★ 8.7</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ———————————————————————————————————————
// Carrusel Parties
// ———————————————————————————————————————
function Parties() {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Parties</h2>
        <div className="w-40">
          <input type="range" className="w-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {parties.map(p => (
          <div key={p.id} className="glass rounded-2xl p-4 hover:bg-white/[.12] transition">
            <div className="flex items-center justify-between">
              <AvatarRow srcs={p.avatars} />
              <div className="text-xl">{p.icon}</div>
            </div>
            <div className="mt-4">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-white/60">{p.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ———————————————————————————————————————
// Carrusel Continue Watching
// ———————————————————————————————————————
function ContinueWatching() {
  return (
    <section className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Continue watching</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {continueWatching.map(item => (
          <div key={item.id} className="rounded-2xl overflow-hidden bg-card shadow-soft">
            <div className="relative">
              <img src={item.img} alt={item.title} className="h-36 w-full object-cover" />
              <div className="absolute left-2 top-2 badge">1080p</div>
            </div>
            <div className="p-3">
              <div className="text-sm">{item.title}</div>
              <div className="mt-2 h-1.5 rounded bg-white/10">
                <div className="h-full w-1/2 bg-accent rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ———————————————————————————————————————
// Página
// ———————————————————————————————————————
export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto max-w-[1280px] grid grid-cols-[210px_1fr_70px] gap-0">
        <Sidebar />
        <main className="px-6 py-6 border-r border-white/10 bg-panelSoft">
          <Topbar />
          <Hero />
          <Parties />
          <ContinueWatching />
        </main>
        <RightRail />
      </div>

      {/* Esquinas redondeadas en el contenedor principal (similar al mock) */}
      <div className="pointer-events-none fixed inset-4 rounded-[28px] ring-1 ring-white/10"></div>
    </div>
  );
}