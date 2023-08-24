# react-mui-wrapper-tests t07
Experiments in React / TypeScript with wrapping MUI components

See [main branch ReadMe](https://github.com/TonyGravagno/react-mui-wrapper-tests/tree/main) for general info

### Branch t07 2023/08/24 : Adding controls

T06 was successful. I'm moving forward from there with T07.

The dynamic component selection between React and MUI might need changes, but it works well for now.

I also enhanced common styling, driven from the app.config.ts file. That's working well but will need ongoing tweaks.

In this branch I'm planning to add checkboxes and radio buttons. I also want to use MUI grids for formatting when MUI is in use. But when React UI us being used, I think the Grid tags need to translate to Table or CSS Grid, or something similar.

#### From T06

<hr/>

After a successful t05 I tried to add control defaults into the control file .json. It was a bad initiative and resulted in t05a\_bad. I'm taking another crack at it here in t06.

- Added new defaults.tsx to all components. Seems reduntant with Component.tsx files and will probably be pulled back into that file to reduce cross-file overhead.
- Yup, got rid of all of the defaults modules.
- Significant rework: Each component now has folders 'MUI' and 'React'. The appropriate folder should be selected at runtime. This structure eliminates a ton of issues related to prop merging, and reduces the size of the code. Though there are issues with selection of the desired library...

#### Dynamic library selection
This branch attempts to change the version of components that's used in forms by getting Vite to change paths dynamically at build time.

Unfortunately, linting is done during editing, before the build, so unless the path is correct during the edit, there might not be a build.

