import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from "redux";
import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";
import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import VisibilityFilter from "./components/VisibilityFilter";
import { Provider } from "react-redux";

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer);

const App = () => {
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

renderApp();
store.subscribe(renderApp);
