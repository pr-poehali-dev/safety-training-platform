export const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "courses", label: "Курсы" },
  { id: "trainingcenter", label: "Учебный центр" },
  { id: "cabinet", label: "Кабинет" },
  { id: "analytics", label: "Аналитика" },
  { id: "users", label: "Пользователи" },
  { id: "appeals", label: "Обращения" },
  { id: "partners", label: "Партнёры" },
  { id: "contacts", label: "Контакты" },
];

export const TEACHERS = [
  { name: "Алексей Громов", title: "Эксперт по промышленной безопасности", exp: "18 лет", courses: 12, rating: 4.9, color: "#00ff87", initials: "АГ" },
  { name: "Наталья Беляева", title: "Специалист по пожарной безопасности", exp: "11 лет", courses: 8, rating: 4.8, color: "#00d4ff", initials: "НБ" },
  { name: "Игорь Савченко", title: "Инструктор по первой помощи", exp: "9 лет", courses: 6, rating: 4.7, color: "#ff6b35", initials: "ИС" },
  { name: "Елена Морозова", title: "Консультант по СУОТ", exp: "14 лет", courses: 10, rating: 5.0, color: "#a78bfa", initials: "ЕМ" },
];

export const SCHEDULE = [
  { date: "14 апр", time: "10:00", title: "Вводный инструктаж (группа А)", format: "Очно", seats: 8, total: 20, color: "#00ff87" },
  { date: "15 апр", time: "14:00", title: "Пожарная безопасность", format: "Онлайн", seats: 15, total: 30, color: "#ff6b35" },
  { date: "17 апр", time: "09:00", title: "Работа на высоте — практика", format: "Очно", seats: 2, total: 12, color: "#00d4ff" },
  { date: "18 апр", time: "11:00", title: "Электробезопасность II гр.", format: "Онлайн", seats: 22, total: 25, color: "#a78bfa" },
  { date: "22 апр", time: "13:00", title: "Первая помощь — тренинг", format: "Очно", seats: 5, total: 15, color: "#f472b6" },
];

export const APPEALS = [
  { id: "ОБР-2025-041", topic: "Запрос документов по СУОТ", author: "Иванов С.П.", dept: "Производство", date: "04.04.2025", status: "new", priority: "high" },
  { id: "ОБР-2025-040", topic: "Уточнение сроков переаттестации", author: "Петрова М.И.", dept: "Офис", date: "03.04.2025", status: "inwork", priority: "medium" },
  { id: "ОБР-2025-039", topic: "Нарушение условий труда на складе №2", author: "Козлов Д.В.", dept: "Склад", date: "01.04.2025", status: "inwork", priority: "high" },
  { id: "ОБР-2025-038", topic: "Запрос инструктажа для новых сотрудников", author: "Смирнова А.К.", dept: "Лаборатория", date: "28.03.2025", status: "done", priority: "low" },
  { id: "ОБР-2025-037", topic: "Обновление плана эвакуации", author: "Новиков П.А.", dept: "Производство", date: "25.03.2025", status: "done", priority: "medium" },
];

export const PARTNERS = [
  { name: "РосТехНадзор", desc: "Федеральная служба по экологическому и технологическому надзору", type: "Госорган", projects: 24, color: "#00ff87", icon: "Landmark" },
  { name: "Академия ОТ", desc: "Ведущий учебный центр по охране труда России", type: "Образование", projects: 18, color: "#00d4ff", icon: "GraduationCap" },
  { name: "СИЗ Групп", desc: "Поставщик средств индивидуальной защиты", type: "Поставщик", projects: 31, color: "#ff6b35", icon: "HardHat" },
  { name: "МедПром", desc: "Медицинское обеспечение и профосмотры предприятий", type: "Медицина", projects: 12, color: "#a78bfa", icon: "Stethoscope" },
  { name: "ЭкоАудит", desc: "Экологический аудит и промышленная безопасность", type: "Аудит", projects: 9, color: "#f472b6", icon: "ClipboardCheck" },
  { name: "ПожТех", desc: "Системы пожарной безопасности и оборудование", type: "Поставщик", projects: 16, color: "#fbbf24", icon: "Flame" },
];

export const COURSES = [
  { title: "Вводный инструктаж", category: "Базовый", duration: "2 ч", students: 1240, progress: 100, color: "#00ff87", icon: "BookOpen" },
  { title: "Работа на высоте", category: "Специализация", duration: "8 ч", students: 430, progress: 67, color: "#00d4ff", icon: "Shield" },
  { title: "Пожарная безопасность", category: "Обязательный", duration: "4 ч", students: 890, progress: 45, color: "#ff6b35", icon: "Flame" },
  { title: "Электробезопасность", category: "Специализация", duration: "6 ч", students: 325, progress: 80, color: "#a78bfa", icon: "Zap" },
  { title: "Первая помощь", category: "Обязательный", duration: "3 ч", students: 1100, progress: 55, color: "#f472b6", icon: "Heart" },
  { title: "Химическая безопасность", category: "Специализация", duration: "5 ч", students: 210, progress: 30, color: "#fbbf24", icon: "FlaskConical" },
];

export const DOCUMENTS = [
  { title: "ГОСТ 12.0.004-2015", desc: "Организация обучения безопасности труда", type: "ГОСТ", year: "2015", color: "#00ff87" },
  { title: "Приказ №772н", desc: "Примерное положение о СУОТ", type: "Приказ", year: "2021", color: "#00d4ff" },
  { title: "ТК РФ Ст. 212", desc: "Обязанности работодателя по ОТ", type: "Закон", year: "2022", color: "#ff6b35" },
  { title: "Методика СУОТ", desc: "Идентификация опасностей на производстве", type: "Методика", year: "2023", color: "#a78bfa" },
  { title: "СП 12.13130.2009", desc: "Категории помещений по взрывопожарной опасности", type: "СП", year: "2009", color: "#f472b6" },
  { title: "ГОСТ Р ИСО 45001", desc: "Системы менеджмента безопасности труда", type: "ГОСТ", year: "2019", color: "#fbbf24" },
];

export const STATS = [
  { value: "2 847", label: "Сотрудников обучено", icon: "Users", color: "#00ff87" },
  { value: "98.4%", label: "Соответствие нормам", icon: "CheckCircle", color: "#00d4ff" },
  { value: "156", label: "Активных курсов", icon: "BookOpen", color: "#ff6b35" },
  { value: "0", label: "Нарушений за квартал", icon: "ShieldCheck", color: "#a78bfa" },
];

export const USERS = [
  { name: "Сергей Иванов", role: "Инженер ОТ", dept: "Производство", status: "active", courses: 12, cert: "12.2025" },
  { name: "Мария Петрова", role: "Специалист", dept: "Офис", status: "active", courses: 8, cert: "03.2025" },
  { name: "Дмитрий Козлов", role: "Рабочий", dept: "Склад", status: "warning", courses: 5, cert: "истёк" },
  { name: "Анна Смирнова", role: "Технолог", dept: "Лаборатория", status: "active", courses: 15, cert: "07.2025" },
  { name: "Павел Новиков", role: "Механик", dept: "Производство", status: "inactive", courses: 3, cert: "истёк" },
];
