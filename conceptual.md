### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
 Use promise objects to store some expected data temporarily. From there, you could further manage them as they resolve. 


- What is a Promise?
placeholder for future objects

- What are the differences between an async function and a regular function?
with async function you could use await, which is used to resolve promise objects

- What is the difference between Node.js and Express.js?
Node is what determines environmental settings and Express is the framework.

- What is the error-first callback pattern?

- What is middleware?
function that is executed regardless of requested path. 

- What does the `next` function do?
with next, code continues even after returning something

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
 1.should pass values dynamically for each requests
 2.should use axios to utilize async/await.
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
