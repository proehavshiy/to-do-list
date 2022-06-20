import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"
import { render } from '@testing-library/react';
import { rootReducer } from "../../redux/rootReducer";

export const renderWithRedux = (
  component,
  {
    store = configureStore({
      reducer: rootReducer,
    })
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>
    ),
    store
  }
}

// c начальным стейтом
// export const renderWithRedux = (
//   component,
//   { initialState,
//     store = configureStore({
//       reducer: rootReducer,
//       preloadedState: initialState,
//     })
//   } = {}
// ) => {
//   return {
//     ...render(
//       <Provider store={store}>
//         {component}
//       </Provider>
//     ),
//     store
//   }
// }