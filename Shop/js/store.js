import { createStore } from "./core.js";
import reducer from "./reducer.js";

var {attach, connect, dispatch} = createStore(reducer)

window.dispatch = dispatch

export {
    connect,
    attach
}