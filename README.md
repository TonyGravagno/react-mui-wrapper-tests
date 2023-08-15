# react-mui-wrapper-tests
Experiments in React / TypeScript with wrapping MUI components

I'm creating new projects that have a strong UI focus. I don't want to mess too much with styling right now, but I want decent styling during the development process. So I want tooling that is better than core HTML5, but I don't want to embed library-specific nuances in app code, because the library might change as an app matures. So I've created this project, with test forms that use wrapped components. The actual components used will be decided at runtime - for now, maybe build-time later.

As an example, a TestForm will have a simple TextBox and SubmitButton. Those are local components that wrap MUI and HTML5. Based on a config setting, if using MUI, the rendered components will be the MUI `TextField` and `Button`. If using HTML, the rendered components will be `input` and `button`.

Branches are not intended to eventually merge, they are unique approaches to accomplishing similar tasks. Each branch of this repo has a different approach to this challenge. I'll try to complete each branch so that it's actually working as intended to do specific testing, but I expect some failures and dead branches along the way. I'll try to update the ReadMe of each branch with the status.

Which one will I use for real projects? I have no clue yet. I'll document the candidates here as I move forward.

### Branch t01 2023/08/15
Works but is very sloppy. It's too rigorous and will require too much effort to keep up the wrapper / adapter / decorator / facade approach. (I need to define the correct design pattern that I'm attempting to utilize.)

### Branch t02 2023/08/15
Simpler approach, WIP.

