// ─────────────────────────────────────────────────────────────────────────────
//  FULL-STACK DEVELOPMENT KURSU  –  9 Ay · Həftədə 3 Dərs · Hər Dərs 3 Saat
//  Dərs Günləri: 1. Gün (B.e), 2. Gün (Ç.a), 6. Gün (Ş.) — Cəmi 108 Dərs
// ─────────────────────────────────────────────────────────────────────────────

const COURSE = {
  title: "Full-Stack Development",
  subtitle: "9 Ay · Həftədə 3 dərs (Bazar ertəsi, Çərşənbə axşamı, Şənbə) · Hər dərs 3 saat",
  instructor: "Fariz Esedzade",
  totalMonths: 9,
  schedule: "1. Gün (B.e) · 2. Gün (Ç.a) · 6. Gün (Ş.)",
};

// Lesson type constants
const TYPE = {
  LESSON:    "lesson",
  REVIEW:    "review",
  TASK:      "task",
  MIDTERM:   "midterm",
  FINAL:     "final",
  CONCEPT:   "concept",
};

const modules = [
  // ═══════════════════════════════════════════════════════════════════════════
  //  MODULE 1 — HTML + CSS + Libraries (18 Dərs · 6 Həftə)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "html-css",
    number: 1,
    title: "HTML + CSS + Libraries",
    subtitle: "Sıfırdan təməl — Flexbox, Grid, Responsive dizayn, Tailwind CSS",
    icon: "fas fa-paint-brush",
    month: "Ay 1 – 1.5",
    color: { from: "#3b82f6", to: "#1d4ed8" },
    accent: "#3b82f6",
    lightBg: "#eff6ff",
    lightText: "#1e40af",
    weeks: "6 Həftə (18 Dərs)",
    items: [
      {
        type: TYPE.LESSON, id: 1, day: "1. Gün (B.e)", week: "Həftə 1",
        topics: [
          "Veb necə işləyir? Brauzer, Server, Fayllar",
          "HTML nədir? İlk index.html faylı",
          "Əsas mətn teqləri: h1-h6, p, a (linklər), img (şəkillər)",
        ],
      },
      {
        type: TYPE.LESSON, id: 2, day: "2. Gün (Ç.a)", week: "Həftə 1",
        topics: [
          "Siyahılar: Nizamsız (ul) və Nizamlı (ol) siyahılar, li",
          "Cədvəllər (Tables): table, tr, td, th məntiqi",
          "Dünənki teqlərlə birgə sadə məlumat səhifəsi yığmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 3, day: "6. Gün (Ş.)", week: "Həftə 1",
        topics: [
          "HTML Formaları (Forms): form, input növləri (text, email, password)",
          "Form elementləri: label, button, textarea, placeholder, required",
          "Həftəlik Təcrübə: Qeydiyyat və Əlaqə forması yığmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 4, day: "1. Gün (B.e)", week: "Həftə 2",
        topics: [
          "Semantic HTML nədir və niyə vacibdir? (SEO və oxunaqlılıq)",
          "Skelet teqləri: header, nav, main, section, article, footer",
          "Strukturlu, təmiz HTML səhifə maketi qurmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 5, day: "2. Gün (Ç.a)", week: "Həftə 2",
        topics: [
          "CSS nədir? Üslub vermək (Inline, Internal, External)",
          "Selektorlar: Element, Class (.), ID (#) fərqləri",
          "Rənglər (HEX, RGB), şrift ölçüləri (font-size, font-family)",
        ],
      },
      {
        type: TYPE.LESSON, id: 6, day: "6. Gün (Ş.)", week: "Həftə 2",
        topics: [
          "CSS Box Model (Tək və Əsas Mövzu): Content, Padding, Border, Margin",
          "box-sizing: border-box nədir və niyə həmişə yazılır?",
          "Həftəlik Təcrübə: Kart komponenti yığaraq Box Modeli mənimsəmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 7, day: "1. Gün (B.e)", week: "Həftə 3",
        topics: [
          "Vizual CSS: Fonlar (background-color, background-image)",
          "Kənarlar: border-radius, box-shadow və text-shadow",
          "Hover effekti: :hover, :focus, :active pseudo-class-ları",
        ],
      },
      {
        type: TYPE.LESSON, id: 8, day: "2. Gün (Ç.a)", week: "Həftə 3",
        topics: [
          "CSS Display xassəsi: block, inline, inline-block",
          "Görünməzlik: display: none vs visibility: hidden",
          "Sadə menyu barları və düymələr üzərində tətbiq",
        ],
      },
      {
        type: TYPE.LESSON, id: 9, day: "6. Gün (Ş.)", week: "Həftə 3",
        topics: [
          "CSS Positioning (Tək Mövzu): static, relative, absolute",
          "Sabit və yapışqan elementlər: fixed və sticky",
          "z-index məntiqi: qatların bir-birinin üstünə çıxması",
        ],
      },
      {
        type: TYPE.LESSON, id: 10, day: "1. Gün (B.e)", week: "Həftə 4",
        topics: [
          "CSS Flexbox Əsasları: Niyə float yox, Flexbox?",
          "Flex Container: display: flex, flex-direction",
          "Hizalama: justify-content (üfüqi) və align-items (şaquli)",
        ],
      },
      {
        type: TYPE.LESSON, id: 11, day: "2. Gün (Ç.a)", week: "Həftə 4",
        topics: [
          "Flexbox İrəli: flex-wrap, gap, flex-grow, flex-shrink",
          "Flexbox ilə Məşhur Həllər: Mərkəzləmə (tam ortalama)",
          "Flexbox ilə real Navbar (loqo solda, linklər sağda)",
        ],
      },
      {
        type: TYPE.LESSON, id: 12, day: "6. Gün (Ş.)", week: "Həftə 4",
        topics: [
          "Böyük Flexbox Praktikası: Məhsul vitrini (Product Grid)",
          "Flex kartlar içində düymələri aşağı bərabərləşdirmək",
          "Müəllimlə birgə sinifdə canlı tətbiq və xətaların həlli",
        ],
      },
      {
        type: TYPE.LESSON, id: 13, day: "1. Gün (B.e)", week: "Həftə 5",
        topics: [
          "CSS Grid Əsasları: İki ölçülü düzülüş məntiqi",
          "grid-template-columns, grid-template-rows, gap",
          "repeat() və fr (fraction) vahidləri ilə sadə cədvəl maketi",
        ],
      },
      {
        type: TYPE.LESSON, id: 14, day: "2. Gün (Ç.a)", week: "Həftə 5",
        topics: [
          "Media Queries: Responsive (Mobil uyğun) dizayn nədir?",
          "@media (max-width / min-width) sintaksisi",
          "Mobile-First fəlsəfəsi: Əvvəl mobil, sonra desktop",
        ],
      },
      {
        type: TYPE.REVIEW, id: 15, day: "6. Gün (Ş.)", week: "Həftə 5",
        topics: [
          "Modul 1 Üzrə Təkrar & Praktika (Buffer 1): Flexbox, Grid və Responsive maketlərin möhkəmləndirilməsi",
          "Tələbələrin çətinlik çəkdiyi məqamlar üzrə sual-cavab, canlı kodlaşdırma və fərdi dəstək",
          "💡 Özünü Öyrənmə Materialı: Figma ilə tanışlıq, dizayn faylından rəng və ölçülərin götürülməsi bələdçisi",
        ],
      },
      {
        type: TYPE.LESSON, id: 16, day: "1. Gün (B.e)", week: "Həftə 6",
        topics: [
          "Tailwind CSS Nədir? Niyə müasir dünyada 1 nömrədir?",
          "Utility-first fəlsəfəsi: CSS yazmadan siniflərlə stil vermək",
          "Əsas siniflər: p-4, m-2, flex, bg-blue-500, text-white",
        ],
      },
      {
        type: TYPE.LESSON, id: 17, day: "2. Gün (Ç.a)", week: "Həftə 6",
        topics: [
          "Tailwind ilə Responsive Dizayn: sm:, md:, lg:, xl: prefiksləri",
          "Tailwind ilə Flexbox, Grid və Hover vəziyyətləri",
          "Tailwind ilə tam bir Landing Page bölməsi yığmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 18, day: "6. Gün (Ş.)", week: "Həftə 6",
        topics: [
          "Bootstrap 5 ilə qısa tanışlıq: Grid və hazır komponentlər",
          "Git və GitHub Əsasları: Kodu GitHub reposuna yükləmək",
          "Netlify / Vercel ilə layihəni internetdə canlıya atmaq",
        ],
      },
      {
        type: TYPE.TASK,
        title: "📋 Modul 1 Tapşırığı",
        duration: "1 Həftə (Rahat ev tapşırığı)",
        description: "Verilmiş təmiz Figma dizaynını Tailwind CSS ilə tam responsive (mobil və desktop) formatda yığ. GitHub reposuna push et və Netlify-da canlı linkini təqdim et.",
        skills: ["HTML Semantics", "CSS Flexbox", "Tailwind CSS", "Responsive Design", "Git & Netlify"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  MODULE 2 — JavaScript (22 Dərs · ~7.5 Həftə)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "javascript",
    number: 2,
    title: "JS + JS Advanced + Full API Websites",
    subtitle: "Dəyişənlərdən DOM manipulyasiyasına və Async/API tətbiqlərinə qədər",
    icon: "fab fa-js-square",
    month: "Ay 2.5 – 4",
    color: { from: "#d97706", to: "#92400e" },
    accent: "#d97706",
    lightBg: "#fffbeb",
    lightText: "#92400e",
    weeks: "7.5 Həftə (22 Dərs)",
    items: [
      {
        type: TYPE.LESSON, id: 19, day: "1. Gün (B.e)", week: "Həftə 7",
        topics: [
          "JavaScript nədir? Brauzer konsolunda ilk kod",
          "Dəyişənlər: let, const (və niyə var artıq istifadə edilmir)",
          "Əsas Data Tipləri: String, Number, Boolean, undefined, null",
        ],
      },
      {
        type: TYPE.LESSON, id: 20, day: "2. Gün (Ç.a)", week: "Həftə 7",
        topics: [
          "Riyazi Operatorlar (+, -, *, /, %, **)",
          "Müqayisə Operatorları (== vs ===, != vs !==, >, <)",
          "Məntiqi Operatorlar (&&, ||, !)",
        ],
      },
      {
        type: TYPE.LESSON, id: 21, day: "6. Gün (Ş.)", week: "Həftə 7",
        topics: [
          "Şərt Strukturları: if, else if, else",
          "Ternary Operator (qısa şərt forması)",
          "switch / case strukturu və praktiki məsələlər",
        ],
      },
      {
        type: TYPE.LESSON, id: 22, day: "1. Gün (B.e)", week: "Həftə 8",
        topics: [
          "Dövrlər (Loops): for loop sintaksisi və addımları",
          "while və do-while dövrləri",
          "break və continue əmrləri ilə dövrü idarə etmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 23, day: "2. Gün (Ç.a)", week: "Həftə 8",
        topics: [
          "Funksiyalar (Functions): Function Declaration və Expression",
          "Parametrlər, arqumentlər və return dəyəri",
          "Default parametrlər və sadə kalkulyator funksiyaları",
        ],
      },
      {
        type: TYPE.LESSON, id: 24, day: "6. Gün (Ş.)", week: "Həftə 8",
        topics: [
          "Müasir Funksiyalar: Arrow Functions (=>)",
          "Scope anlayışı: Global scope, Function scope, Block scope",
          "Həftəlik Təkrarlama və Funksiya tapşırıqları",
        ],
      },
      {
        type: TYPE.LESSON, id: 25, day: "1. Gün (B.e)", week: "Həftə 9",
        topics: [
          "Massivlər (Arrays): Yaradılması və indekslə müraciət",
          "Əsas metodlar: push, pop, unshift, shift",
          "splice və slice metodları ilə element kəsmək/əlavə etmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 26, day: "2. Gün (Ç.a)", week: "Həftə 9",
        topics: [
          "Müasir Array Metodları 1: forEach dövrü",
          "map() metodu: Məlumatı dəyişdirib yeni massiv almaq",
          "filter() metodu: Şərtə uyğun elementləri süzmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 27, day: "6. Gün (Ş.)", week: "Həftə 9",
        topics: [
          "Müasir Array Metodları 2: find, findIndex, some, every",
          "reduce() metodunun ən sadə izahı (cəmləmə)",
          "Spread operator (...) və Array Destructuring",
        ],
      },
      {
        type: TYPE.LESSON, id: 28, day: "1. Gün (B.e)", week: "Həftə 10",
        topics: [
          "Obyektlər (Objects): Key-Value strukturu",
          "Obyekt xassələrinə müraciət: dot notation vs bracket notation",
          "Obyekt metodları və Object Destructuring",
        ],
      },
      {
        type: TYPE.LESSON, id: 29, day: "2. Gün (Ç.a)", week: "Həftə 10",
        topics: [
          "Obyektlər massivi (Array of Objects) ilə işləmək",
          "Object.keys(), Object.values(), Object.entries()",
          "String metodları (includes, toUpperCase, split, trim) və Math obyekti",
        ],
      },
      {
        type: TYPE.LESSON, id: 30, day: "6. Gün (Ş.)", week: "Həftə 10",
        topics: [
          "DOM Giriş: Document Object Model nədir?",
          "Element seçmək: document.querySelector və querySelectorAll",
          "Elementin məzmununu dəyişmək: textContent və innerHTML",
        ],
      },
      {
        type: TYPE.LESSON, id: 31, day: "1. Gün (B.e)", week: "Həftə 11",
        topics: [
          "DOM Hadisələri (Events): addEventListener məntiqi",
          "Əsas hadisələr: click, input, change, submit",
          "Event obyekti (e.target) və preventDefault()",
        ],
      },
      {
        type: TYPE.LESSON, id: 32, day: "2. Gün (Ç.a)", week: "Həftə 11",
        topics: [
          "Dinamik Elementlər: document.createElement()",
          "Elementləri səhifəyə əlavə etmək (appendChild, prepend) və silmək (remove)",
          "Element stillərini və classList (add, remove, toggle) idarə etmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 33, day: "6. Gün (Ş.)", week: "Həftə 11",
        topics: [
          "Böyük DOM Praktikası: İnteraktiv Todo List tətbiqi",
          "Tapşırıq əlavə etmək, tamamlandı işarələmək, silmək",
          "Sinifdə canlı yazılış və tələbə dəstəyi",
        ],
      },
      {
        type: TYPE.LESSON, id: 34, day: "1. Gün (B.e)", week: "Həftə 12",
        topics: [
          "Brauzer Yaddaşı: localStorage və sessionStorage",
          "JSON nədir? JSON.stringify() və JSON.parse()",
          "Todo List məlumatlarını localStorage-də yadda saxlamaq",
        ],
      },
      {
        type: TYPE.REVIEW, id: 35, day: "2. Gün (Ç.a)", week: "Həftə 12",
        topics: [
          "Modul 2 Üzrə Təkrar & Praktika (Buffer 2): JavaScript Əsasları, Funksiyalar, Array Metodları və DOM təkrarı",
          "LocalStorage və Todo List tətbiqi üzrə kod icmalı (Code Review) və sual-cavab",
          "💡 Özünü Öyrənmə Materialı: Müasir ES6+ (Optional Chaining, Nullish Coalescing) və sadə Class anlayışı",
        ],
      },
      {
        type: TYPE.LESSON, id: 36, day: "6. Gün (Ş.)", week: "Həftə 12",
        topics: [
          "Asinxronluq nədir? Sinxron vs Asinxron kod icrası",
          "setTimeout və setInterval",
          "Callback anlayışı və niyə Promise-ə ehtiyac yarandı?",
        ],
      },
      {
        type: TYPE.LESSON, id: 37, day: "1. Gün (B.e)", week: "Həftə 13",
        topics: [
          "Promise nədir? (Pending, Resolved, Rejected vəziyyətləri)",
          ".then(), .catch() və .finally() zənciri",
          "Sadə Promise nümunələri ilə məşq",
        ],
      },
      {
        type: TYPE.LESSON, id: 38, day: "2. Gün (Ç.a)", week: "Həftə 13",
        topics: [
          "Müasir Asinxronluq: async / await sintaksisi",
          "try / catch ilə xətaları tutmaq və idarə etmək",
          "Daha təmiz və oxunaqlı asinxron kod yazmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 39, day: "6. Gün (Ş.)", week: "Həftə 13",
        topics: [
          "API nədir? Client-Server əlaqəsi və JSON cavabları",
          "Fetch API ilə GET sorğusu (JSONPlaceholder ilə iş)",
          "API-dən gələn məlumatı DOM-da səliqəli kartlar kimi göstərmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 40, day: "1. Gün (B.e)", week: "Həftə 14",
        topics: [
          "Axios Kitabxanası: Fetch-dən fərqləri və üstünlükləri",
          "Axios ilə GET və POST sorğuları göndərmək",
          "Loading (Yüklənir...) və Error (Xəta) vəziyyətlərini idarə etmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 41, day: "2. Gün (Ç.a)", week: "Həftə 14",
        topics: [
          "Açıq API ilə Real Layihə: OpenWeather (Hava) və ya Film API",
          "Axtarış inputu ilə dinamik sorğu göndərmək",
          "Gələn nəticələri ekranda interaktiv göstərmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 42, day: "6. Gün (Ş.)", week: "Həftə 14",
        topics: [
          "Böyük JS Layihə Günü: Tam API Veb Saytının tamamlanması",
          "Axtarış, kateqoriyalara görə filtrləmə və favoritlərin saxlanılması",
          "Kod icmalı və Netlify-a deploy",
        ],
      },
      {
        type: TYPE.TASK,
        title: "📋 Modul 2 Tapşırığı",
        duration: "1 Həftə",
        description: "Açıq bir API istifadə edərək (Film, Hava, E-commerce məhsulları) tam dinamik veb tətbiq hazırla. Axtarış, filtr və localStorage ilə bəyənilənlər siyahısı mütləq olmalıdır.",
        skills: ["Async/Await", "Axios", "DOM Manipulation", "localStorage", "REST API"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  MODULE 3 — React + RTK (18 Dərs · 6 Həftə)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "react",
    number: 3,
    title: "React + RTK",
    subtitle: "React.js, Hooks, Router, Redux Toolkit və RTK Query",
    icon: "fab fa-react",
    month: "Ay 4 – 5.5",
    color: { from: "#0891b2", to: "#0e7490" },
    accent: "#0891b2",
    lightBg: "#ecfeff",
    lightText: "#0e7490",
    weeks: "6 Həftə (18 Dərs)",
    items: [
      {
        type: TYPE.LESSON, id: 43, day: "1. Gün (B.e)", week: "Həftə 15",
        topics: [
          "React nədir? Niyə təmiz JS yox, React?",
          "Single Page Application (SPA) və Virtual DOM anlayışı",
          "Vite ilə ilk React layihəsini yaratmaq və qovluq strukturu",
        ],
      },
      {
        type: TYPE.LESSON, id: 44, day: "2. Gün (Ç.a)", week: "Həftə 15",
        topics: [
          "JSX Sintaksisi: HTML içində JavaScript yazmaq",
          "Funksional Komponentlər yaratmaq və təkrar istifadə",
          "Komponentlərin parçalanması (Header, Footer, Card)",
        ],
      },
      {
        type: TYPE.LESSON, id: 45, day: "6. Gün (Ş.)", week: "Həftə 15",
        topics: [
          "Props: Məlumatı valideyn komponentdən övlada ötürmək",
          "Props destructuring və default dəyərlər",
          "children prop-u və kart şablonları qurmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 46, day: "1. Gün (B.e)", week: "Həftə 16",
        topics: [
          "useState Hook (Ən Əsas Hook): Komponent vəziyyəti",
          "Sadə sayğac (counter) və toggle (açıb-bağlama) nümunəsi",
          "State dəyişəndə komponentin yenidən render olması",
        ],
      },
      {
        type: TYPE.LESSON, id: 47, day: "2. Gün (Ç.a)", week: "Həftə 16",
        topics: [
          "useState ilə Formalar: İki tərəfli əlaqə (Controlled Inputs)",
          "Form submit hadisəsi və məlumatların toplanması",
          "Şərti Render (Conditional Rendering): && və ternary ilə",
        ],
      },
      {
        type: TYPE.LESSON, id: 48, day: "6. Gün (Ş.)", week: "Həftə 16",
        topics: [
          "Siyahıların Render Edilməsi: .map() ilə komponent siyahısı",
          "key prop-u nədir və niyə unikal olmalıdır?",
          "Praktika: React ilə interaktiv Todo List yığmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 49, day: "1. Gün (B.e)", week: "Həftə 17",
        topics: [
          "useEffect Hook: Yan təsirlər (Side Effects) nədir?",
          "Dependency array: Boş massiv [], dolu massiv və fərqləri",
          "Səhifə ilk açılanda kodun icra olunması",
        ],
      },
      {
        type: TYPE.LESSON, id: 50, day: "2. Gün (Ç.a)", week: "Həftə 17",
        topics: [
          "useEffect ilə API Sorğuları (Axios)",
          "Loading indikatoru və xətaların idarəsi",
          "API-dən gələn məlumatların useState ilə saxlanması",
        ],
      },
      {
        type: TYPE.LESSON, id: 51, day: "6. Gün (Ş.)", week: "Həftə 17",
        topics: [
          "useRef Hook: DOM elementlərinə birbaşa müraciət (focus, scroll)",
          "useReducer Hook ilə sadə tanışlıq (mürəkkəb state üçün)",
          "Həftəlik praktika: Dinamik məhsul axtarışı komponenti",
        ],
      },
      {
        type: TYPE.LESSON, id: 52, day: "1. Gün (B.e)", week: "Həftə 18",
        topics: [
          "React Router v6: Səhifə yenilənmədən səhifələr arası keçid",
          "BrowserRouter, Routes, Route, Link və NavLink",
          "Layout şablonu (Navbar və Footer hər səhifədə sabit)",
        ],
      },
      {
        type: TYPE.LESSON, id: 53, day: "2. Gün (Ç.a)", week: "Həftə 18",
        topics: [
          "Dinamik Marşrutlar: useParams hook (/products/:id)",
          "useNavigate hook ilə kod vasitəsilə səhifə dəyişmək",
          "404 Not Found səhifəsi yaratmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 54, day: "6. Gün (Ş.)", week: "Həftə 18",
        topics: [
          "Context API: Prop Drilling probleminin həlli",
          "createContext, useContext və Provider məntiqi",
          "Qlobal Dark/Light Theme və ya Sadə Səbət Context-i qurmaq",
        ],
      },
      {
        type: TYPE.REVIEW, id: 55, day: "1. Gün (B.e)", week: "Həftə 19",
        topics: [
          "Modul 3 Üzrə Təkrar & Praktika (Buffer 3): React Əsasları, useState, useEffect, Router və Context API təkrarı",
          "Komponent arxitekturasında xətaların aradan qaldırılması və canlı debugging sessiyası",
          "💡 Özünü Öyrənmə Materialı: Custom Hook anlayışı və fərdi hook-ların yazılması bələdçisi",
        ],
      },
      {
        type: TYPE.LESSON, id: 56, day: "2. Gün (Ç.a)", week: "Həftə 19",
        topics: [
          "Redux Toolkit Giriş: Niyə böyük layihələrdə Redux lazımdır?",
          "Store və Slice anlayışları: initialState və reducers",
          "useSelector (datanı oxumaq) və useDispatch (action göndərmək)",
        ],
      },
      {
        type: TYPE.LESSON, id: 57, day: "6. Gün (Ş.)", week: "Həftə 19",
        topics: [
          "Redux Toolkit ilə Səbət (Cart) Sistemi qurmaq",
          "Məhsul əlavə etmək, sayını artırmaq/azaltmaq, silmək",
          "Redux DevTools ilə state dəyişikliklərini izləmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 58, day: "1. Gün (B.e)", week: "Həftə 20",
        topics: [
          "RTK Query Əsasları: API idarəetməsini asanlaşdırmaq",
          "createApi ilə endpoint yaratmaq (useGetProductsQuery)",
          "Avtomatik keşləmə və yüklənmə vəziyyətləri",
        ],
      },
      {
        type: TYPE.LESSON, id: 59, day: "2. Gün (Ç.a)", week: "Həftə 20",
        topics: [
          "Müasir React Komponent Kitabxanaları (Lucide icons, Headless UI)",
          "Tailwind ilə React komponentlərini sürətli stilləndirmək",
          "Toast bildirişləri (react-toastify və ya sonner)",
        ],
      },
      {
        type: TYPE.LESSON, id: 60, day: "6. Gün (Ş.)", week: "Həftə 20",
        topics: [
          "Böyük React Layihəsi: Redux Toolkit ilə tam E-commerce tətbiqi",
          "Məhsul kataloqu, filtr, detal səhifəsi və səbət axını",
          "Layihənin Vercel-də yayımlanması",
        ],
      },
      {
        type: TYPE.TASK,
        title: "📋 Modul 3 Tapşırığı",
        duration: "1 Həftə",
        description: "React Router, Redux Toolkit və RTK Query istifadə edərək çox səhifəli E-commerce və ya Film tətbiqi yarat. Səbət sistemi və axtarış funksiyası tam işlək olmalıdır.",
        skills: ["React Hooks", "React Router v6", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  MODULE 4 — React + TypeScript (10 Dərs · ~3.5 Həftə)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "typescript",
    number: 4,
    title: "Frontend Development with React and TypeScript",
    subtitle: "TypeScript ilə tip təhlükəsiz kodlaşdırma və Orta Dönem Layihəsi",
    icon: "fas fa-code",
    month: "Ay 5.5 – 6",
    color: { from: "#7c3aed", to: "#4c1d95" },
    accent: "#7c3aed",
    lightBg: "#f5f3ff",
    lightText: "#4c1d95",
    weeks: "3.5 Həftə (10 Dərs)",
    items: [
      {
        type: TYPE.LESSON, id: 61, day: "1. Gün (B.e)", week: "Həftə 21",
        topics: [
          "TypeScript nədir? JavaScript-dən fərqləri və üstünlükləri",
          "Əsas primitiv tiplər: string, number, boolean, any",
          "Massivlərin və obyektlərin tiplənməsi",
        ],
      },
      {
        type: TYPE.LESSON, id: 62, day: "2. Gün (Ç.a)", week: "Həftə 21",
        topics: [
          "Interface və Type Alias anlayışları (fərqlər və seçim)",
          "Optional (?) və Readonly xassələri",
          "Union Types ('light' | 'dark') və Literal Types",
        ],
      },
      {
        type: TYPE.LESSON, id: 63, day: "6. Gün (Ş.)", week: "Həftə 21",
        topics: [
          "Funksiyalarda parametrlərin və qaytarılan dəyərin tiplənməsi",
          "Generics Əsasları: Yenidən istifadə edilən dinamik tiplər",
          "Praktiki nümunələrlə TypeScript məşqləri",
        ],
      },
      {
        type: TYPE.LESSON, id: 64, day: "1. Gün (B.e)", week: "Həftə 22",
        topics: [
          "React ilə TypeScript: Vite + TS layihəsi qurmaq",
          "Komponent Props tipləri: interface Props { ... }",
          "children prop-unun tiplənməsi (React.ReactNode)",
        ],
      },
      {
        type: TYPE.LESSON, id: 65, day: "2. Gün (Ç.a)", week: "Həftə 22",
        topics: [
          "React Hooks ilə TypeScript: useState<User | null>(null)",
          "useRef<HTMLInputElement>(null) tiplənməsi",
          "Form və Button Hadisə Tipləri: React.ChangeEvent, React.FormEvent",
        ],
      },
      {
        type: TYPE.LESSON, id: 66, day: "6. Gün (Ş.)", week: "Həftə 22",
        topics: [
          "Axios cavablarının TypeScript ilə tiplənməsi: axios.get<Product[]>",
          "Redux Toolkit + TypeScript: RootState və AppDispatch tipləri",
          "Slice içində PayloadAction<T> istifadəsi",
        ],
      },
      {
        type: TYPE.REVIEW, id: 67, day: "1. Gün (B.e)", week: "Həftə 23",
        topics: [
          "Modul 4 Üzrə Təkrar & Praktika (Buffer 4): TypeScript Təməlləri, Interface/Type, React+TS inteqrasiyası təkrarı",
          "Orta Dönem Layihəsinə (Midterm) hazırlıq, tələbələrin sualları və texniki dəstək",
          "💡 Özünü Öyrənmə Materialı: TypeScript Utility Tipləri (Partial, Pick, Omit) və build xətalarının həlli",
        ],
      },
      {
        type: TYPE.LESSON, id: 68, day: "2. Gün (Ç.a)", week: "Həftə 23",
        topics: [
          "Orta Dönem Layihəsinə Başlanğıc: Tələblər və Komponent Arxitekturası",
          "Type fayllarının qovluqda ayrılması (/types/index.ts)",
          "React Router və Layout-un TypeScript ilə qurulması",
        ],
      },
      {
        type: TYPE.LESSON, id: 69, day: "6. Gün (Ş.)", week: "Həftə 23",
        topics: [
          "Orta Dönem Layihəsi: API məlumatlarının tipli çəkilməsi və Redux inteqrasiyası",
          "Responsive mobil dizaynın cilalanması",
          "Sinifdə canlı kodlaşdırma və sual-cavab",
        ],
      },
      {
        type: TYPE.LESSON, id: 70, day: "1. Gün (B.e)", week: "Həftə 24",
        topics: [
          "Orta Dönem Layihəsinin Tamamlanması və Code Review",
          "Layihənin Vercel-də yayımlanması və GitHub README yazımı",
          "CV üçün layihə təsvirinin hazırlanması",
        ],
      },
      {
        type: TYPE.MIDTERM,
        title: "🏆 Orta Dönem Layihəsi",
        duration: "10 Gün (CV Layihəsi)",
        description: "React + TypeScript + Redux Toolkit + React Router istifadə edərək tam tiplənmiş, xətasız çalışan böyük Frontend SPA layihəsi. Real API inteqrasiyası və Vercel canlı linki mütləqdir.",
        skills: ["React", "TypeScript", "Redux Toolkit", "Typed API", "Responsive UI", "Vercel Deploy"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  MODULE 5 — Backend with Node.js and Express (12 Dərs · 4 Həftə)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "nodejs",
    number: 5,
    title: "Backend Development with Node.js and Express",
    subtitle: "Server proqramlaşdırma, REST API məntiqi və MVC arxitekturası",
    icon: "fab fa-node-js",
    month: "Ay 6 – 7",
    color: { from: "#16a34a", to: "#14532d" },
    accent: "#16a34a",
    lightBg: "#f0fdf4",
    lightText: "#14532d",
    weeks: "4 Həftə (12 Dərs)",
    items: [
      {
        type: TYPE.CONCEPT,
        title: "💡 Konseptual Giriş — Kod Yoxdur (Rahat Dərs)",
        topics: [
          "Backend nədir? Frontend ilə fərqi və əlaqəsi",
          "HTTP necə işləyir? Client → Request → Server → Response dövrü",
          "Client-Server arxitekturası və JSON məlumat formatı",
          "Əsas status kodları: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error)",
        ],
      },
      {
        type: TYPE.LESSON, id: 71, day: "2. Gün (Ç.a)", week: "Həftə 24",
        topics: [
          "Node.js nədir? Brauzerdən kənarda JavaScript icrası",
          "Terminal ilə işləmək, ilk app.js faylını işə salmaq",
          "Daxili (built-in) modullar: fs (fayl sistemi) və path",
        ],
      },
      {
        type: TYPE.LESSON, id: 72, day: "6. Gün (Ş.)", week: "Həftə 24",
        topics: [
          "NPM nədir? package.json və node_modules anlayışı",
          "nodemon quraşdırılması (avtomatik server restart)",
          "Sadə skriptlər və package.json konfiqurasiyası",
        ],
      },
      {
        type: TYPE.LESSON, id: 73, day: "1. Gün (B.e)", week: "Həftə 25",
        topics: [
          "Express.js giriş: Niyə təmiz Node.js yox, Express?",
          "İlk Express serveri: app.listen, ilk app.get('/') marşrutu",
          "req (Request) və res (Response) obyektlərini anlamaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 74, day: "2. Gün (Ç.a)", week: "Həftə 25",
        topics: [
          "REST API marşrutları: GET və POST sorğuları",
          "express.json() middleware — JSON body oxumaq",
          "Postman ilə GET və POST sorğularını test etmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 75, day: "6. Gün (Ş.)", week: "Həftə 25",
        topics: [
          "Dinamik marşrutlar: URL parametrləri (req.params.id)",
          "Query string: Filtrləmə və axtarış (req.query)",
          "PUT və DELETE sorğuları ilə tam CRUD dövrü",
        ],
      },
      {
        type: TYPE.LESSON, id: 76, day: "1. Gün (B.e)", week: "Həftə 26",
        topics: [
          "Middleware anlayışı: Funksiyalar arası körpü (req, res, next)",
          "Sadə custom logger middleware yazmaq",
          "CORS nədir? cors paketinin quraşdırılması və izahı",
        ],
      },
      {
        type: TYPE.LESSON, id: 77, day: "2. Gün (Ç.a)", week: "Həftə 26",
        topics: [
          "MVC Arxitekturasına giriş: Niyə tək faylda yazmırıq?",
          "Express Router: Marşrutları ayrı fayllara bölmək (/routes)",
          "Controller funksiyaları: Məntiqi ayırmaq (/controllers)",
        ],
      },
      {
        type: TYPE.LESSON, id: 78, day: "6. Gün (Ş.)", week: "Həftə 26",
        topics: [
          "Xətaların qarşısını almaq: try-catch blokları",
          "Serverin çökməməsi üçün Global Error Handling Middleware",
          "404 Not Found xəta marşrutu yaratmaq",
        ],
      },
      {
        type: TYPE.REVIEW, id: 79, day: "1. Gün (B.e)", week: "Həftə 27",
        topics: [
          "Modul 5 Üzrə Təkrar & Praktika (Buffer 5): Node.js & Express.js Əsasları, MVC arxitekturası və Middleware təkrarı",
          "Postman ilə REST API sorğularının test edilməsi və xətaların həlli",
          "💡 Özünü Öyrənmə Materialı: .env mühit dəyişənləri və layihə qovluq strukturu bələdçisi",
        ],
      },
      {
        type: TYPE.LESSON, id: 80, day: "2. Gün (Ç.a)", week: "Həftə 27",
        topics: [
          "Praktika Dərsi: Express ilə mock datalı tam CRUD API qurmaq",
          "Bütün CRUD əməliyyatlarının Postman-da test edilməsi",
          "Tələbə xətalarının sinifdə birgə yoxlanılması",
        ],
      },
      {
        type: TYPE.LESSON, id: 81, day: "6. Gün (Ş.)", week: "Həftə 27",
        topics: [
          "Frontend inteqrasiyası: React layihəsindən Express API-yə sorğu",
          "CORS xətalarının aradan qaldırılması və testlər",
          "Loading və Error vəziyyətlərinin React-də göstərilməsi",
        ],
      },
      {
        type: TYPE.TASK,
        title: "📋 Modul 5 Tapşırığı",
        duration: "1 Həftə",
        description: "MVC arxitekturası ilə tam Express REST API yarat (Məsələn: Kitabxana və ya Məhsul kataloqu). Bütün CRUD əməliyyatları Postman kolleksiyası ilə test edilmiş olmalıdır.",
        skills: ["Node.js", "Express.js", "REST API", "MVC Pattern", "Middleware", "Postman"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  MODULE 6 — MongoDB, Mongoose (11 Dərs · ~3.5 Həftə)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "mongodb",
    number: 6,
    title: "MongoDB, Mongoose",
    subtitle: "NoSQL bazası, MERN Stack, JWT Autentifikasiya və Fayl yükləmə",
    icon: "fas fa-leaf",
    month: "Ay 7 – 8",
    color: { from: "#059669", to: "#064e3b" },
    accent: "#059669",
    lightBg: "#ecfdf5",
    lightText: "#064e3b",
    weeks: "3.5 Həftə (11 Dərs)",
    items: [
      {
        type: TYPE.LESSON, id: 82, day: "1. Gün (B.e)", week: "Həftə 28",
        topics: [
          "Verilənlər bazası nədir? NoSQL və Document modeli nə deməkdir?",
          "MongoDB Atlas (Cloud) hesabı açmaq və pulsuz klaster yaratmaq",
          "MongoDB Compass ilə bazaya vizual qoşulmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 83, day: "2. Gün (Ç.a)", week: "Həftə 28",
        topics: [
          "Mongoose nədir? ODM anlayışı və Express-ə qoşulma (mongoose.connect)",
          "İlk Şema (Schema) və Model tərifi (məsələn: Product modeli)",
          "Mongoose data tipləri: String, Number, Boolean, Date",
        ],
      },
      {
        type: TYPE.LESSON, id: 84, day: "6. Gün (Ş.)", week: "Həftə 28",
        topics: [
          "Mongoose ilə Data Yaratmaq: Model.create()",
          "Məlumatları Oxumaq: Model.find(), Model.findById()",
          "Postman-dan göndərilən datanı birbaşa MongoDB-yə yazmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 85, day: "1. Gün (B.e)", week: "Həftə 29",
        topics: [
          "Məlumatı Yeniləmək: findByIdAndUpdate() və new: true fərqi",
          "Məlumatı Silmək: findByIdAndDelete()",
          "Tam MongoDB CRUD API-nin tamamlanması",
        ],
      },
      {
        type: TYPE.LESSON, id: 86, day: "2. Gün (Ç.a)", week: "Həftə 29",
        topics: [
          "Mongoose Validasiyaları: required, trim, min, max, default",
          "Təkrarlanan dəyərlər: unique: true və indeks xətaları",
          "Validasiya xətalarını istifadəçiyə aydın JSON kimi qaytarmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 87, day: "6. Gün (Ş.)", week: "Həftə 29",
        topics: [
          "İstifadəçi Qeydiyyatı (Auth 1): Parolların açıq saxlanılmaması qaydası",
          "bcryptjs ilə parolu hash-ləmək (salt + hash məntiqi)",
          "Qeydiyyat (Register) endpoint-inin yazılması",
        ],
      },
      {
        type: TYPE.LESSON, id: 88, day: "1. Gün (B.e)", week: "Həftə 30",
        topics: [
          "İstifadəçi Girişi (Auth 2): Parolun yoxlanılması (bcrypt.compare)",
          "JWT (JSON Web Token) nədir? Token strukturu (Header, Payload, Secret)",
          "Giriş (Login) endpoint-indən JWT token qaytarmaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 89, day: "2. Gün (Ç.a)", week: "Həftə 30",
        topics: [
          "Qorunan Marşrutlar: authMiddleware funksiyasının yazılması",
          "Request Header-dən Token-i götürmək (Bearer token)",
          "jwt.verify() ilə yoxlama və req.user təyini",
        ],
      },
      {
        type: TYPE.LESSON, id: 90, day: "6. Gün (Ş.)", week: "Həftə 30",
        topics: [
          "Kolleksiyalar arası Əlaqə: ref və ObjectId anlayışı",
          "Bir istifadəçiyə aid məhsullar/qeydlər yaratmaq",
          ".populate() metodu ilə əlaqəli məlumatları birlikdə çəkmək",
        ],
      },
      {
        type: TYPE.REVIEW, id: 91, day: "1. Gün (B.e)", week: "Həftə 31",
        topics: [
          "Modul 6 Üzrə Təkrar & Praktika (Buffer 6): MongoDB, Mongoose Modelləri, CRUD və JWT Auth təkrarı",
          "Qorunan marşrutlar (Protected Routes) və tələbələrin API layihələrinin yoxlanışı",
          "💡 Özünü Öyrənmə Materialı: Multer ilə fayl yükləmə və Cloudinary servisi ilə iş bələdçisi",
        ],
      },
      {
        type: TYPE.LESSON, id: 92, day: "2. Gün (Ç.a)", week: "Həftə 31",
        topics: [
          "Praktika: React Frontend-i Auth + MongoDB API-yə bağlamaq",
          "Token-i localStorage-də saxlamaq və Axios headers-ə əlavə etmək",
          "Tam işləyən MERN tətbiqi icmalı və test",
        ],
      },
      {
        type: TYPE.TASK,
        title: "📋 Modul 6 Tapşırığı",
        duration: "1 Həftə",
        description: "MongoDB + Mongoose + JWT Auth ilə tam MERN API qur. İstifadəçi qeydiyyatı, login, qorunan marşrutlar və Cloudinary ilə şəkil yükləmə daxil olmalıdır. React frontend ilə əlaqələndir.",
        skills: ["MongoDB", "Mongoose", "JWT Auth", "bcryptjs", "Cloudinary", "MERN Stack"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  MODULE 7 — Database Fundamentals (SQL and MySQL) (8 Dərs · ~2.5 Həftə)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "sql",
    number: 7,
    title: "Database Fundamentals (SQL and NoSQL, MySQL)",
    subtitle: "Verilənlər bazasının əsasları — SQL dili, Cədvəllər, Əlaqələr və JOIN-lər",
    icon: "fas fa-database",
    month: "Ay 8 – 8.5",
    color: { from: "#ea580c", to: "#7c2d12" },
    accent: "#ea580c",
    lightBg: "#fff7ed",
    lightText: "#7c2d12",
    weeks: "2.5 Həftə (8 Dərs)",
    items: [
      {
        type: TYPE.LESSON, id: 93, day: "6. Gün (Ş.)", week: "Həftə 31",
        topics: [
          "SQL və Əlaqəli (Relational) Bazalar nədir? NoSQL ilə fərqi",
          "Cədvəl, Sətir (Row) və Sütun (Column) məntiqi (Excel bənzətməsi)",
          "MySQL quraşdırılması və DBeaver / MySQL Workbench interfeysi",
        ],
      },
      {
        type: TYPE.LESSON, id: 94, day: "1. Gün (B.e)", week: "Həftə 32",
        topics: [
          "SQL Dili: İlk verilənlər bazası və cədvəli (CREATE DATABASE, CREATE TABLE)",
          "Əsas Data Tipləri: INT, VARCHAR, BOOLEAN, TIMESTAMP",
          "PRIMARY KEY və AUTO_INCREMENT anlayışları",
        ],
      },
      {
        type: TYPE.LESSON, id: 95, day: "2. Gün (Ç.a)", week: "Həftə 32",
        topics: [
          "Cədvələ məlumat daxil etmək: INSERT INTO sintaksisi",
          "Məlumatları oxumaq: SELECT * FROM, spesifik sütunları seçmək",
          "Şərtlə süzgəcləmək: WHERE, AND, OR, LIKE",
        ],
      },
      {
        type: TYPE.LESSON, id: 96, day: "6. Gün (Ş.)", week: "Həftə 32",
        topics: [
          "Məlumatları yeniləmək və silmək: UPDATE və DELETE (WHERE-in vacibliyi!)",
          "Sıralama və limit: ORDER BY id DESC, LIMIT, OFFSET",
          "MySQL-də təhlükəsizlik və ehtiyat tədbirləri",
        ],
      },
      {
        type: TYPE.LESSON, id: 97, day: "1. Gün (B.e)", week: "Həftə 33",
        topics: [
          "Cədvəllər arası əlaqələr: FOREIGN KEY nədir?",
          "One-to-Many əlaqəsi: İstifadəçilər və Sifarişlər (Users & Orders)",
          "Sadə ERD (Entity Relationship) diaqramını oxumaq",
        ],
      },
      {
        type: TYPE.LESSON, id: 98, day: "2. Gün (Ç.a)", week: "Həftə 33",
        topics: [
          "Cədvəlləri birləşdirmək: INNER JOIN necə işləyir?",
          "LEFT JOIN nə zaman lazımdır?",
          "Praktiki nümunə: İstifadəçi adı ilə onun verdiyi sifarişləri bir sorğuda çəkmək",
        ],
      },
      {
        type: TYPE.LESSON, id: 99, day: "6. Gün (Ş.)", week: "Həftə 33",
        topics: [
          "Node.js ilə MySQL əlaqəsi: mysql2 paketi və Connection Pool",
          "Parametrli sorğular (Prepared Statements) ilə SQL Injection-dan qorunma",
          "Sadə GET və POST marşrutunun MySQL ilə yazılması",
        ],
      },
      {
        type: TYPE.REVIEW, id: 100, day: "1. Gün (B.e)", week: "Həftə 34",
        topics: [
          "Modul 7 Üzrə Təkrar & Praktika (Buffer 7): SQL Dili, Əlaqəli Cədvəllər (FOREIGN KEY) və JOIN sorğuları təkrarı",
          "Node.js + MySQL inteqrasiyası üzrə canlı praktika, sual-cavab və bazaların müqayisəsi",
          "💡 Özünü Öyrənmə Materialı: ORM (Sequelize / Prisma) konsepti və SQL vs NoSQL seçim bələdçisi",
        ],
      },
      {
        type: TYPE.TASK,
        title: "📋 Modul 7 Tapşırığı",
        duration: "1 Həftə",
        description: "MySQL istifadə edərək 2 əlaqəli cədvəldən ibarət verilənlər bazası strukturu qur (Users və Orders/Tasks). Node.js API ilə bu bazaya qoşularaq SELECT, INSERT və JOIN sorğuları icra et.",
        skills: ["SQL", "MySQL", "Foreign Key", "JOIN", "mysql2", "Database Design"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  MODULE 8 — Final Project and Deployment (8 Dərs · ~3 Həftə)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "final",
    number: 8,
    title: "Final Project and Deployment",
    subtitle: "Full-stack layihənin arxitekturası, canlı bulud mühitində yayımlanması və Məzuniyyət",
    icon: "fas fa-trophy",
    month: "Ay 8.5 – 9",
    color: { from: "#b45309", to: "#78350f" },
    accent: "#b45309",
    lightBg: "#fffbeb",
    lightText: "#78350f",
    weeks: "3 Həftə (8 Dərs)",
    items: [
      {
        type: TYPE.LESSON, id: 101, day: "2. Gün (Ç.a)", week: "Həftə 34",
        topics: [
          "Production mühiti nədir? Development-dən fərqləri",
          "Mühit dəyişənləri və .env.production tənzimləmələri",
          "Render.com / Railway servislərində Node.js API-nin canlıya çıxarılması",
        ],
      },
      {
        type: TYPE.LESSON, id: 102, day: "6. Gün (Ş.)", week: "Həftə 34",
        topics: [
          "Frontend Deployment: Vercel və Netlify ilə React saytının canlıya atılması",
          "Canlı Frontend ilə Canlı Backend-in əlaqələndirilməsi (Production API URL)",
          "Custom Domain və HTTPS/SSL sertifikatlarının izahı",
        ],
      },
      {
        type: TYPE.REVIEW, id: 103, day: "1. Gün (B.e)", week: "Həftə 35",
        topics: [
          "Modul 8 Üzrə Təkrar & Praktika (Buffer 8): Full-Stack Veb Arxitekturası, Deployment təkrarı və Final Layihə planlaması",
          "Tələbələrin Final layihə ideyalarının müzakirəsi, DB diaqramlarının qurulması və konsultasiya",
          "💡 Özünü Öyrənmə Materialı: Docker Konteyner texnologiyası əsasları və Dockerfile bələdçisi",
        ],
      },
      {
        type: TYPE.LESSON, id: 104, day: "2. Gün (Ç.a)", week: "Həftə 35",
        topics: [
          "Final Layihəsinin Başlanğıcı: Mövzu seçimi və tələblər siyahısı",
          "Verilənlər bazası strukturunun və API marşrutlarının xəritəsinin çəkilməsi",
          "Git və GitHub: Branching (budaqlanma) və komanda ilə iş qaydaları",
        ],
      },
      {
        type: TYPE.LESSON, id: 105, day: "6. Gün (Ş.)", week: "Həftə 35",
        topics: [
          "Final Layihə — Backend İnteqrasiyası: Auth + DB + Controllers",
          "Postman ilə bütün API endpoint-lərinin tam testi",
          "Backend-in Render.com servisinə deploy olunması",
        ],
      },
      {
        type: TYPE.LESSON, id: 106, day: "1. Gün (B.e)", week: "Həftə 36",
        topics: [
          "Final Layihə — Frontend İnteqrasiyası: React + TS səhifələri",
          "Auth Context və Token axını (Protected Routes)",
          "Loading, Error və Empty State dizaynlarının tamamlanması",
        ],
      },
      {
        type: TYPE.LESSON, id: 107, day: "2. Gün (Ç.a)", week: "Həftə 36",
        topics: [
          "Final Layihə — Production Deploy: Frontend-in Vercel-də yayımlanması",
          "Canlı mühitdə bütün funksiyaların son testi",
          "Responsive mobil dizayn və konsol xətalarının tam təmizlənməsi",
        ],
      },
      {
        type: TYPE.LESSON, id: 108, day: "6. Gün (Ş.)", week: "Həftə 36",
        topics: [
          "Prezentasiya və Karyera Hazırlığı: Peşəkar GitHub README yazımı",
          "Layihənin CV-yə və LinkedIn-ə əlavə olunması forması",
          "Canlı nümayiş (Demo) çıxışına hazırlıq və tələbə məsləhətləri",
        ],
      },
      {
        type: TYPE.FINAL,
        title: "🎓 Məzuniyyət & Final Layihəsi Təqdimatı",
        duration: "Prezentasiya Günü",
        description: "Tam full-stack veb tətbiq: React + TypeScript frontend, Node.js + Express backend, MongoDB və ya MySQL verilənlər bazası, JWT authentication, bulud deployment. Layihə GitHub-da açıq, produksiyada işləyən linkdə olmalıdır. Hər tələbə layihəsini 10-15 dəqiqə ərzində prezentasiya edir.",
        skills: ["React + TypeScript", "Node.js + Express", "Database (SQL/NoSQL)", "Authentication", "Deployment", "Git & GitHub"],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  STATS

// Node.js module export support
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COURSE, TYPE, modules };
}
