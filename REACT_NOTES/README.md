# React

## Parcel

Documentation : https://parceljs.org/

    - Dev Build
    - Local Server
    - HMR => Hot Module Replacement (Hot Loading)
    - File watching Algorithm (C++)
    - Caching (Faster build)
    - Image optimization
    - Minification
    - Bundling
    - Compress
    - Consisting Hashing
    - Code Splitting
    - Differential Bundling - support older browsers
    - Diagnostic
    - Error Handling
    - Https (Hosting)
    - Tree Shaking - remove unused code
    - Different build for Development and Production

## Browser List

Documentation : https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

    - It will give the info of browsers list and their worldwide usage

## IMPORTANT

    -  React : React.createElement => ReactElement-JS Object => HTMLElement(render)
    -  JSX : JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
    -  Babel(Transpiler) will convert the JSX to React Element

## React Component

-   **There are two types of components** :
    1. _Class based component_ : Old way of writing react component
    2. _Functional based component_ : It is a function that returns a piece of JSX code or A Function that return a JavaScript function (Just a normal JS function)
-   **Component composition** : Composing two components into one another or Process of combining smaller, reusable components together to create a large, complex component

## Virtual DOM

    - It is a representation of actual DOM
    - Virtual DOM is a React object created from JSX.
    - It uses Diff and Reconciliation algorithm (React Fiber) to make React so fast. when new virtual DOM is created this algo compare the existing virtual DOM with new virtual DOM, then it will update the Actual DOM.
    - Actual DOM will update on every render.
    - UI layer and Data layer always will be in sync.

| Syntax                          | Execution on Render    | Execution on Click      | Use Case                                              |
| ------------------------------- | ---------------------- | ----------------------- | ----------------------------------------------------- |
| `onClick={handleClick}`         | No                     | Calls `handleClick`     | Simple handlers with no arguments.                    |
| `onClick={() => handleClick()}` | Creates a new function | Calls `handleClick`     | Use when passing arguments or controlling invocation. |
| `onClick={handleClick()}`       | Calls `handleClick`    | Depends on return value | Avoid unless `handleClick` returns a function.        |
