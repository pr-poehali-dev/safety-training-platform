import Icon from "@/components/ui/icon";

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
