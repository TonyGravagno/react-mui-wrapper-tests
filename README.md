# react-mui-wrapper-tests t05
Experiments in React / TypeScript with wrapping MUI components

See [main branch ReadMe](https://github.com/TonyGravagno/react-mui-wrapper-tests/tree/main) for general info

### Branch t04 2023/08/17

#### Rework wrappers from t04

To fix the issues in t04 and try to simplify the wrappers I'm rewriting how the wrappers do their thing.

This branch might be the go forward branch, or I might go back to t04 and create t06 from there.

**From t04 :**

- Rather than continuing with TestForm3 for branch t04, I created TestForm04 and will follow that pattern from now on.
- The property filtering is too aggressive. It's removing valid props. For example, `disabled` on TextField and Input. For now I made that specific test case and some others explicit values, but that shouldn't be the policy for all such properties.
- Fields aren't accepting input. Something is wrong with the onChange and state settings. \:\(
- The plan is to fix those issues while adding a few more components.