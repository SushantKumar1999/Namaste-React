1. What is Emmet?
Emmet is a plugin for text editors that enhances HTML, CSS, and JSX coding efficiency by using abbreviations that expand into full code snippets. It speeds up development by reducing the need for repetitive coding.

Example:
Typing div.container>ul>li*5 and pressing Tab expands to:
<div class="container">
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
Emmet is built into VS Code, Sublime Text, Atom, etc.

2. Difference between a Library and a Framework
A library is a collection of pre-written code that provides specific functionalities, allowing developers to call its functions whenever needed. It gives more flexibility, as the developer controls when and how to use it. On the other hand, a framework is a structured platform that dictates the flow of the application, enforcing a particular way of building software. The key difference lies in Inversion of Control—with a library, the developer is in charge, while in a framework, the framework itself controls the execution flow. For example, React is a library that helps in building UI components, while Angular is a framework that provides a complete architecture for developing applications.


3. What is CDN? Why do we use it?
A Content Delivery Network (CDN) is a distributed network of servers that delivers web content faster by serving files from servers closer to the user.

Why use CDN?
✅ Reduces latency (faster loading)
✅ Less load on the main server
✅ Improves scalability
✅ Enhances security (DDoS protection)

Example of React via CDN:
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>



4. Why is React known as React?
React is called React because it reacts to changes in data and updates the UI efficiently using a Virtual DOM. Instead of reloading the entire page, React only updates the changed components, making it fast and efficient.


5. What is crossorigin in <script> tag?
The crossorigin attribute is used when loading scripts from a different domain to handle CORS (Cross-Origin Resource Sharing) requests.

Values of crossorigin:

anonymous (default): No credentials (cookies, HTTP authentication) sent.
use-credentials: Sends credentials with the request.
Example:
<script src="https://cdn.example.com/script.js" crossorigin="anonymous"></script>


6. Difference between React and ReactDOM
React and ReactDOM are two separate libraries that work together. React is the core library responsible for defining and managing UI components, handling state, and using hooks like useState and useEffect. It provides the essential building blocks of a React application but does not directly interact with the browser's DOM. ReactDOM, on the other hand, is specifically used for rendering React components into the actual DOM. It provides methods like ReactDOM.createRoot() and ReactDOM.render() that help attach the React application to an HTML element, usually the <div id="root"></div> in index.html. Without ReactDOM, React components would exist only as JavaScript objects and would not be visible in the browser.


7. Difference between react.development.js and react.production.js files via CDN
React provides two different versions of its library when used via a Content Delivery Network (CDN): react.development.js and react.production.js. The development version includes additional debugging tools, error messages, and warnings to help developers identify issues more easily. However, this version is larger in size and slightly slower due to extra runtime checks. On the other hand, the production version is optimized for performance—it is minified, stripped of warnings, and executes faster. It is designed for deployment in live environments where speed and efficiency matter. Developers typically use react.development.js during the development phase and switch to react.production.js when moving to production to ensure optimal performance.



8. What is async and defer?
Both async and defer are used in <script> tags to control how JavaScript files load.

Attribute	       Behavior
async	           Loads script asynchronously and executes immediately once downloaded.
defer	           Loads script asynchronously but executes in order after the HTML is fully parsed.

Example:
<script src="script.js" async></script> <!-- Loads & runs immediately -->
<script src="script.js" defer></script> <!-- Loads and waits for DOM to be ready -->

When to use?

✅ async → If script doesn't depend on DOM (e.g., analytics, ads).
✅ defer → If script depends on DOM (e.g., modifying elements).
