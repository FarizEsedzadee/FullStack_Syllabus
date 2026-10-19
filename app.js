// ─────────────────────────────────────────────────────────────────────────────
//  Full-Stack Web Development Syllabus — Application Logic
//  Instructor: Fariz Esedzade · 9 Months · 108 Lessons
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  'use strict';

  // Ensure data is available
  if (typeof COURSE === 'undefined' || typeof modules === 'undefined' || typeof TYPE === 'undefined') {
    console.error('Syllabus data is not loaded. Please ensure data.js is included before app.js.');
    return;
  }

  // App State
  const state = {
    searchQuery: '',
    selectedFilter: 'all', // 'all', 'review', or module number (e.g. 1, 2, ...)
  };

  // Helper: Calculate total stats
  function calculateStats() {
    let numberedLessons = 0;
    let reviewLessons = 0;
    let tasksCount = 0;

    modules.forEach((mod) => {
      mod.items.forEach((item) => {
        if (item.type === TYPE.LESSON || item.type === TYPE.REVIEW) {
          numberedLessons++;
          if (item.type === TYPE.REVIEW) reviewLessons++;
        }
        if ([TYPE.TASK, TYPE.MIDTERM, TYPE.FINAL].includes(item.type)) {
          tasksCount++;
        }
      });
    });

    return {
      totalLessons: numberedLessons,
      reviewLessons,
      totalHours: numberedLessons * 3,
      totalMonths: COURSE.totalMonths || 9,
      totalModules: modules.length,
      tasksCount,
    };
  }

  // Filter items based on state
  function getFilteredModules() {
    const q = state.searchQuery.trim().toLowerCase();
    const filter = state.selectedFilter;

    return modules
      .map((mod) => {
        // Module level filter
        if (filter !== 'all' && filter !== 'review' && Number(filter) !== mod.number) {
          return null;
        }

        // Filter items within module
        const filteredItems = mod.items.filter((item) => {
          // If filtering only reviews
          if (filter === 'review') {
            return item.type === TYPE.REVIEW;
          }

          // If no search query, keep all items
          if (!q) return true;

          // Search matches in topics, titles, or descriptions
          if (item.topics && item.topics.some((t) => t.toLowerCase().includes(q))) {
            return true;
          }
          if (item.title && item.title.toLowerCase().includes(q)) {
            return true;
          }
          if (item.description && item.description.toLowerCase().includes(q)) {
            return true;
          }
          if (item.id && `dərs ${item.id}`.includes(q)) {
            return true;
          }
          return false;
        });

        if (filteredItems.length === 0) return null;

        return {
          ...mod,
          items: filteredItems,
        };
      })
      .filter(Boolean);
  }

  // Component: Navbar
  function renderNavbar() {
    return `
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <!-- Logo & Brand -->
          <div class="flex items-center gap-3 min-w-0">
            <a href="#" class="flex items-center gap-2.5 group">
              <span class="w-9 h-9 rounded-lg bg-slate-900 text-white font-mono font-bold text-sm flex items-center justify-center tracking-tight shadow-sm group-hover:bg-indigo-600 transition-colors">
                FS
              </span>
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-bold text-slate-900 truncate">Fariz Əsədzadə</span>
                  <span class="hidden sm:inline-block text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">Sillabus</span>
                </div>
                <p class="text-xs text-slate-500 truncate hidden sm:block">Full-Stack Web Development</p>
              </div>
            </a>
          </div>

          <!-- Search & Actions -->
          <div class="flex items-center gap-3 flex-1 max-w-md justify-end">
            <!-- Search Input -->
            <div class="relative w-full max-w-xs">
              <input 
                id="search-input" 
                type="text" 
                placeholder="Mövzu və ya dərs axtar... (/)" 
                value="${state.searchQuery}"
                class="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition-all"
              />
              <svg class="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              ${
                state.searchQuery
                  ? `<button id="clear-search-btn" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold">✕</button>`
                  : ''
              }
            </div>

            <!-- PDF Download Button -->
            <a 
              href="./FullStack_Developer_Syllabus.pdf" 
              target="_blank"
              download="FullStack_Developer_Syllabus.pdf"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 transition-colors shadow-sm whitespace-nowrap"
            >
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span class="hidden sm:inline">PDF</span> Yüklə
            </a>
          </div>

        </div>
      </header>
    `;
  }

  // Component: Hero Section
  function renderHero() {
    const s = calculateStats();

    return `
      <section class="bg-white border-b border-slate-200 py-10 sm:py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 mb-4">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              9 Aylıq Peşəkar İxtisas Kursu · Fariz Əsədzadə
            </div>

            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              Full-Stack Web Development
            </h1>
            <p class="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Sıfırdan təməl veb texnologiyalarından müasir mikroservislərə, verilənlər bazalarına və canlı bulud yerləşdirməsinə (DevOps) qədər tam praktiki tədris planı.
            </p>

            <!-- Key Metrics Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
              <div class="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div class="text-2xl font-bold text-slate-900 tracking-tight">${s.totalLessons} Dərs</div>
                <div class="text-xs text-slate-500 mt-0.5">324 Tədris Saatı</div>
              </div>
              <div class="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div class="text-2xl font-bold text-slate-900 tracking-tight">${s.totalMonths} Ay</div>
                <div class="text-xs text-slate-500 mt-0.5">Həftədə 3 dərs (B.e · Ç.a · Ş.)</div>
              </div>
              <div class="p-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
                <div class="text-2xl font-bold text-emerald-800 tracking-tight">${s.reviewLessons} Review</div>
                <div class="text-xs text-emerald-700 mt-0.5">Hər modulda buffer günü</div>
              </div>
              <div class="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div class="text-2xl font-bold text-slate-900 tracking-tight">${s.tasksCount} Layihə</div>
                <div class="text-xs text-slate-500 mt-0.5">Midterm & Final daxil</div>
              </div>
            </div>

          </div>

        </div>
      </section>
    `;
  }

  // Component: Module Navigation & Filters
  function renderFilters() {
    const isAll = state.selectedFilter === 'all';
    const isReview = state.selectedFilter === 'review';

    return `
      <div class="sticky top-16 z-30 bg-slate-50/95 backdrop-blur-md border-b border-slate-200 py-3">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 text-xs font-medium">
            <span class="text-slate-400 font-semibold uppercase tracking-wider text-[11px] mr-1 hidden md:inline">Filter:</span>
            
            <button 
              data-filter="all" 
              class="filter-tab px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                isAll ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }"
            >
              Bütün Modullar (${modules.length})
            </button>

            <button 
              data-filter="review" 
              class="filter-tab px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                isReview ? 'bg-emerald-700 text-white shadow-sm' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
              }"
            >
              🔄 Təkrar / Buffer Dərsləri (8)
            </button>

            <div class="h-4 w-px bg-slate-300 mx-1 flex-shrink-0"></div>

            ${modules
              .map((m) => {
                const isSelected = String(state.selectedFilter) === String(m.number);
                return `
                  <button 
                    data-filter="${m.number}" 
                    class="filter-tab px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                      isSelected ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                    }"
                  >
                    M${m.number}: ${m.title.split('+')[0].split('with')[0].trim()}
                  </button>
                `;
              })
              .join('')}

          </div>
        </div>
      </div>
    `;
  }

  // Component: Lesson Card
  function renderLessonCard(item) {
    const isConcept = item.type === TYPE.CONCEPT;
    const isReview = item.type === TYPE.REVIEW;

    let cardBorder = 'border-slate-200 bg-white hover:border-slate-300';
    let badgeHtml = '';

    if (isReview) {
      cardBorder = 'border-emerald-300/80 bg-emerald-50/20 hover:border-emerald-400';
      badgeHtml = `
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Dərs ${item.id} · Təkrar & Buffer
        </span>
      `;
    } else if (isConcept) {
      cardBorder = 'border-amber-300/80 bg-amber-50/20 hover:border-amber-400';
      badgeHtml = `
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
          💡 Nəzəri Giriş (Kod Yoxdur)
        </span>
      `;
    } else {
      badgeHtml = `
        <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
          Dərs ${item.id}
        </span>
      `;
    }

    return `
      <div class="rounded-xl border ${cardBorder} p-4 sm:p-5 flex flex-col justify-between transition-all duration-150 shadow-xs">
        <div>
          <!-- Header -->
          <div class="flex items-center justify-between gap-2 mb-2">
            ${badgeHtml}
            <span class="text-[11px] text-slate-500 font-medium">
              ${item.day || 'Xüsusi Dərs'}
            </span>
          </div>

          <div class="text-[11px] text-slate-400 mb-3.5 flex items-center justify-between">
            <span>${item.week || ''}</span>
            <span>${isConcept ? 'Mühazirə' : (isReview ? 'Buffer & Q&A' : '3 Saat')}</span>
          </div>

          <!-- Topics -->
          <ul class="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
            ${item.topics
              .map((t) => {
                if (t.includes('Özünü Öyrənmə')) {
                  const cleanText = t.replace('💡 Özünü Öyrənmə Materialı: ', '').replace('💡 Özünü Öyrənmə: ', '');
                  return `
                    <li class="flex items-start gap-2 pt-1 border-t border-emerald-100/80 text-emerald-900 font-medium">
                      <span class="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-200 text-emerald-900 flex-shrink-0 mt-0.5">
                        Özünü Öyrənmə
                      </span>
                      <span>${cleanText}</span>
                    </li>
                  `;
                }
                return `
                  <li class="flex items-start gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0 mt-1.5"></span>
                    <span>${t}</span>
                  </li>
                `;
              })
              .join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Component: Task / Project Card
  function renderTaskCard(item) {
    const isFinal = item.type === TYPE.FINAL;
    const isMidterm = item.type === TYPE.MIDTERM;

    const badgeText = isFinal ? '🏆 Final Layihəsi' : isMidterm ? '⭐ Orta Dönem Layihəsi' : '📋 Modul Tapşırığı';
    const borderStyle = isFinal
      ? 'border-amber-300 bg-amber-50/40 text-slate-900'
      : isMidterm
      ? 'border-indigo-300 bg-indigo-50/40 text-slate-900'
      : 'border-slate-300 bg-slate-100/60 text-slate-900';

    return `
      <div class="col-span-full rounded-xl border ${borderStyle} p-5 sm:p-6 shadow-xs mt-2">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div class="flex items-center gap-2.5">
            <span class="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-800 shadow-xs">
              ${badgeText}
            </span>
            <h4 class="text-base sm:text-lg font-bold text-slate-900">${item.title}</h4>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 self-start sm:self-auto">
            ⏱ Müddət: ${item.duration}
          </span>
        </div>

        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          ${item.description}
        </p>

        ${
          item.skills && item.skills.length > 0
            ? `
          <div class="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-200/60">
            <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mr-1">Tələb olunan biliklər:</span>
            ${item.skills
              .map(
                (skill) =>
                  `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-white border border-slate-200 text-slate-700">${skill}</span>`
              )
              .join('')}
          </div>
        `
            : ''
        }
      </div>
    `;
  }

  // Component: Module Section
  function renderModuleSection(mod) {
    const regularLessons = mod.items.filter((i) => i.type === TYPE.LESSON || i.type === TYPE.REVIEW);

    return `
      <section id="module-${mod.number}" class="mb-14 scroll-mt-28">
        
        <!-- Module Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-slate-200">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                Modul ${mod.number}
              </span>
              <span class="text-xs font-medium text-slate-500">
                ${mod.month}
              </span>
            </div>
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              ${mod.title}
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              ${mod.subtitle}
            </p>
          </div>

          <div class="text-xs text-slate-500 font-medium whitespace-nowrap self-start sm:self-auto">
            ${regularLessons.length} Dərs · ${mod.weeks}
          </div>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${mod.items
            .map((item) => {
              if ([TYPE.TASK, TYPE.MIDTERM, TYPE.FINAL].includes(item.type)) {
                return renderTaskCard(item);
              }
              return renderLessonCard(item);
            })
            .join('')}
        </div>

      </section>
    `;
  }

  // Empty state when search yields no result
  function renderEmptyState() {
    return `
      <div class="text-center py-20 px-4">
        <div class="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center mx-auto mb-3 text-lg font-bold">
          ?
        </div>
        <h3 class="text-base font-bold text-slate-900 mb-1">Uyğun dərs tapılmadı</h3>
        <p class="text-xs text-slate-500 max-w-sm mx-auto mb-4">
          "<strong>${state.searchQuery}</strong>" sorğusuna uyğun heç bir mövzu və ya dərs aşkar edilmədi.
        </p>
        <button id="reset-search-btn" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors">
          Axtarışı təmizlə
        </button>
      </div>
    `;
  }

  // Component: Footer
  function renderFooter() {
    return `
      <footer class="bg-white border-t border-slate-200 py-10 text-xs text-slate-500 mt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p class="font-bold text-slate-800 text-sm">Full-Stack Development Tədris Planı</p>
            <p class="mt-0.5 text-slate-500">Müəllim: ${COURSE.instructor} · 9 Aylıq (108 Dərslik) Proqram</p>
          </div>
          <div class="flex items-center gap-4">
            <a href="./FullStack_Developer_Syllabus.pdf" target="_blank" class="hover:text-slate-900 underline underline-offset-4">PDF Sənədi</a>
            <span class="text-slate-300">·</span>
            <span>Həftədə 3 gün · Hər dərs 3 saat</span>
          </div>
        </div>
      </footer>
    `;
  }

  // Main Render Function
  function render() {
    try {
      const app = document.getElementById('app');
      if (!app) return;

      const filtered = getFilteredModules();

      app.innerHTML = `
        ${renderNavbar()}
        ${renderHero()}
        ${renderFilters()}
        
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[50vh]">
          ${filtered.length > 0 ? filtered.map(renderModuleSection).join('') : renderEmptyState()}
        </main>

        ${renderFooter()}
      `;

      attachEventListeners();
    } catch (err) {
      console.error('Render error:', err);
      const app = document.getElementById('app');
      if (app) {
        app.innerHTML = `
          <div class="p-8 text-center text-red-600">
            <h2 class="text-lg font-bold">Xəta baş verdi</h2>
            <p class="text-sm mt-1">${err.message}</p>
          </div>
        `;
      }
    }
  }

  // Attach DOM Event Listeners
  function attachEventListeners() {
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        render();
        // Retain focus and cursor position
        const updatedInput = document.getElementById('search-input');
        if (updatedInput) {
          updatedInput.focus();
          updatedInput.setSelectionRange(updatedInput.value.length, updatedInput.value.length);
        }
      });
    }

    // Clear search button
    const clearBtn = document.getElementById('clear-search-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.searchQuery = '';
        render();
      });
    }

    // Reset search from empty state
    const resetBtn = document.getElementById('reset-search-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.searchQuery = '';
        render();
      });
    }

    // Filter tab buttons
    document.querySelectorAll('.filter-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        const filterVal = tab.getAttribute('data-filter');
        state.selectedFilter = filterVal;
        render();
      });
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Press '/' to search
    if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
      e.preventDefault();
      const input = document.getElementById('search-input');
      if (input) input.focus();
    }
    // Press 'Escape' to clear search
    if (e.key === 'Escape' && state.searchQuery) {
      state.searchQuery = '';
      render();
    }
  });

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
