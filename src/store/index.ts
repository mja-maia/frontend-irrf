import { createStore, Store } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import { employeeReducer } from "./ducks";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "employees",
  storage: storage,
};

export const rootReducer = combineReducers({
  employees: employeeReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({});

const middlewares = composeEnhancers(applyMiddleware());
const store = createStore(pReducer, middlewares);
const persistor = persistStore(store as unknown as Store);

export { store, persistor };
export type RootState = ReturnType<typeof rootReducer>;
