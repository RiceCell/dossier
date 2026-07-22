<template>
  <div
    ref="rootEl"
    class="pull-switch"
    :class="{ 'is-on': isLightOn, 'is-dragging': dragging }"
    role="button"
    tabindex="0"
    :aria-pressed="isLightOn"
    aria-label="Pull the cord to toggle the lights"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerCancel"
    @keydown.enter.prevent="tapToggle"
    @keydown.space.prevent="tapToggle"
  >
    <!-- ceiling mount -->
    <span class="mount">
      <span class="bulb-glow"></span>
    </span>

    <!-- the cord is fully physics-driven: idle pendulum drift + drag-following + spring release -->
    <span ref="cordEl" class="cord">
      <span class="bead" v-for="n in 6" :key="n"></span>

      <span class="knob">
        <span class="knob-ring"></span>
        <span class="knob-shine"></span>
      </span>
    </span>

    <span class="switch-label font-dossier">
      {{ isLightOn ? 'LIGHTS OFF' : 'LIGHTS ON' }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  isLightOn: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle'])

const rootEl = ref(null)
const cordEl = ref(null)
const dragging = ref(false)

/* ---------- physics state (mutated outside Vue's reactivity for smooth 60fps updates) ---------- */
let pullY = 0        // px, current vertical offset of the cord
let pullVel = 0
let rot = 0           // deg, current rotation of the cord (pendulum)
let rotVel = 0
let rotTarget = 0     // where the pendulum is currently drifting toward

let pointerId = null
let startX = 0
let startY = 0
let lastY = 0
let lastMoveT = 0
let dragVelY = 0      // measured px/sec while dragging, feeds the release spring
let maxReach = 0      // how far the pointer actually moved, for tap-vs-drag detection

const MAX_PULL = 70          // px of "free" travel before rubber-band resistance kicks in
const THRESHOLD = 42         // px pull needed to count as a completed pull
const TAP_EPSILON = 8        // px of total movement below which a gesture counts as a plain tap

const PULL_STIFFNESS = 260
const PULL_DAMPING = 16
const ROT_STIFFNESS = 18
const ROT_DAMPING = 3.2

let rafId = null
let lastFrameT = null
let idleTimer = null

function applyStyles() {
  const el = cordEl.value
  if (!el) return
  el.style.setProperty('--pull-y', `${pullY.toFixed(2)}px`)
  el.style.setProperty('--pull-rot', `${rot.toFixed(2)}deg`)
}

function tick(t) {
  if (lastFrameT == null) lastFrameT = t
  let dt = (t - lastFrameT) / 1000
  lastFrameT = t
  dt = Math.min(dt, 1 / 30)

  if (!dragging.value) {
    const force = -PULL_STIFFNESS * pullY - PULL_DAMPING * pullVel
    pullVel += force * dt
    pullY += pullVel * dt
    if (Math.abs(pullY) < 0.05 && Math.abs(pullVel) < 0.05) {
      pullY = 0
      pullVel = 0
    }
  }

  const rForce = -ROT_STIFFNESS * (rot - rotTarget) - ROT_DAMPING * rotVel
  rotVel += rForce * dt
  rot += rotVel * dt

  applyStyles()

  const settled =
    !dragging.value &&
    Math.abs(pullY) < 0.02 &&
    Math.abs(pullVel) < 0.02 &&
    Math.abs(rot - rotTarget) < 0.02 &&
    Math.abs(rotVel) < 0.02

  if (!settled) {
    rafId = requestAnimationFrame(tick)
  } else {
    rafId = null
    lastFrameT = null
  }
}

function ensureLoop() {
  if (rafId == null) {
    lastFrameT = null
    rafId = requestAnimationFrame(tick)
  }
}

function scheduleIdleDrift() {
  idleTimer = setTimeout(() => {
    if (!dragging.value) {
      rotTarget = Math.random() * 6 - 3
      ensureLoop()
    }
    scheduleIdleDrift()
  }, 2600 + Math.random() * 2200)
}

function rubberBand(distance) {
  if (distance <= MAX_PULL) return distance
  const extra = distance - MAX_PULL
  return MAX_PULL + extra / (1 + extra / 40)
}

function tapToggle() {
  emit('toggle')
  // a satisfying little tug even for keyboard/click-only activation
  pullVel += 260
  rotVel += (Math.random() * 30 - 15)
  ensureLoop()
}

function onPointerDown(e) {
  dragging.value = true
  pointerId = e.pointerId
  rootEl.value.setPointerCapture(pointerId)
  startX = e.clientX
  startY = e.clientY
  lastY = e.clientY
  lastMoveT = performance.now()
  dragVelY = 0
  maxReach = 0
  pullVel = 0
  ensureLoop()
}

function onPointerMove(e) {
  if (!dragging.value || e.pointerId !== pointerId) return

  const now = performance.now()
  const dt = Math.max((now - lastMoveT) / 1000, 1 / 240)
  dragVelY = (e.clientY - lastY) / dt
  lastY = e.clientY
  lastMoveT = now

  const rawDelta = Math.max(0, e.clientY - startY)
  pullY = rubberBand(rawDelta)
  maxReach = Math.max(maxReach, Math.hypot(e.clientX - startX, e.clientY - startY))

  const dx = e.clientX - startX
  rotTarget = Math.max(-10, Math.min(10, dx * 0.15))
}

function finishDrag() {
  dragging.value = false

  const wasTap = maxReach < TAP_EPSILON
  const completedPull = pullY >= THRESHOLD

  if (wasTap || completedPull) {
    emit('toggle')
  }

  pullVel = dragVelY * 0.6
  rotTarget = 0
  ensureLoop()
}

function onPointerUp(e) {
  if (e.pointerId !== pointerId) return
  try { rootEl.value.releasePointerCapture(pointerId) } catch (err) { /* noop */ }
  pointerId = null
  finishDrag()
}

function onPointerCancel(e) {
  if (e.pointerId !== pointerId) return
  pointerId = null
  dragging.value = false
  pullVel = 0
  rotTarget = 0
  ensureLoop()
}

onMounted(() => {
  applyStyles()
  scheduleIdleDrift()
})

onBeforeUnmount(() => {
  if (rafId != null) cancelAnimationFrame(rafId)
  if (idleTimer != null) clearTimeout(idleTimer)
})
</script>

<style scoped>
.font-dossier {
  font-family: 'Special Elite', monospace;
}

.pull-switch {
  position: fixed;
  top: 1rem;
  right: 1.25rem;
  width: 96px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

@media (min-width: 768px) {
  .pull-switch {
    top: 1.5rem;
    right: 2rem;
    width: 108px;
  }
}

.pull-switch:focus-visible .cord {
  filter: drop-shadow(0 0 0 2px #fff);
}

/* ---------- Ceiling mount ---------- */

.mount {
  position: relative;
  width: 34px;
  height: 14px;
  background: linear-gradient(180deg, #6b6258, #3a352e);
  border-radius: 0 0 6px 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

.bulb-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #8a8378;
  transform: translate(-50%, -50%);
  transition: background 0.4s ease, box-shadow 0.4s ease;
}

.is-on .bulb-glow {
  background: #ffd873;
  box-shadow:
    0 0 8px 2px rgba(255, 216, 115, 0.9),
    0 0 20px 6px rgba(255, 190, 60, 0.5);
}

/* ---------- Cord: driven entirely by --pull-y / --pull-rot custom properties set in JS ---------- */

.cord {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(3px + var(--pull-y, 0px) * 0.12);
  padding-top: 2px;
  transform-origin: top center;
  transform: translateY(var(--pull-y, 0px)) rotate(var(--pull-rot, 0deg));
  touch-action: none;
  cursor: grab;
}

.is-dragging .cord {
  cursor: grabbing;
}

/* beaded chain */
.bead {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: linear-gradient(160deg, #cfc7b8, #756c5c);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
}

/* ---------- Pull knob ---------- */

.knob {
  position: relative;
  width: 20px;
  height: 26px;
  margin-top: 2px;
  border-radius: 50% 50% 45% 45% / 55% 55% 45% 45%;
  background: linear-gradient(160deg, #e8dfc9, #a89a72 55%, #6f6446);
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.45),
    inset 0 1px 1px rgba(255, 255, 255, 0.4),
    inset 0 -3px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.4s ease, transform 0.15s ease;
}

.pull-switch:hover .knob {
  transform: scale(1.06);
}

.knob-ring {
  position: absolute;
  top: -4px;
  left: 50%;
  width: 8px;
  height: 8px;
  border: 2px solid #8f8368;
  border-radius: 50%;
  transform: translateX(-50%);
}

.knob-shine {
  position: absolute;
  top: 5px;
  left: 4px;
  width: 5px;
  height: 9px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  filter: blur(0.5px);
}

.is-on .knob {
  background: linear-gradient(160deg, #fff3cf, #ffcf5c 55%, #c98f2b);
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.45),
    inset 0 1px 1px rgba(255, 255, 255, 0.6),
    inset 0 -3px 4px rgba(0, 0, 0, 0.2),
    0 0 12px 2px rgba(255, 196, 77, 0.6);
}

/* ---------- Label ---------- */

.switch-label {
  margin-top: 8px;
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.55);
  color: #e5e0d5;
  white-space: nowrap;
  transition: background 0.4s ease, color 0.4s ease;
  user-select: none;
}

.is-on .switch-label {
  background: rgba(255, 216, 115, 0.15);
  color: #7a5b18;
}

@media (min-width: 768px) {
  .switch-label {
    font-size: 0.7rem;
    padding: 4px 10px;
  }
}
</style>