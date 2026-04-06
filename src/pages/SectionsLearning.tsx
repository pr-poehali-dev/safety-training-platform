import Icon from "@/components/ui/icon";
import { STATS, COURSES, TEACHERS, SCHEDULE } from "./data";

interface SectionProps {
  setActiveSection: (id: string) => void;
}

export function SectionHome({ setActiveSection }: SectionProps) {
  return (
    <div>
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(0,255,135,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-32 right-0 w-[500px] h-[500px] rounded-full opacity-10 animate-float" style={{ background: "radial-gradient(circle, #00ff87, transparent 70%)" }} />
        <div className="absolute bottom-20 left-0 w-[350px] h-[350px] rounded-full opacity-8" style={{ background: "radial-gradient(circle, #00d4ff, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: "rgba(0,255,135,0.08)", border: "1px solid rgba(0,255,135,0.25)", color: "#00ff87" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Платформа управления охраной труда
            </div>
            <h1 className="font-montserrat text-5xl lg:text-7xl font-black leading-[0.95] text-white">
              Безопасность<br />
              <span style={{ color: "#00ff87", textShadow: "0 0 40px rgba(0,255,135,0.4)" }}>нового</span><br />
              поколения
            </h1>
            <p className="text-lg leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Цифровая платформа для инженеров по охране труда: обучение, аналитика, нормативные документы в одном месте.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setActiveSection("courses")} className="px-8 py-4 rounded-2xl font-bold text-base flex items-center gap-2 transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
                <Icon name="Rocket" size={18} />
                Начать обучение
              </button>
              <button onClick={() => setActiveSection("analytics")} className="px-8 py-4 rounded-2xl font-bold text-base flex items-center gap-2 transition-all" style={{ background: "rgba(0,255,135,0.08)", color: "#00ff87", border: "1px solid rgba(0,255,135,0.25)" }}>
                <Icon name="BarChart3" size={18} />
                Аналитика
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <div key={i} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}35` }}>
                  <Icon name={stat.icon} size={22} style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-montserrat font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="h-px mb-16" style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,135,0.3), transparent)" }} />
        <div className="text-center mb-14">
          <h2 className="font-montserrat text-4xl font-black text-white mb-3">Всё для охраны труда</h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.45)" }}>Единая экосистема для управления безопасностью предприятия</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: "GraduationCap", title: "Онлайн-обучение", desc: "Курсы, тесты, сертификаты. Автоматическое уведомление о переаттестации", color: "#00ff87" },
            { icon: "FileText", title: "Архив НД", desc: "Актуальные нормативные документы, ГОСТы, методические материалы", color: "#00d4ff" },
            { icon: "BarChart3", title: "Аналитика", desc: "Отчёты, дашборды, соответствие требованиям в реальном времени", color: "#ff6b35" },
            { icon: "Users", title: "Управление", desc: "Личные дела сотрудников, история обучения, статусы сертификатов", color: "#a78bfa" },
            { icon: "Bell", title: "Уведомления", desc: "Автоматические напоминания о переаттестации и нарушениях", color: "#f472b6" },
            { icon: "Shield", title: "Соответствие", desc: "Контроль выполнения требований законодательства в области ОТ", color: "#fbbf24" },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl p-7 group transition-all duration-300 hover:-translate-y-1 cursor-pointer" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ background: `${f.color}12`, border: `1px solid ${f.color}28` }}>
                <Icon name={f.icon} size={26} style={{ color: f.color }} />
              </div>
              <h3 className="font-montserrat font-bold text-lg text-white mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function SectionCourses() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="font-montserrat text-4xl font-black text-white mb-2">Курсы обучения</h2>
          <p style={{ color: "rgba(255,255,255,0.45)" }}>Актуальные программы по охране труда</p>
        </div>
        <button className="px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 w-fit" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
          <Icon name="Plus" size={16} />
          Добавить курс
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex-1 min-w-64 flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Icon name="Search" size={16} style={{ color: "rgba(255,255,255,0.35)" }} />
          <input placeholder="Поиск по курсам..." className="bg-transparent flex-1 text-sm outline-none" style={{ color: "rgba(255,255,255,0.8)" }} />
        </div>
        {["Все", "Обязательный", "Базовый", "Специализация"].map((f) => (
          <button key={f} className="px-4 py-3 rounded-xl text-sm transition-all" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {COURSES.map((course, i) => (
          <div key={i} className="rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${course.color}18`, border: `1px solid ${course.color}35` }}>
                <Icon name={course.icon} size={22} style={{ color: course.color }} />
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: `${course.color}12`, color: course.color, border: `1px solid ${course.color}28` }}>
                {course.category}
              </span>
            </div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-2">{course.title}</h3>
            <div className="flex items-center gap-4 text-sm mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span className="flex items-center gap-1"><Icon name="Clock" size={13} />{course.duration}</span>
              <span className="flex items-center gap-1"><Icon name="Users" size={13} />{course.students.toLocaleString()}</span>
            </div>
            <div className="mb-5">
              <div className="flex justify-between text-xs mb-2">
                <span style={{ color: "rgba(255,255,255,0.35)" }}>Прогресс</span>
                <span className="font-semibold" style={{ color: course.color }}>{course.progress}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: `${course.progress}%`, background: `linear-gradient(90deg, ${course.color}, ${course.color}80)` }} />
              </div>
            </div>
            <button className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all" style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>
              Продолжить обучение
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionTrainingCenter() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="font-montserrat text-4xl font-black text-white mb-2">Учебный центр</h2>
          <p style={{ color: "rgba(255,255,255,0.45)" }}>Расписание, преподаватели, форматы обучения</p>
        </div>
        <button className="px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 w-fit" style={{ background: "linear-gradient(135deg, #00ff87, #00d4ff)", color: "#0a0f14" }}>
          <Icon name="CalendarPlus" size={16} />
          Записаться
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { icon: "Monitor", label: "Онлайн", desc: "Дистанционно в любое время", color: "#00ff87" },
          { icon: "Users", label: "Очно", desc: "В учебном классе центра", color: "#00d4ff" },
          { icon: "Video", label: "Вебинар", desc: "Прямой эфир с преподавателем", color: "#ff6b35" },
          { icon: "BookMarked", label: "Самостоятельно", desc: "Материалы для изучения", color: "#a78bfa" },
        ].map((f, i) => (
          <div key={i} className="rounded-2xl p-5 text-center transition-all hover:-translate-y-1 cursor-pointer" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${f.color}12`, border: `1px solid ${f.color}28` }}>
              <Icon name={f.icon} size={22} style={{ color: f.color }} />
            </div>
            <div className="font-montserrat font-bold text-white text-sm mb-1">{f.label}</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{f.desc}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h3 className="font-montserrat font-bold text-lg text-white mb-6 flex items-center gap-2">
            <Icon name="Calendar" size={18} style={{ color: "#00ff87" }} />
            Ближайшие занятия
          </h3>
          <div className="space-y-3">
            {SCHEDULE.map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl transition-all hover:bg-white/5 cursor-pointer" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-center flex-shrink-0 w-12">
                  <div className="text-xs font-bold" style={{ color: s.color }}>{s.date}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{s.time}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">{s.title}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded" style={{ background: `${s.color}12`, color: s.color }}>{s.format}</span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Мест: {s.seats}/{s.total}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(0,255,135,0.08)", border: "1px solid rgba(0,255,135,0.2)" }}>
                    <Icon name="ArrowRight" size={14} style={{ color: "#00ff87" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h3 className="font-montserrat font-bold text-lg text-white mb-6 flex items-center gap-2">
            <Icon name="UserCheck" size={18} style={{ color: "#00ff87" }} />
            Преподаватели
          </h3>
          <div className="space-y-4">
            {TEACHERS.map((t, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`, color: "#0a0f14" }}>
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs truncate" style={{ color: "rgba(255,255,255,0.4)" }}>{t.title}</div>
                </div>
                <div className="text-right flex-shrink-0 space-y-1">
                  <div className="text-xs font-bold" style={{ color: t.color }}>★ {t.rating}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{t.courses} курсов</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { val: "24", label: "Программы обучения", color: "#00ff87" },
          { val: "4 800+", label: "Выпускников", color: "#00d4ff" },
          { val: "98%", label: "Сдают с первого раза", color: "#ff6b35" },
          { val: "15 лет", label: "Работаем на рынке", color: "#a78bfa" },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl p-5 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-3xl font-montserrat font-black mb-1" style={{ color: s.color }}>{s.val}</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
