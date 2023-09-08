# react-mui-wrapper-tests  : Branch rhf00 : 2023/09/08 
Experiments in React / TypeScript with wrapping MUI components

## History

<details>
<summary>Original goal</summary> 

In this React/TypeScript project we have wrapper components which encapsulate both core React and MUI components. From a config file we can toggle the app instantly between React core or MUI. So you have an app with a React core UI and you might want to publish the exact same app with MUI components to a different audience. Your forms use a common component structure, so `<FieldText>` will switch to `<TextField>` if you want MUI, or `<input>` for React core. This is exactly the kind of abstraction that is already used in MUI and other platforms like Xamarin, where the goal is to have one code set for cross-platform deployment. There are always issues along the way with such platforms - each has its own value and challenges.

The reason for starting this project wasn't to create a new and better wrapper library, but to create an insurance policy in case MUI got deprecated or suddenly went out of favor for some reason. Then the switch could toggle to React core and the application would continue to run until a new library could be coded into the wrappers ... and ideally nothing would need to change in the forms themselves because of their platform-agnostic coding.

Here are samples from this project where a chosen set of controls was able to render as either React core or MUI with a simple toggle in a config file:

![Screenshot of React UI](readme-assets/image.png) 
![Screenshot of MUI](readme-assets/image-1.png)

</details>

This effort was very successful and anyone can see the progress in the ReadMe on each branch T01 to T08.

<details>
<summary>Switch in focus</summary> 

After T09 I decided to refocus, away from the dual nature of the wrapper components, to just wrapping each MUI component. See the explanation for the change in the T09 ReadMe. T08 started this new initiative (that was really the ultimate goal anyway). Because after T08 I stopped the dual wrapper concept and the "trajectory" of the T series of branches was about to change, I stopped the T series and moved T08 to RHF00 to start on this new path.

</details>

## Current Goal

The current goal of this project is to wrap MUI components with React Hook Form (RHF) functionality, to significantly minimize the amount of code that goes in individual forms. With Zod schema to define field properties, this means the average form field might be represented with only the following syntax:  
`<FieldText name="foo" />`
The FieldText component not only wrapps the Mui TextField, but hooks with RHF which then hooks to the parent form for field validation, form submission, and other features.  
The form can then focus on its own formatting, not the nuances of the fields that it contains.

This project integrates with another project where I generate Zod Schema from a RDBMS (like MySQL), then generate entity/table components and maintenance forms from that. There might be a hundred fields like `<FieldText name="foo" />` generated into a form module, and from there the only manual effort is in formatting with Grid, Table, Stack, Div, or whatever UI mechanisms are preferred.

To faciliate the integration from this code to that code, this code needs to be somewhat opinionated, relying on control files, components, types, and other mechanisms that include details for applications that were created by the other generation software. So while I welcome contributions to this package, I understand that repurposing this code elsewhere might be a challenge. I'm offering this to help others form a base for their own similar projects, but I do not expect this to ever be a drop-in framework dependency for any project, not even my own.

Please feel free to post issues with bug and enhancement reports, but please do not code with intent to PR unless we've already discussed it.