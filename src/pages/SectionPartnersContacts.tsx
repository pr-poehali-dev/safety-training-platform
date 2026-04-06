import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PARTNERS, DOCUMENTS } from "./data";

export function SectionPartners() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="font-montserrat text-4xl font-black text-white mb-2">Партнёры</h2>
          <p style={{ color: "rgba(255,255,255,0.45)" }}>Экосистема доверенных организаций</p>
        </div>
        <button className="px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 w-fit" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
          <Icon name="Handshake" size={16} />
          Стать партнёром
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {["Все", "Госорган", "Образование", "Поставщик", "Медицина", "Аудит"].map((f) => (
          <button key={f} className="px-4 py-2 rounded-xl text-sm transition-all" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {PARTNERS.map((p, i) => (
          <div key={i} className="rounded-2xl p-7 group transition-all duration-300 hover:-translate-y-1 cursor-pointer" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: `${p.color}12`, border: `1px solid ${p.color}28` }}>
                <Icon name={p.icon} size={26} style={{ color: p.color }} />
              </div>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}25` }}>
                {p.type}
              </span>
            </div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-2">{p.name}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>{p.desc}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                <Icon name="Briefcase" size={13} />
                {p.projects} совместных проектов
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(0,255,135,0.08)", border: "1px solid rgba(0,255,135,0.2)" }}>
                <Icon name="ArrowRight" size={14} style={{ color: "#00ff87" }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl p-10 text-center relative overflow-hidden" style={{ background: "rgba(0,255,135,0.04)", border: "1px solid rgba(0,255,135,0.15)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(0,255,135,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(0,255,135,0.1)", border: "1px solid rgba(0,255,135,0.25)" }}>
            <Icon name="Handshake" size={28} style={{ color: "#00ff87" }} />
          </div>
          <h3 className="font-montserrat font-black text-2xl text-white mb-3">Станьте частью экосистемы</h3>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Объединяем организации в сфере охраны труда для создания безопасной производственной среды в России
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl font-bold text-sm" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
              Оставить заявку
            </button>
            <button className="px-8 py-3 rounded-xl font-bold text-sm" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionContacts() {
  const [activeDocFilter, setActiveDocFilter] = useState("Все");
  const docTypes = ["Все", "ГОСТ", "Приказ", "Закон", "Методика", "СП"];
  const filteredDocs = activeDocFilter === "Все" ? DOCUMENTS : DOCUMENTS.filter((d) => d.type === activeDocFilter);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="font-montserrat text-4xl font-black text-white mb-2">Контакты</h2>
      <p className="mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>Свяжитесь с нами или найдите нужный документ</p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h3 className="font-montserrat font-bold text-xl text-white mb-6 flex items-center gap-2">
            <Icon name="MessageSquare" size={19} style={{ color: "#00ff87" }} />
            Написать нам
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[{ l: "Имя", p: "Иван Иванов" }, { l: "Организация", p: "ООО «Компания»" }].map((f, i) => (
                <div key={i}>
                  <label className="text-xs mb-2 block" style={{ color: "rgba(255,255,255,0.35)" }}>{f.l}</label>
                  <input placeholder={f.p} className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }} />
                </div>
              ))}
            </div>
            <div>
              <label className="text-xs mb-2 block" style={{ color: "rgba(255,255,255,0.35)" }}>Email</label>
              <input placeholder="email@company.ru" className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }} />
            </div>
            <div>
              <label className="text-xs mb-2 block" style={{ color: "rgba(255,255,255,0.35)" }}>Тема обращения</label>
              <select className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={{ background: "rgba(10,14,20,0.9)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }}>
                <option>Выберите тему</option>
                <option>Обучение и курсы</option>
                <option>Нормативные документы</option>
                <option>Аудит ОТ</option>
                <option>Другое</option>
              </select>
            </div>
            <div>
              <label className="text-xs mb-2 block" style={{ color: "rgba(255,255,255,0.35)" }}>Сообщение</label>
              <textarea rows={4} placeholder="Опишите ваш вопрос..." className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }} />
            </div>
            <button className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
              <Icon name="Send" size={17} />
              Отправить заявку
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h3 className="font-montserrat font-bold text-xl text-white mb-6">Контактная информация</h3>
            <div className="space-y-5">
              {[
                { icon: "Phone", title: "+7 (800) 555-35-35", sub: "Бесплатно по России", color: "#00ff87" },
                { icon: "Mail", title: "info@safework.ru", sub: "Ответим в течение часа", color: "#00d4ff" },
                { icon: "MapPin", title: "Москва, ул. Новая 42, оф. 801", sub: "Пн–Пт 9:00–18:00", color: "#ff6b35" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${c.color}12`, border: `1px solid ${c.color}28` }}>
                    <Icon name={c.icon} size={19} style={{ color: c.color }} />
                  </div>
                  <div>
                    <div className="font-medium text-white">{c.title}</div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,255,135,0.2)", boxShadow: "0 0 20px rgba(0,255,135,0.04)" }}>
            <div className="flex items-center gap-3 mb-5">
              <Icon name="Archive" size={20} style={{ color: "#00ff87" }} />
              <h3 className="font-montserrat font-bold text-lg text-white">Архив НД</h3>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(0,255,135,0.1)", color: "#00ff87", border: "1px solid rgba(0,255,135,0.25)" }}>156 документов</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {docTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveDocFilter(type)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                  style={activeDocFilter === type
                    ? { background: "rgba(0,255,135,0.15)", color: "#00ff87", border: "1px solid rgba(0,255,135,0.35)" }
                    : { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {filteredDocs.map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all group" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: `${doc.color}18`, color: doc.color }}>{doc.type}</span>
                    <div>
                      <div className="text-sm font-medium text-white">{doc.title}</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{doc.desc}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{doc.year}</span>
                    <Icon name="Download" size={13} style={{ color: "rgba(255,255,255,0.3)" }} className="group-hover:text-green-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
