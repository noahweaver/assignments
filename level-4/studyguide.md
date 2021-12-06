Level 4 Assessment Study Guide

1. Q. Why are default props useful? 
    A. default props pass a default value to the child in case a value isn't passed down. I figure this can be useful if you don't have all the information yet but want to continue building the app.
        Example: Home.defaultProps = {
            title: "Home Title"
        }
        If the title prop is removed from Home's parent, then Home will still render "Home Title" in place of the missing title value
2. Q. What are prop types used for? 
    A. to catch bugs before they happen by having the code check that data types match what they need to be and throw an error if they the prop returns anything but the type checked
        Example: {object: PropTypes.string} -> will throw an error object is not a string
3. Q. What are React Fragments? 
    A. <> </> returns in a component must have a wrapper around the code to be rendered. 
4. Q. What’s an advantage of using them? 
    A. Fragments accomplish the necessary code wrapping without creating a new div.
5. Q. What are render props?
    A. shares code between components but the prop is a function instead of a key value pair. Used by ReactRouter (and other libraries). 
        Ex. <DataProvider render={data => (
            <h1>Hello {data.target}</h1>
            )}/>

6. Context
    a. Q. What is the value prop used for?
        A. The value prop is where you put everything you want to pass to any consumer. This can be functions or properties
            Example: 
            <Context.Provider 
                value={{
                    currentJoke,
                    setJoke,
                    newJoke,
                    jokesArr,
                    tenJokes, 
                    moreJokes
            }}>
           {props.children}
       </Context.Provider>
    b. Q. What role does state play in context?
        A. storing a state in context would allow any consumer to use that state. Woud also allow siblings to share props stored in state and would allow a child to pass props to a parents since it's passed through context and not down via props
    c. Q. How do you set up a consumer?
        A. import {useContext} from 'react' then use the useContext hook, select the values you want to consume via desctructuring or consume the entire context

7. Hooks
    a. Q. useEffect
        A. the useEffect hook has taken the place of lifecycle methods. componentDidMount, componentDidUpdate, and componentWillUnmount. Will need to imported with react
            Example: useEffect(() => {}) adding an empty dependency array useEffect(() => {}, []) will prevent from running again, (acts like component componentDidMount. Filling in the dependency array with a state value will trigger useEffect to run everytime the state is updated. useEffect(() => {}, [name]). To use as componentWillUnmount: useEffect(() => {
        //whatever you want to perform in useEffect will go over here
        return () => {
            // Inside this return you can write any logic you want to pass on unmounting
        }
    }, [])
    b. Q. useState
        A. hook that acts just like state. need to imported from react.
            Example: const [name, setName] = useState("Noah Weaver")

8. React Router
    Everything from React router needs to be imported from 'react-router-dom'
    a. Q. BrowserRouter
        A. top level component that makes all other components and hooks work within any children
    b. Q. Routes
        A. used to wrap around all your routes 
            Example: <Routes>
                        <Route />
                        <Route>
                            <Route />
                        </Route>
                        <Route />
                    </Routes>
    c. Q. Route
        A. individual route, where if the url matches the pattern in the route then it will render what you tell it to in. can be nested on top of each other to create a route from one page to another the route 
            Example: if single route: <Route path="" element={} /> (note the route is self closing)
                    if nested routes:  <Route> (Note the Route is not self closing)
                                    <Route />
                                    <Route />
                                </Route>
    d. Q. useParams
        A. a hook to allow you to use url parameters in your component. can be used for a fetch call to an API after a user clicks on a certain link or button
    e. Q. useSearchParams
        A. same as above but the actual search parameters will be input by the user. Can be used for a fetch call to an 
        API
    f. Q. useNavigate
        A.  Allows the developer to automatically change the link when something happens (docs give an example of form submission)
    g. Q. Link/NavLink
        A. Link allows the user to change the URL by clicking on something
