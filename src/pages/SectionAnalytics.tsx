import Icon from "@/components/ui/icon";
import { STATS } from "./data";

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
