import { createStore } from "vuex";

export default createStore({
    /** STATE - THIS WILL CONTAIN THE DATA OF THIS APP */
    state:{
        counter: 0
    },
    /** 
     * MUTATIONS - THIS WILL CONTAIN THE FUNCTIONS OF THIS APP THAT CHANGE THE 'state' OR DATA. 
     * BUT TAKE NOTE, THAT YOU CAN'T ADD ASYNC FUNCTIONS HERE. FOR TRIGGERING 'mutations', THE 
     * TERM 'committing' WAS USED.
     */
    mutations:{
        increaseCounter(state){
            state.counter++;
        },
        decreaseCounter(state){
            state.counter--;
        }
    },
    /**
     * ACTIONS - THIS ALSO CONTAIN FUNCTION BUT THESE FUNCTION CAN'T CHANGE THE VALUE OF DATA
     * THAT IS IN THE STATE. UNLIKE IN MUTATIONS, YOU CAN WRITE ASYNC FUNCTIONS HERE. THE 
     * TERM FOR TRIGGERING ACTIONS ARE CALLED 'dispatching'.
     */
    actions:{
    },
    /**
     * GETTERS - THIS WAS USED TO HAVE RETRIEVE THE DATA STORED IN STATE. GETTERS ARE ONLY OPTIONAL,
     * BUT YOU CAN USE GETTERS FOR PERFORM OPERATIONS UPON RETRIEVING THE DATA, EX.: GETTING THE 
     * AVERAGE VALUE OR SORTING THE DATA.
     */
    getters:{
    },
    /** 
     * MODULES - USING THIS, YOU CAN BREAK THE STORE INTO DIFFERENT MODULES THAT CONTAIN ITS OWN mutations, state, AND actions
     */
    modules:{
    }
});