# react-mui-wrapper-tests t01
Experiments in React / TypeScript with wrapping MUI components

See [main branch ReadMe](https://github.com/TonyGravagno/react-mui-wrapper-tests/tree/main) for general info

### Branch t02 2023/08/15

Simplified approach from t01. Wrap both HTML5 and MUI but be less rigorous.

I'm liking this one.

- In TestForm1.tsx the controls do not shout "wrapper".
- The code is concise.
- Each component has a folder, not just a file, so types, styling, and other details have a good home.
- Config data is validated and comes from a single component.
- To swap between 'mui' and 'html' just go to src/app.config.json and change the value of 'toolkit'. If the this or any other value is bad, config.ts returns an empty config and all of the components return null.

I'm branching this to t03 to continue expanding on it.

