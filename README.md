# react-mui-wrapper-tests t03
Experiments in React / TypeScript with wrapping MUI components

See [main branch ReadMe](https://github.com/TonyGravagno/react-mui-wrapper-tests/tree/main) for general info

### Branch t03 2023/08/15

#### Expanding on t02

- Moved TestForm1 into folder like components, and added TestForm2.
- index.ts is required in these folders to export the contents of the code folders. I'm going to look at reducing down to a single index.ts for all forms, another for all components, etc.
- Added TextArea : In HTML the Textarea and Input tags are separate. In MUI it's the same TextField with a `multiline` flag. Rather than getting the TextField wrapper here to generate either Input or Textarea, I opted to create a separate TextArea component. The reasoning is that everyone has HTML as a base and recognizes the two tags/components as performing different functions, but only someone familiar with MUI would know the single TextField component does double duty. If I added another library later that uses two components, I wouldn't want this library to persist that MUI paradigm for no reason other than it's easier to implement.
- All that said, the TextField is documented as a compound component for convenience. It might be better if this library didn't even use that, but preferred to use the nested subcomponents. I might do both, dunno yet.
- A lot was done to faciliate the conversion of properties from my generic/Local format to the core properties used for each UI library. Function 'filterProperties' removes everything from one object that is not defined (with Types) in another object.
- The purpose of the function named 'Fields' was to decide which UI library to use and then output the controls for tht library. That code was pretty much duplicated in each component, so I abstracted it out to RenderingAgent.
- App.tsx was made a little more generic.

#### Summary for t03

It's been tough to add just one new component, but that has helped to define the patterns for the others. I expect the next components to be easier and for similar refactoring to be required.

It's interesting and rewarding to see the code getting smaller in some areas as I abstract out common functionality. This is making the UI components amazingly small and consistent. That's what I've been looking for. This does come at the expense of some dependencies on other files and some "wiring", but I'd rather wire up components that deal with duplicate code, or the same problems presented and addressed in different ways in every component.

One thing that I forgot was that HTML components aren't actually HTML, but React wrappers around the core HTML ... and then I'm wrapping the wrappers. It seems some convenience defaults have been selected in React and I'm wondering if I should try to get all defaults to agree. For example, the default React.textarea has a resize option set, but TextField does not. I don't want features like this to change if the library is switched. So I might be committed to supporting the HTML components if only to catch and modify those defaults or the MUI defaults on a case by case basis. Ugh. 

As of 2023/08/16, I'm wrapping up this branch. It's working. I'm happy with it. I'm moving to t04.