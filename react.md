# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications (true)
- React will only render on the server using Node.js (false)
- React is a full stack framework for modern web applications (false)
- React is a flexible library that plays the role of V in an MVC framework (true) (and C?)
- You should always update a component's state directly using this.state (false)
- React is made up of encapsulated components that manage their own state (true)
- React components render HTML (false?) (jsx, which in turn renders html?)


2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: "Smart" or "Impure" components have state that influences and
  is influenced by other components. "Dumb" or "Pure" components only render
  information.

  Researched answer: from a Medium article by Jason Arnold (paraphrased):

  Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM.

  Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.



3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: Yarn is adding the package manager you ask it to. Yarn should
  only update the package when told to explicitly (i believe?).

  Researched answer: from "yarn --help add" in my terminal:

  Usage: yarn add [packages ...] [flags]

  Installs a package and any packages that it depends on.

  from yarnpkg.com's documentation:

  "[yarn add] Installs a package and any packages that it depends on."
  it appears that package updates are left to the "yarn upgrade" command.


4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: State exists on the scope of its component. Props are properties
  of one component that are passed to another component (state can be
  passed as props to child components, but it is still the parent's state).

  Researched answer: additional: props are immutable, whereas state is mutable
  (among other characteristics: https://www.javatpoint.com/react-state-vs-props)



5. How would you explain state to a friend who doesn't know code?

  Your answer: Maybe by analogy...

  When think of an object, like a basketball, I think of it as having certain
  characteristics. It is spherical, it is orange, and it is fun to play with!
  However, I can use other objects to influence those characteristics. I might
  have a paint brush that can look at the basketball's orange-ness and decide
  that the orange should be overwritten. Or perhaps I have a needle that can
  influence the basketball's sphericity by changing the basketball's starting
  condition from "in-flated" to "de-flated." This is to say that the ball's
  state is mutable.
