## Getting Started

Install the required dependencies using npm:

```
npm install
```

You can then start the app with:

```
npm start
```

And run the tests (in watch mode) with:

```
npm test
```

## Summary

I approached the task by observing the current code patterns used and adapted to that.
If I had more time I would:

* Introduce ImmutableJs to make state updates a little more legible and enforce immutability.

* I would upgrade React to allow for fragments to be be returned.

* I could add integration tests to add items, mark as complete and check that the filter-by-completed checkbox reduces the visible result set.

* I would introduce a 3rd party component library such as antD / Material Design / React-Bootstrap which have a number of wrapper components to simplify the boilerplate.

* I would upgrade the testing library to Jest, which uses snapshotting, making the test code less verbose and improving development tempo.

* I'd make it prettier / accessible.

## Notes

I deviated a little from the initial pattern by creating react classes rather than anonymous functions for the buttons. This was so that I wasn't instantiating new functions on every render.
