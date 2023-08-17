# react-mui-wrapper-tests t05
Experiments in React / TypeScript with wrapping MUI components

See [main branch ReadMe](https://github.com/TonyGravagno/react-mui-wrapper-tests/tree/main) for general info

### Branch t05 2023/08/17

#### Rework wrappers from t04

- Wrappers have been somewhat rewritten to simplify how they work. This was a great change.
- Large blocks of Import statements irritate me so for each component I've created a dependencies.ts file which imports and exports everything that's required. Components them import the single file to a new alias D (Dependency). All imported controls then get a D.prefix. The prefix is the tradeoff for refactoring out the imports. Also, new imports need to be consciously moved to the new file. I'm not sure yet which format I prefer but so far I'm liking the D structure.
- Added Label component. MUI incorporates a label, but Input and TextArea do not, so I added the component and render that with the Input and Textarea. Label will probably be used with other controls like Radio, Checkbox, FieldGroup, etc.
- Interestingly, `TextField.label` and certainly other controls uses the underlying `Label` component, which is now my override. So for better or worse all of these label properties get processed like a dedicated Label component. This is an interesting way to hook labels for translation or formatting.
- A new @types alias leads to commonTypes.ts. This works:  
`export type { Base } from '../../types/commonTypes'`  
This sees the file but shows error:  
`export type { Base } from '@types/commonTypes'`
  > Cannot import type declaration files. Consider importing 'commonTypes' instead of '@types/commonTypes'.ts(6137)  

  Everything works, it just shows the error. I think this is a VS, Vite, or ESLint bug, will check. I'm going back to the full path for now and will look at this later.
- Fixed issues with components not accepting input. Looks like onChange wasn't typed properly.
- Standardized all components with files index, types, dependencies, and the component .tsx. All files standardized, even included a few comments. ;\)
- Added favicon.ico just to eliminate the console warning.

Moving on from here to t06

**From t04 :**

- Rather than continuing with TestForm3 for branch t04, I created TestForm04 and will follow that pattern from now on.
- The property filtering is too aggressive. It's removing valid props. For example, `disabled` on TextField and Input. For now I made that specific test case and some others explicit values, but that shouldn't be the policy for all such properties.
- Fields aren't accepting input. Something is wrong with the onChange and state settings. \:\(
- The plan is to fix those issues while adding a few more components.