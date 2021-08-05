export default function html([first, ...string], ...value) {
    return value.reduce(
        (acc, cur) => acc.concat(cur, string.shift()),
        [first])
        .filter(x => x && x !== true || x === 0)
        .join('')
}

export function createStore(reducer) {
    let state = reducer()

    let roots = new Map()
    function render() {
        for(const [root, component] of roots) {
            let ouput = component()
            root.innerHTML = ouput
        }
    } 

    return {
        attach(root, component) {
            roots.set(root, component)
            render()
        },
        connect() {
            return component => () => component(Object.assign({}, state))
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
    }
}