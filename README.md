# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# daily-catholic

Spinning up dev environment
1. Open terminal
2. Run: cd vite-daily-catholic
        npm install
        npm run dev

Branching process: TBD IF NECESSARY


When you land on the site the first thing you see is today's mystery of the rosary

Deck one
- Today's mystery of the rosary, highlighted/enlarged amoung the other mysteries
        - eg: joyful | luminous | SORROWFUL | glorious
- Clicking on the cards highlights/enlarges them and changes what's displayed in deck 2

Deck two
- The 5 mysteries of today's category
        eg: The Suffering in the Garden | The Scourging at the Pillar | The Crowning of Thorns | The Carrying of the Cross | The Crucifixion
- Mystery 1 fully opaque, the rest faded
- Clicking on the cards fades previous card and sets the selected one as opaque; also changes the text section

Text Section
- Title of the mystery
- A scripture reference for the mystery
