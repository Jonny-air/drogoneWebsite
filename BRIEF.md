# DroGone Website Clone Brief

Clone the website at https://www.drogone.com/ as a static HTML/CSS/JS site. All images/assets are already downloaded in the `assets/` directory.

## Site Structure

Single-page website with these sections (in order, scrolling):

### 1. Navigation Bar (fixed top, dark/transparent)
- DroGone logo on the left: `assets/logos/drogone-logo-white.png`
- Nav links: Product, Team, Partner, Contact, Focus Project, Ethics
- Each link scrolls to the corresponding section

### 2. Hero Section
- Full-width banner image: `assets/images/hero-banner.jpg`
- Title overlay: "Autonomous Counter Drone Systems"
- Dark overlay on the image for text readability

### 3. Product Section (id="product")
Three feature cards side by side (dark background, light text):

**Card 1: "Non Destructive Catches"**
- Subtitle: "No more drones falling out of the sky."
- Text: "The DroGone catching mechanism prevents harm to anyone on the ground by securing the target, while causing minimal or no damage to it."
- Image: `assets/images/catching-render.png`

**Card 2: "Fully Autonomous"**
- Subtitle: "Take a break."
- Text: "Once DroGone knows an estimated position of the target drone, it can autonomously catch it and return to its base station with the target in-net."
- Image: `assets/images/autonomous-drone.jpg`

**Card 3: "Readily Supervised"**
- Subtitle: "The human is always first in command."
- Text: "To enable supervision of the system, a user interface (UI) provides a live video stream from the catch and extensive information to the supervisor. Via the UI the catching process can be approved, or aborted at any time."
- Image: `assets/images/gui-tablet-mockup.png`

Below the cards: "Developed At" with ETH Zurich logos:
- `assets/partners/eth-zurich.png`
- `assets/partners/eth-asl.png`

### 4. Team Section (id="team")
- Title: "The Team"
- 5 team member cards in a row, each with:
  - Circular photo
  - Name below
  - LinkedIn link

Team members:
1. Nasib Naimi - `assets/team/nasib-naimi.jpg` - https://www.linkedin.com/in/nasibnaimi/
2. Luca Strässle - `assets/team/luca-straessle.jpg` - https://www.linkedin.com/in/luca-str%C3%A4ssle-9926a5184/
3. Jonathan Becker - `assets/team/jonathan-becker.png` - https://www.linkedin.com/in/jonathan-becker-b768b1193/
4. Maurice Brunner - `assets/team/maurice-brunner.png` - https://www.linkedin.com/in/felix-stadler-99970a1a6/
5. Julius Fricke - `assets/team/julius-fricke.png` - https://www.linkedin.com/in/felix-stadler-99970a1a6/

### 5. Partners Section (id="partner")
- Title: "In Collaboration With"
- Row of partner logos (linked):
  1. Aurora Aero - `assets/partners/aurora.png` - https://www.aurora-aero.ch/
  2. Armasuisse - `assets/partners/armasuisse.png` - https://www.ar.admin.ch/
  3. Wyss Zurich - `assets/partners/wyss-zurich.png` - https://www.wysszurich.uzh.ch/
  4. Lightly - `assets/partners/lightly.png` - https://lightly.ai
  5. Radiate - `assets/partners/radiate.png` - https://radiate.ch
  6. Kantonspolizei Zürich - `assets/partners/kantonspolizei-zurich.png` - https://www.zh.ch/de/sicherheitsdirektion/kantonspolizei-zuerich.html

### 6. Contact Section (id="contact")
- Title: "Stay Updated"
- Subtitle: "Request a Demo"
- Text: "Or get in touch to discuss ideas, questions or what type of coffee is the best."
- "Request A Demo" button (can link to mailto: or a placeholder)

### 7. Focus Project Section (id="focus-project")
- Title: "The Focus-Project"
- Text: "DroGone began as a focus-project at ETH Zürich, with the vision of developing a non-destructive anti-drone system, capable of intercepting illicit drones and securely retrieving them. This would allow DroGone to engage with drones in public settings, e.g. over open-air festivals, large-scale sporting events and the like, without risking injury of citizens by falling objects."
- Subtitle: "Final Focus-Project Trailer"
- YouTube embed placeholder (channel: https://www.youtube.com/channel/UChOKvaOu-O4QjJgFf3XLHcA) — use a placeholder with the thumbnail `assets/images/focus-project-thumbnail.jpg`

### 8. Ethics Section (id="ethics")
- Title: "Ethics"
- Text: "DroGone wants to promote a safer world, therefore we value the following principles:"
- Bullet points:
  - "Our technology does in no way enable nor is it involved in harming people."
  - "Our technology cannot be used for applications other than what it was designed for."

### 9. Footer
- Simple dark footer with copyright

## Design Guidelines
- **Color scheme**: Dark theme (dark navy/black backgrounds: ~#1a1a2e or similar), white text, accent color from the DroGone brand
- **Typography**: Clean sans-serif (use Inter or similar from Google Fonts)
- **Style**: Modern, professional, tech/defense industry feel. Smooth scroll between sections
- **Responsive**: Mobile-friendly
- **Animations**: Subtle fade-in on scroll for sections (optional, keep it light)

## Technical Requirements
- Pure HTML/CSS/JS (no frameworks, no npm, no build tools)
- Single `index.html` file with linked `style.css` and `script.js`
- All assets referenced from the `assets/` directory
- Clean, semantic HTML5

## What NOT to do
- Do NOT install any npm packages or frameworks
- Do NOT run git push
- DO commit when finished
