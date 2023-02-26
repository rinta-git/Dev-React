# Dev-React
* What is CDN? Why do we use it?

A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications. CDN can stand for content delivery network or content distribution network. 
When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.

* Why is React known as React?

It’s called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they’re doing things like mouse clicking, submitting and typing.

* Why you should use React

  - React is declarative which means that you tell it WHAT you want (written in React language) and then it solves the HOW and builds the user interfaces in the web browser.
  - In order to simplify and not focus on the whole website at the same time, you break it down into smaller components that you can reuse wherever you want to.
  - Instead of having a complete website re-render every time something changes, React can update only the things that are different than they were before an event happened. This means that if you, for example, change your profile picture, the image is the only thing that is re-rendered – nothing else on the site is updated and replaced with data that is basically the same as it was before. Because that would be kind of unnecessary.
  
* What is crossorigin in script tag?

  - The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
  - Web pages often make requests to load resources on other servers. Here is where CORS comes in.
  - A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
  
* What is diference between React and ReactDOM?

React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser

● What is difference between react.development.js and react.production.js files via CDN?

Development mode includes useful warnings and gives you access to tools that make development and debugging easier. 
Production mode minifies your code and better represents the performance your app will have on end users' devices.

* What is `NPM`?

NPM is for a package management. It is used for using dependencies in our application.

* What is `Parcel/Webpack`? Why do we need it?

Parcel and webpack both are bundlers used to bundle modules. It helps to clean, minify and compact our application while requesting or getting response from server. So it makes application performance faster by reducing load time.

Parcel doesn't need any config file after installation. It has built-in provision for hot module replacement and dead code elimination. But not a provision for code splitting. It has builtin module transformers for other type files than js files.

Webpack need a config file after installation. Webpack don't have provision for hot module replacement, dead code elimination but can be achieved by webpack-dev-server plugin. Webpack has the provision for lazy loading by code splitting. In webapck, we need to manually specify installation, configuration, types pf files to be transffered, plugin configuration to transform files other than js type.

If our application uses only basic functionalities then parcel is preffered but if the application is large and has dependency to third-party import then webpack is prefferable.











