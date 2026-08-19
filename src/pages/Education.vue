<template>
  <div class="edu-shell font-sans md:ml-64 p-6 md:p-12 transition-colors duration-500 min-h-screen" :class="{ 'light-mode': isLightOn }">
    <div class="max-w-3xl mx-auto mt-16 md:mt-0">

      <header class="mb-16">
        <h1 class="font-dossier text-3xl md:text-5xl font-bold tracking-wider text-gray-100 theme-heading transition-colors duration-500">
          [ EDUCATIONAL BACKGROUND ]
        </h1>
        <p class="font-dossier text-gray-400 theme-subheading mt-2 transition-colors duration-500">
          A LINEAR WALKTHROUGH OF MY EDUCATION
        </p>
      </header>

      <div class="timeline relative">
        <div
          v-for="(entry, index) in education"
          :key="entry.school"
          class="timeline-item relative pl-10 md:pl-12"
          :class="{ 'is-last': index === education.length - 1 }"
        >
          <span class="dot theme-dot" :class="{ 'dot-current': entry.current }"></span>

          <div class="pb-14">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 class="font-dossier text-lg md:text-xl tracking-wide theme-title transition-colors duration-500">
                {{ entry.level }}
              </h2>
              <span class="font-mono text-xs tracking-widest theme-year transition-colors duration-500">
                {{ entry.year }}
              </span>
            </div>

            <h3 class="font-sans text-base md:text-lg font-bold mt-1 theme-school transition-colors duration-500">
              {{ entry.school }}
            </h3>

            <p v-if="entry.detail" class="font-sans text-sm mt-1 theme-detail transition-colors duration-500">
              {{ entry.detail }}
            </p>

            <span v-if="entry.current" class="current-tag font-mono text-[10px] tracking-widest uppercase mt-3 inline-block">
              in progress
            </span>

            <!-- Honors -->
            <div v-if="entry.honors && entry.honors.length" class="mt-4">
              <p class="font-mono text-[10px] tracking-widest uppercase theme-label mb-1.5">Honors</p>
              <ul class="space-y-1">
                <li
                  v-for="item in entry.honors"
                  :key="item"
                  class="font-sans text-sm theme-detail transition-colors duration-500 flex gap-2"
                >
                  <span class="theme-year">—</span>{{ item }}
                </li>
              </ul>
            </div>

            <!-- Awards -->
            <div v-if="entry.awards && entry.awards.length" class="mt-4">
              <p class="font-mono text-[10px] tracking-widest uppercase theme-label mb-1.5">Awards</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="item in entry.awards"
                  :key="item"
                  class="award-chip font-mono text-[11px] px-2.5 py-1 rounded-md"
                >
                  {{ item }}
                </span>
              </div>
            </div>

            <!-- Roles -->
            <div v-if="entry.roles && entry.roles.length" class="mt-4">
              <p class="font-mono text-[10px] tracking-widest uppercase theme-label mb-1.5">Roles & Organizations</p>
              <ul class="space-y-1">
                <li
                  v-for="item in entry.roles"
                  :key="item"
                  class="font-sans text-sm theme-detail transition-colors duration-500 flex gap-2"
                >
                  <span class="theme-year">—</span>{{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { isLightOn } from '../theme.js';

const education = [
  {
    level: 'College',
    school: 'University of the Philippines Cebu',
    detail: 'BS Computer Science - 3rd Year',
    year: '2024 — Present',
    current: true,
    honors: [
      'First Year, First Semester: University Scholar',
      'First Year, Second Semester: University Scholar',
      'Second Year, First Semester: University Scholar',
      'Second Year, Second Semester: University Scholar'
    ],
    roles: [
        'OWWA Education for Development Scholarship Program (EDSP) Scholar ',
      'Member, UP Computer Science Guild',
      'Secretary-General, UNISO (2025 - 2026)', 
      'Election Committee, UPCSG (2025 - 2026)'
    ]
  },
  {
    level: 'Senior High School',
    school: 'Cebu Institute of Technology - University',
    year: '2022 — 2024',
    current: false,
    honors: [
      'Grade 11: With Honors (Top 16 Overall)',
      'Grade 12: With High Honors (Top 5 Overall)'
    ],
    awards: [
      'SSC Awardee',
      'Special Research Merit Awardee'
    ],
    roles: [
      'Member, Committee on Liaison - SHS Supreme Student Council, 7th Congress',
      'Head of Finance, The Technologian Quills',
      'Editorial Writer, The Technologian Quills',
      'Councilor, Commission on Elections (COMELEC)',
      'Vice President, 11 - Competence'
    ]
  },
  {
    level: 'Junior High School',
    school: 'Exceed Learning Center JHS',
    year: '2018 — 2022',
    current: false,
    honors: [
      'With High Honors (Top 1)',
      'Consistent Top Student'
    ],
    awards: [
      'Best in Math',
      'Best in Science',
      'Best in Araling Panlipunan',
      'Best in Filipino',
      'Best in English',
      'Computer Wizard of the Year',
      'Best in Baby Thesis',
      'Achievement Awardee',
      'Academic Excellence Awardee',
      'National Schools Press Conference (NSPC) Qualifier',
      'PASIKLABAN, 2nd Placer',
      'Central Visayas Regional Athletic Association (CVIRAA) Qualifier — Badminton Singles'
    ]
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Inter:wght@400;500;700&display=swap');

.font-dossier { font-family: 'Special Elite', monospace; }
.font-sans { font-family: 'Inter', sans-serif; }

.edu-shell {
  background-color: #000000;
  color: #d1d5db;
}

/* ---------- Timeline ---------- */
.timeline {
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  margin-left: 4px;
}

.timeline-item.is-last {
  border-left-color: transparent;
  margin-left: -1px;
  padding-left: calc(2.5rem + 1px);
}

.dot {
  position: absolute;
  left: -5px;
  top: 4px;
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #6b7280;
  transition: background 0.4s ease, box-shadow 0.4s ease;
}

.dot-current {
  background: #60a5fa;
  box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.18);
}

.theme-title { color: #f3f4f6; }
.theme-school { color: #ffffff; }
.theme-year { color: #6b7280; }
.theme-detail { color: #9ca3af; }
.theme-label { color: #6b7280; }

.current-tag {
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.35);
  background: rgba(96, 165, 250, 0.08);
  padding: 3px 10px;
  border-radius: 999px;
}

.award-chip {
  color: #a1a1aa;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
}

/* ---------- LIGHT MODE OVERRIDES ---------- */
.edu-shell.light-mode {
  background-color: #c7bea9;
}

.light-mode .theme-heading {
  color: #000000 !important;
}

.light-mode .theme-subheading {
  color: #1f2937 !important;
}

.light-mode .timeline {
  border-left-color: rgba(43, 40, 36, 0.2);
}

.light-mode .dot {
  background: #8a8272;
}

.light-mode .dot-current {
  background: #b45309;
  box-shadow: 0 0 0 4px rgba(180, 83, 9, 0.15);
}

.light-mode .theme-title { color: #2b2824; }
.light-mode .theme-school { color: #1a1712; }
.light-mode .theme-year { color: #7a7364; }
.light-mode .theme-detail { color: #55503f; }
.light-mode .theme-label { color: #7a7364; }

.light-mode .current-tag {
  color: #b45309;
  border-color: rgba(180, 83, 9, 0.35);
  background: rgba(180, 83, 9, 0.08);
}

.light-mode .award-chip {
  color: #4a453f;
  border-color: rgba(43, 40, 36, 0.15);
  background: rgba(255, 255, 255, 0.35);
}
</style>