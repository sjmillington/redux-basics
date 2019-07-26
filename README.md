# When to use Redux

Type              |Example            | Use?
------------------|-------------------|------------
Local UI State    | Show/Hide backdrop| Maybe.
Persistent State  | Users/Posts       | Stored on server but relevant bit of info in Redux.
Client state      | isAuthenticated   | Yes.

# Concepts used in this code:

## Simple Redux concepts:

 - Store - state management
 - Actions - dispatching messages + payloads (commands)
 - Reducers - **immutably** changing the state
 - subscriptions - updating compnents when the state changes. This is handled automatically with react-redux.

 ## Advanced Redux concepts:

 - Adding Middleware
 - Redux Devtools
 - Async code execution & handling (with redux thunk)
 - Action creators
 - Utility functions
 - Switch-case simplification (one line per case).
  


