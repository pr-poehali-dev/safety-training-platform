import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "courses", label: "Курсы" },
  { id: "cabinet", label: "Кабинет" },
  { id: "analytics", label: "Аналитика" },
  { id: "users", label: "Пользователи" },
  { id: "contacts", label: "Контакты" },
];

const COURSES = [
  { title: "Вводный инструктаж", category: "Базовый", duration: "2 ч", students: 1240, progress: 100, color: "#00ff87", icon: "BookOpen" },
  { title: "Работа на высоте", category: "Специализация", duration: "8 ч", students: 430, progress: 67, color: "#00d4ff", icon: "Shield" },
  { title: "Пожарная безопасность", category: "Обязательный", duration: "4 ч", students: 890, progress: 45, color: "#ff6b35", icon: "Flame" },
  { title: "Электробезопасность", category: "Специализация", duration: "6 ч", students: 325, progress: 80, color: "#a78bfa", icon: "Zap" },
  { title: "Первая помощь", category: "Обязательный", duration: "3 ч", students: 1100, progress: 55, color: "#f472b6", icon: "Heart" },
  { title: "Химическая безопасность", category: "Специализация", duration: "5 ч", students: 210, progress: 30, color: "#fbbf24", icon: "FlaskConical" },
];

const DOCUMENTS = [
  { title: "ГОСТ 12.0.004-2015", desc: "Организация обучения безопасности труда", type: "ГОСТ", year: "2015", color: "#00ff87" },
  { title: "Приказ №772н", desc: "Примерное положение о СУОТ", type: "Приказ", year: "2021", color: "#00d4ff" },
  { title: "ТК РФ Ст. 212", desc: "Обязанности работодателя по ОТ", type: "Закон", year: "2022", color: "#ff6b35" },
  { title: "Методика СУОТ", desc: "Идентификация опасностей на производстве", type: "Методика", year: "2023", color: "#a78bfa" },
  { title: "СП 12.13130.2009", desc: "Категории помещений по взрывопожарной опасности", type: "СП", year: "2009", color: "#f472b6" },
  { title: "ГОСТ Р ИСО 45001", desc: "Системы менеджмента безопасности труда", type: "ГОСТ", year: "2019", color: "#fbbf24" },
];

const STATS = [
  { value: "2 847", label: "Сотрудников обучено", icon: "Users", color: "#00ff87" },
  { value: "98.4%", label: "Соответствие нормам", icon: "CheckCircle", color: "#00d4ff" },
  { value: "156", label: "Активных курсов", icon: "BookOpen", color: "#ff6b35" },
  { value: "0", label: "Нарушений за квартал", icon: "ShieldCheck", color: "#a78bfa" },
];

const USERS = [
  { name: "Сергей Иванов", role: "Инженер ОТ", dept: "Производство", status: "active", courses: 12, cert: "12.2025" },
  { name: "Мария Петрова", role: "Специалист", dept: "Офис", status: "active", courses: 8, cert: "03.2025" },
  { name: "Дмитрий Козлов", role: "Рабочий", dept: "Склад", status: "warning", courses: 5, cert: "истёк" },
  { name: "Анна Смирнова", role: "Технолог", dept: "Лаборатория", status: "active", courses: 15, cert: "07.2025" },
  { name: "Павел Новиков", role: "Механик", dept: "Производство", status: "inactive", courses: 3, cert: "истёк" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDocFilter, setActiveDocFilter] = useState("Все");

  const docTypes = ["Все", "ГОСТ", "Приказ", "Закон", "Методика", "СП"];
  const filteredDocs = activeDocFilter === "Все" ? DOCUMENTS : DOCUMENTS.filter((d) => d.type === activeDocFilter);

  return (
    <div className="min-h-screen bg-background" style={{ backgroundImage: "radial-gradient(ellipse 600px 400px at 20% 20%, rgba(0,255,135,0.06) 0%, transparent 70%), radial-gradient(ellipse 500px 350px at 80% 60%, rgba(0,212,255,0.05) 0%, transparent 70%)" }}>
      {/* NAVBAR */}
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

      <main className="pt-16">
        {/* ========== HOME ========== */}
        {activeSection === "home" && (
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
        )}

        {/* ========== COURSES ========== */}
        {activeSection === "courses" && (
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
                <input placeholder="Поиск по курсам..." className="bg-transparent flex-1 text-sm text-white outline-none placeholder-gray-600" style={{ color: "rgba(255,255,255,0.8)" }} />
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
        )}

        {/* ========== CABINET ========== */}
        {activeSection === "cabinet" && (
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
        )}

        {/* ========== ANALYTICS ========== */}
        {activeSection === "analytics" && (
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
                  {[65,80,72,90,85,95,78,88,100,82,92,75].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full rounded-t-lg" style={{ height: `${val}%`, background: `linear-gradient(180deg, #00ff87, #00d4ff60)`, opacity: 0.75 }} />
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px" }}>
                        {["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"][i]}
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
                    {[{q:"Q1",v:3},{q:"Q2",v:1},{q:"Q3",v:2},{q:"Q4",v:0}].map((q, i) => (
                      <div key={i} className="text-center rounded-xl p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="text-xl font-montserrat font-black text-white">{q.v}</div>
                        <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{q.q}</div>
                        <div className="text-xs mt-1" style={{ color: q.v === 0 ? "#00ff87" : "#ff6b35" }}>
                          {q.v === 0 ? "✓" : "↓"}
                        </div>
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
        )}

        {/* ========== USERS ========== */}
        {activeSection === "users" && (
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
                      {["Сотрудник","Подразделение","Статус","Курсы","Сертификат",""].map((h, i) => (
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
                            color: user.status === "active" ? "#00ff87" : user.status === "warning" ? "#ff6b35" : "#ef4444"
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
        )}

        {/* ========== CONTACTS ========== */}
        {activeSection === "contacts" && (
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

                {/* Archive НД */}
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
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="ShieldCheck" size={17} style={{ color: "#00ff87" }} />
            <span className="font-montserrat font-bold text-white">SafeWork</span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>© 2025 Охрана труда нового поколения</span>
          </div>
          <div className="flex gap-6 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            {["home","courses","contacts"].map((s, i) => (
              <button key={s} onClick={() => setActiveSection(s)} className="hover:text-white transition-colors">
                {["Главная","Курсы","Контакты"][i]}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}