export const state = () => ({
    list: [
        {
            driver: "name",
            destination: "sjo", 
            origin: "quepos",
            seats: 0
        },
        {
            driver: "name1",
            destination: "sjo", 
            origin: "quepos",
            seats: 0
        },{
            driver: "name2",
            destination: "sjo", 
            origin: "quepos",
            seats: 0
        }
    ]
  })
  
  export const mutations = {
    add(state, text) {
      state.list.push({
        text,
        done: false
      })
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
      todo.done = !todo.done
    }
  }