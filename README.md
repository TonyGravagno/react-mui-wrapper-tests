# react-mui-wrapper-tests t08
Experiments in React / TypeScript with wrapping MUI components

See [main branch ReadMe](https://github.com/TonyGravagno/react-mui-wrapper-tests/tree/main) for general info

### Branch t08 2023/08/26 : Adding controls

T07 was a great step forward for using common properties to support both React and Mui. Everything is working so far. Screenshots below of TestForm07 with no changes rendering both React and MUI.

Note that the MUI components ultimately rely on the react components anyway so this isn't much of a stretch.

With T08+ I intend to clean up some code duplication that was introduced in 07. The goal there was first to ensure the functionality by copy/pasting code, but now I'll abstract out the common details.

![Form 07 using React](./readme-assets/image.png) ![Form07, same code, using Mui](./readme-assets/image-1.png)

