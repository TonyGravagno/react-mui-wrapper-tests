# react-mui-wrapper-tests t06
Experiments in React / TypeScript with wrapping MUI components

See [main branch ReadMe](https://github.com/TonyGravagno/react-mui-wrapper-tests/tree/main) for general info

### Branch t06 2023/08/18 : Attempt better defaults mechanism

After a successful t05 I tried to add control defaults into the control file .json. It was a bad initiative and resulted in t05a\_bad. I'm taking another crack at it here in t06.

- Added new defaults.tsx to all components. Seems reduntant with Component.tsx files and will probably be pulled back into that file to reduce cross-file overhead.
