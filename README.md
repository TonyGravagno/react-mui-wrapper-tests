# react-mui-wrapper-tests t01
Experiments in React / TypeScript with wrapping MUI components

See [main branch ReadMe](https://github.com/TonyGravagno/react-mui-wrapper-tests/tree/main) for general info

### Branch t03 2023/08/15

#### Expanding on t02

- Moved TestForm1 into folder like components, and added TestForm2.
- index.ts is required in these folders to export the contents of the code folders. I'm going to look at reducing down to a single index.ts for all forms, another for all components, etc.
- Added TextArea : In HTML the Textarea and Input tags are separate. In MUI it's the same TextField with a `multiline` flag. Rather than getting the TextField wrapper here to generate either Input or Textarea, I opted to create a separate TextArea component. The reasoning is that everyone has HTML as a base and recognizes the two tags/components as performing different functions, but only someone familiar with MUI would know the single TextField component does double duty. If I added another library later, that uses two components I wouldn't want this library to persist that MUI paradigm for no reason other than it's easier to implement.
- In TextField and TextArea, rather than cherrypicking props and then passing them explictly into the Input or Textarea tags, I'm now using casting to derive the props that are relevant to the tag. This simplifies that code, though in TextArea it's a bit more rigorous because the MUI TextField props have a lot more than is required.
- App.tsx was made a little more generic.


