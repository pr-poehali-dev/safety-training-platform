import Icon from "@/components/ui/icon";
import { USERS, APPEALS } from "./data";

export function SectionUsers() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="font-montserrat text-4xl font-black text-white mb-2">Управление пользователями</h2>
          <p style={{ color: "rgba(255,255,255,0.45)" }}>260 сотрудников в системе</p>
        </div>
        <button className="px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 w-fit" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
          <Icon name="UserPlus" size={16} />
          Добавить сотрудника
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex-1 min-w-64 flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Icon name="Search" size={15} style={{ color: "rgba(255,255,255,0.3)" }} />
          <input placeholder="Поиск по имени или должности..." className="bg-transparent flex-1 text-sm outline-none" style={{ color: "rgba(255,255,255,0.8)" }} />
        </div>
        {["Все", "Активные", "Просроченные", "Неактивные"].map((f) => (
          <button key={f} className="px-4 py-3 rounded-xl text-sm transition-all" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}>
            {f}
          </button>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden mb-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["Сотрудник", "Подразделение", "Статус", "Курсы", "Сертификат", ""].map((h, i) => (
                  <th key={i} className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.3)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {USERS.map((user, i) => (
                <tr key={i} className="transition-colors" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
                        {user.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{user.name}</div>
                        <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{user.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{user.dept}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{
                      background: user.status === "active" ? "rgba(0,255,135,0.1)" : user.status === "warning" ? "rgba(255,107,53,0.1)" : "rgba(239,68,68,0.1)",
                      color: user.status === "active" ? "#00ff87" : user.status === "warning" ? "#ff6b35" : "#ef4444",
                    }}>
                      {user.status === "active" ? "Активен" : user.status === "warning" ? "Требует внимания" : "Неактивен"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{user.courses} курсов</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium" style={{ color: user.cert === "истёк" ? "#ef4444" : "#00ff87" }}>
                      {user.cert === "истёк" ? "истёк" : `до ${user.cert}`}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button style={{ color: "rgba(255,255,255,0.3)" }}><Icon name="MoreHorizontal" size={17} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {[
          { role: "Инженеры ОТ", count: 8, icon: "HardHat", color: "#00ff87" },
          { role: "Специалисты", count: 45, icon: "Briefcase", color: "#00d4ff" },
          { role: "Рабочие", count: 207, icon: "Wrench", color: "#ff6b35" },
        ].map((r, i) => (
          <div key={i} className="rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${r.color}12`, border: `1px solid ${r.color}28` }}>
              <Icon name={r.icon} size={24} style={{ color: r.color }} />
            </div>
            <div>
              <div className="text-2xl font-montserrat font-black text-white">{r.count}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{r.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionAppeals() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="font-montserrat text-4xl font-black text-white mb-2">Обращения</h2>
          <p style={{ color: "rgba(255,255,255,0.45)" }}>Заявки, запросы и обратная связь</p>
        </div>
        <button className="px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 w-fit" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
          <Icon name="Plus" size={16} />
          Новое обращение
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Новые", count: 1, color: "#00ff87", icon: "Inbox" },
          { label: "В работе", count: 2, color: "#ff6b35", icon: "RefreshCw" },
          { label: "Закрытые", count: 2, color: "#a78bfa", icon: "CheckCircle" },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}12`, border: `1px solid ${s.color}28` }}>
              <Icon name={s.icon} size={20} style={{ color: s.color }} />
            </div>
            <div>
              <div className="text-2xl font-montserrat font-black" style={{ color: s.color }}>{s.count}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mb-6">
        <div className="flex-1 flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Icon name="Search" size={15} style={{ color: "rgba(255,255,255,0.3)" }} />
          <input placeholder="Поиск по обращениям..." className="bg-transparent flex-1 text-sm outline-none" style={{ color: "rgba(255,255,255,0.8)" }} />
        </div>
        {["Все", "Новые", "В работе", "Закрытые"].map((f) => (
          <button key={f} className="px-4 py-3 rounded-xl text-sm transition-all hidden sm:block" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}>
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3 mb-8">
        {APPEALS.map((a, i) => {
          const statusMap: Record<string, { label: string; color: string }> = {
            new: { label: "Новое", color: "#00ff87" },
            inwork: { label: "В работе", color: "#ff6b35" },
            done: { label: "Закрыто", color: "#a78bfa" },
          };
          const priorityMap: Record<string, { label: string; color: string }> = {
            high: { label: "Высокий", color: "#ef4444" },
            medium: { label: "Средний", color: "#ff6b35" },
            low: { label: "Низкий", color: "#00ff87" },
          };
          const st = statusMap[a.status];
          const pr = priorityMap[a.priority];
          return (
            <div key={i} className="rounded-2xl p-5 transition-all hover:bg-white/5 cursor-pointer" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${st.color}12`, border: `1px solid ${st.color}28` }}>
                    <Icon name="FileText" size={18} style={{ color: st.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>{a.id}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${pr.color}15`, color: pr.color }}>{pr.label}</span>
                    </div>
                    <div className="font-semibold text-white text-sm mb-1 truncate">{a.topic}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{a.author} · {a.dept} · {a.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: `${st.color}12`, color: st.color, border: `1px solid ${st.color}28` }}>
                    {st.label}
                  </span>
                  <button style={{ color: "rgba(255,255,255,0.3)" }}><Icon name="ChevronRight" size={18} /></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,255,135,0.15)", boxShadow: "0 0 20px rgba(0,255,135,0.03)" }}>
        <h3 className="font-montserrat font-bold text-lg text-white mb-5 flex items-center gap-2">
          <Icon name="PenLine" size={18} style={{ color: "#00ff87" }} />
          Создать обращение
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs mb-2 block" style={{ color: "rgba(255,255,255,0.35)" }}>Тема обращения</label>
            <input placeholder="Кратко опишите вопрос" className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }} />
          </div>
          <div>
            <label className="text-xs mb-2 block" style={{ color: "rgba(255,255,255,0.35)" }}>Приоритет</label>
            <select className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={{ background: "rgba(10,14,20,0.9)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }}>
              <option>Низкий</option>
              <option>Средний</option>
              <option>Высокий</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-xs mb-2 block" style={{ color: "rgba(255,255,255,0.35)" }}>Подробное описание</label>
          <textarea rows={3} placeholder="Опишите ситуацию подробнее..." className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }} />
        </div>
        <button className="px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
          <Icon name="Send" size={16} />
          Отправить обращение
        </button>
      </div>
    </section>
  );
}
