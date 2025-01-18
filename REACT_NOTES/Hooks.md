# React Hooks

    - A Hook is a normal JS function
    - Normal JS utility functions written by facebook.
    - Two very important hooks
      - useState() :  Super powerful react variables
      - useEffect() : If we want to execute something after UI/component render then we can use useEffect
            - If no dependency array then useEffect calls on every render
            - If dependency array is empty, then useEffect is called on initial render and just once.
            - If we have any dependency array then useEffect is called when dependency changes
    - Hooks need to be called only inside react component/functional component.
    - Declare Hooks at the top/beginning of functional component.
    - Never create Hooks inside conditions.

## Props Drilling

-   Parent Comp (dummy = "test")
    -   Child Comp
        -   Sub Child 1 - Sub Child 2
            -   x component - Sub x child 2 comp
                -   y component (dummy = "test)

## useContext createContext

    - To avoid props drilling issue we use React Context, by using this we can maintain our state variables Globally. So, It can be accessible anywhere in our app.
