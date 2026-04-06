import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "./data";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Navbar({ activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(10,14,20,0.8)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection("home")}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
              <Icon name="ShieldCheck" size={18} />
            </div>
            <div className="leading-none">
              <div className="font-montserrat font-black text-white text-base">Safe<span style={{ color: "#00ff87" }}>Work</span></div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Охрана труда</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={activeSection === item.id
                  ? { background: "rgba(0,255,135,0.1)", color: "#00ff87", border: "1px solid rgba(0,255,135,0.25)" }
                  : { color: "rgba(255,255,255,0.5)", border: "1px solid transparent" }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
              <Icon name="LogIn" size={15} />
              Войти
            </button>
            <button className="md:hidden" style={{ color: "rgba(255,255,255,0.6)" }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-3 flex flex-col gap-1" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all"
              style={activeSection === item.id ? { background: "rgba(0,255,135,0.1)", color: "#00ff87" } : { color: "rgba(255,255,255,0.5)" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

interface FooterProps {
  setActiveSection: (id: string) => void;
}

export function Footer({ setActiveSection }: FooterProps) {
  return (
    <footer className="mt-20 py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Icon name="ShieldCheck" size={17} style={{ color: "#00ff87" }} />
          <span className="font-montserrat font-bold text-white">SafeWork</span>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>© 2025 Охрана труда нового поколения</span>
        </div>
        <div className="flex gap-6 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          {["home", "courses", "contacts"].map((s, i) => (
            <button key={s} onClick={() => setActiveSection(s)} className="hover:text-white transition-colors">
              {["Главная", "Курсы", "Контакты"][i]}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
