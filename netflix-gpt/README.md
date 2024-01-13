# Netflix-Gpt
- create-react-app
- configure tailwindcss
- Header
- Routing of app
- Login Form
- Signup form
- validation for form
- firebase setup
- deploy app
- implement signup&signin api
- add user to the store
- implement sign out
- update profile api call
- if the user is already logged in, redirect him to browse page
- if not, redirect to login in page. Don't allow to access browse page(Eg; accessing it directly by manual entering)
- unsubscribed to the onAuthStateChaned callback
- fetch movies from TMDB
- add movie list to store
- create a component for trailer
- fetch trailer videos
- filter trailer and embeded the video
- add the trailer to store
- make the trailer auto play
- GPT search option on header
- Toggle gpt component
- Get GPT suggested movie names
- Get the details of gpt movies from TMDB
- Store the searched names and details
- Add multiple language support for the website
- Movie details on click of each movie card
- add sensitive info to .env file
- responsive pages

# Features
--Login/Sign Up--
    - Sign In Form
    - Redirect to login
--Logined User--
    - Header
    - Main Movie
        - Trailer in bg
        - Title & Desc
    - Movie suggestions
        - Movies
--Netflix GPT--
    - Search bar
    - Movie suggestion


# ToDos
- add menu in header
- add error page for signout/ signin fails

# Attractions
- Hooks [useEffect, useState, usRef, useSelector, useDispatch, useNavigate]
- Redux store
- Reused components
- multi lingual support
- chat gpt use
- memoisation for reducing network calls
- useref to get current data from input field
- firebase api for authentication
- tmdb api
- tailwind css
- customHooks for cleaner code
- responsive web