import { useState } from "react";
import Icon from "@/components/ui/icon";
import { STATS, USERS, APPEALS, PARTNERS, DOCUMENTS } from "./data";

export function SectionCabinet() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="font-montserrat text-4xl font-black text-white mb-2">Личный кабинет</h2>
      <p className="mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>Инженер по охране труда</p>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-black" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
            СИ
          </div>
          <h3 className="font-montserrat font-black text-xl text-white mb-1">Сергей Иванов</h3>
          <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>Инженер по охране труда</p>
          <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "rgba(0,255,135,0.1)", color: "#00ff87", border: "1px solid rgba(0,255,135,0.25)" }}>Производственный отдел</span>

          <div className="mt-6 space-y-3 text-left">
            {[
              { icon: "Mail", text: "ivanov@company.ru" },
              { icon: "Phone", text: "+7 (495) 123-45-67" },
              { icon: "MapPin", text: "Москва, ул. Промышленная 5" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Icon name={item.icon} size={15} style={{ color: "#00ff87" }} />
                {item.text}
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 rounded-xl font-bold text-sm" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
            Редактировать профиль
          </button>
        </div>

        <div className="lg:col-span-2 space-y-5">
          <div className="grid grid-cols-3 gap-4">
            {[
              { val: "12", label: "Курсов пройдено", color: "#00ff87" },
              { val: "8", label: "Сертификатов", color: "#00d4ff" },
              { val: "95%", label: "Рейтинг знаний", color: "#ff6b35" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl p-5 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-2xl font-montserrat font-black mb-1" style={{ color: s.color }}>{s.val}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h4 className="font-montserrat font-bold text-white mb-5 flex items-center gap-2">
              <Icon name="Award" size={17} style={{ color: "#00ff87" }} />
              Актуальные сертификаты
            </h4>
            <div className="space-y-3">
              {[
                { name: "Вводный инструктаж", date: "12.12.2025", status: "active" },
                { name: "Работа на высоте", date: "07.2025", status: "active" },
                { name: "Пожарная безопасность", date: "03.2025", status: "warning" },
                { name: "Первая помощь", date: "истёк", status: "expired" },
              ].map((cert, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-center gap-3">
                    <Icon name={cert.status === "active" ? "CheckCircle" : cert.status === "warning" ? "AlertTriangle" : "XCircle"} size={17} style={{ color: cert.status === "active" ? "#00ff87" : cert.status === "warning" ? "#ff6b35" : "#ef4444" }} />
                    <span className="text-sm text-white">{cert.name}</span>
                  </div>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>до {cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h4 className="font-montserrat font-bold text-white mb-5 flex items-center gap-2">
              <Icon name="ClipboardList" size={17} style={{ color: "#00ff87" }} />
              Текущие задачи
            </h4>
            <div className="space-y-3">
              {[
                { task: "Провести инструктаж на рабочем месте", priority: "high", due: "сегодня" },
                { task: "Обновить план эвакуации цех №3", priority: "medium", due: "пятница" },
                { task: "Проверить СИЗ на складе", priority: "low", due: "след. неделя" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.priority === "high" ? "#ef4444" : t.priority === "medium" ? "#ff6b35" : "#00ff87" }} />
                  <span className="text-sm text-white flex-1">{t.task}</span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{t.due}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionAnalytics() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="font-montserrat text-4xl font-black text-white mb-2">Отчёты и аналитика</h2>
          <p style={{ color: "rgba(255,255,255,0.45)" }}>Данные за Q1 2025</p>
        </div>
        <button className="px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 w-fit" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
          <Icon name="Download" size={16} />
          Экспорт отчёта
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STATS.map((stat, i) => (
          <div key={i} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center justify-between mb-3">
              <Icon name={stat.icon} size={19} style={{ color: stat.color }} />
              <span className="text-xs flex items-center gap-1" style={{ color: "#00ff87" }}><Icon name="TrendingUp" size={11} />+5%</span>
            </div>
            <div className="text-2xl font-montserrat font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h4 className="font-montserrat font-bold text-white mb-6 flex items-center gap-2">
            <Icon name="BarChart3" size={17} style={{ color: "#00ff87" }} />
            Обучение по месяцам
          </h4>
          <div className="flex items-end gap-2 h-48">
            {[65, 80, 72, 90, 85, 95, 78, 88, 100, 82, 92, 75].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full rounded-t-lg" style={{ height: `${val}%`, background: `linear-gradient(180deg, #00ff87, #00d4ff60)`, opacity: 0.75 }} />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px" }}>
                  {["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h4 className="font-montserrat font-bold text-white mb-6 flex items-center gap-2">
            <Icon name="PieChart" size={17} style={{ color: "#00ff87" }} />
            Статус аттестаций
          </h4>
          <div className="space-y-5">
            {[
              { label: "Актуальные сертификаты", val: 78, color: "#00ff87" },
              { label: "Истекают в этом месяце", val: 15, color: "#ff6b35" },
              { label: "Просроченные", val: 7, color: "#ef4444" },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>{item.label}</span>
                  <span className="font-bold" style={{ color: item.color }}>{item.val}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <div className="h-full rounded-full" style={{ width: `${item.val}%`, background: item.color, boxShadow: `0 0 8px ${item.color}50` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <h5 className="text-sm font-semibold text-white mb-4">Инциденты по кварталам</h5>
            <div className="grid grid-cols-4 gap-3">
              {[{ q: "Q1", v: 3 }, { q: "Q2", v: 1 }, { q: "Q3", v: 2 }, { q: "Q4", v: 0 }].map((q, i) => (
                <div key={i} className="text-center rounded-xl p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-xl font-montserrat font-black text-white">{q.v}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{q.q}</div>
                  <div className="text-xs mt-1" style={{ color: q.v === 0 ? "#00ff87" : "#ff6b35" }}>{q.v === 0 ? "✓" : "↓"}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <h4 className="font-montserrat font-bold text-white mb-6 flex items-center gap-2">
          <Icon name="Building2" size={17} style={{ color: "#00ff87" }} />
          Соответствие по подразделениям
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { dept: "Производство", score: 97, staff: 120 },
            { dept: "Склад", score: 84, staff: 45 },
            { dept: "Офис", score: 100, staff: 65 },
            { dept: "Лаборатория", score: 92, staff: 30 },
          ].map((d, i) => (
            <div key={i} className="p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="font-semibold text-white text-sm mb-1">{d.dept}</div>
              <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>{d.staff} сотрудников</div>
              <div className="text-3xl font-montserrat font-black" style={{ color: d.score >= 95 ? "#00ff87" : d.score >= 85 ? "#ff6b35" : "#ef4444" }}>
                {d.score}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
