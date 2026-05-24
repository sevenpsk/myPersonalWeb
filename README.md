# Seven Yuenyang — Portfolio Website

A highly polished, interactive single-page portfolio website representing the dual professional identity of **Seven Yuenyang**: a technical **Enterprise & Solution Architect** paired with a vibrant **Thai-Australian Broadcast Host & Storyteller**.

The platform is designed around a premium, modern editorial light aesthetic with high contrast, technical blueprint patterns, and responsive micro-animations.

---

## 🎨 Design & Aesthetic System

The website implements a carefully curated technical design system utilizing custom variables in Vanilla CSS:

*   **Primary Canvas Background:** `#FAF8F6` (Warm Alabaster / Soft Beige) blended with a faint, structural blueprint grid pattern in Sage Green (`rgba(108, 139, 116, 0.02)`) that represents technical precision.
*   **Typography:** Editorial headings in Obsidian Charcoal (`#1A1A1A`) and high-legibility body text in Charcoal Gray (`#333333`) using the `Outfit` and `Space Mono` Google Fonts.
*   **Visual Panels:** Pure Alabaster White (`#FFFFFF`) cards detailed with ultra-thin warm borders (`#EAE6E3`) and extremely soft drop shadows.
*   **Theme Accents:** 
    *   **Muted Sage Green** (`#6C8B74` / `var(--accent-color)`) anchoring high-level enterprise architecture, systems engineering, and solution specs.
    *   **Sunset Orange / Amber** (`#FF8E3C` / `var(--accent-secondary)`) highlighting creative broadcasting, community spotlight, and radio media.

---

## 🧭 Core Sections & Interactive Components

### 1. ID (Hero Canvas)
Introduces Seven Yuenyang as a Brisbane-based Enterprise & Solution Architect with over six years of IT experience, weekly radio hosting, and a direct Systems Spec Sheet scroll action.

### 2. PROFILE (Credentials & Executive Summary)
*   **Narrative Card:** A double-column card detailing Seven's corporate experience and storytelling passions.
*   **Active Cloud Credentials Panel:** Integrates verification keys, years, and levels for:
    *   *AWS Solutions Architect Associate (2024)* | `f82a85d4bcd94e92ab7e6d15fa53efa5`
    *   *Azure Fundamentals (2024)* | `41068CE4E3A10820`
    *   *AWS Cloud Practitioner (2022)* | `NTCPF151YNF4QWGE`
*   **Technical Achievement Metrics:** Hover-interactive panels highlighting users migrated, IT experience years, and corporate high performer honors.
*   **Education Hub:** Clear listings of Swinburne University MBIS and King Mongkut's University of Technology Thonburi Bachelor degrees.

### 3. CREATIVE (Broadcast Studio Spotlight)
*   **Sawasdee Australia Thai Radio Tracker:** Integrates a live, UTC+10 local AEST Brisbane time zone countdown calculation. Automatically toggles a pulsing **"ON AIR NOW"** status badge every Thursday from 6:00 PM to 7:00 PM QLD local time.
*   **On-Demand Show Hub:** A gorgeous, glassmorphic archive panel linking directly to your Thai Radio show archives on the official 4EB website. It features an interactive, CSS-animated soundwave that dynamically dances on hover and custom content pill tags highlighting show topics.

### 4. TIMELINE (Unified Professional Journey)
A single, consolidated, chronological journey representing your IT progression seamlessly merged with your weekly broadcast radio storytelling milestones, eliminating complex filters for an ultra-fast loading speed.

### 5. CONNECT (Social Connect Grid)
A grid of six glassmorphic, interactive platform cards representing your professional email and verified media platforms (LinkedIn, YouTube, TikTok, Instagram, and Facebook). Hovering over each card scales the card slightly, glows the border, and reveals custom sidebar branding colors (e.g. Red for YouTube, Blue for LinkedIn).

---

## 🛠️ Technology Stack

The codebase is built entirely using high-performance, vanilla, standard-compliant static frontend technologies, ensuring sub-second load times and zero compilation pipelines:

1.  **HTML5**: Structural elements leveraging semantic tags (nav, main, section, footer), and offline preconnect asset caching.
2.  **CSS3**: Custom design tokens, complex bezier transformations, absolute layout grid rules, hover-triggered ambient soundwave pulse animations, and responsive media queries.
3.  **JavaScript (ES6+)**: Custom DOM selectors, and UTC+10 clock interval mathematical operations for live show countdown tracking.

---

## 🚀 Running the Project Locally

Since the project uses entirely native static frontend code, you can run it instantly on any system without downloading npm dependencies:

### Option A: Python Server (Recommended)
Open your terminal in the project directory and run:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

### Option B: Node Static Server
If you have Node.js installed, you can use any static server library like `serve`:
```bash
npx serve ./
```

### Option C: Direct Open
Simply double-click the `index.html` file in your operating system's file manager to open it directly in any modern browser.
