# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a UI Component Library that was built by Facebook to solve come of the problems when dealing with complex state. If a page has data that changes over time at high rates then DOM updates are required to be fast and reflect the other parts of UI if they use the same data. React compares to the old DOM and updates only the ones that have changed without having to reload the screen.


2. What does it mean to think in react?
    We have to think about our application's structure and how we want it to function as we build our components.
    
3. Describe state.

    Data that comes into our application is loaded and stored on state in a centralized component for state management. When data is being consumed in multiple components, its best to centralize that data in state. Components that’s rendered in a stateful component can receive that state data via a prop attribute. 


4. Describe props.

    When we want to pass information held on state inside a component to another we pass it as props. Props are inputs to a component that passes data.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API and manipulating the DOM. You can use the effect hook to run or execute some side effect.

