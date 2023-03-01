import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    /** 'state' - This will contain the data of this app */
    state:{
        counter: 0
    },
    /** 
     * 'mutations' - This will contain the functions of this app that change the 'state' or data. 
     * But take note, that you can't add async functions here. For triggering 'mutations', the
     * term 'committing' was used.
     */
    mutations:{
        /**
         * DOCU: This function will increase the value of 'counter' defined in state.
         * Triggered: Will be called in increaseCounter() of actions
         * Last Updated Date: March 1, 2023
         * @function
         * @memberOf stores
         * @param {object} state - This was the state defined above. No need to include this when increaseCounter() was called.
         * @param {integer} random_number - The value of this will be coming from the random.org api
         * @author MadriñanComputerLab
         */
        increaseCounter(state, random_number){
            state.counter += random_number;
        },
        /**
         * DOCU: This function will decrease the value of 'counter' defined in state.
         * Triggered: Will be called in decreaseCounter() of actions
         * Last Updated Date: March 1, 2023
         * @function
         * @memberOf stores
         * @param {object} state - This was the state defined above. No need to include this when decreaseCounter() was called.
         * @param {integer} random_number - The value of this will be coming from the random.org api
         * @author MadriñanComputerLab
         */
        decreaseCounter(state, random_number){
            state.counter -= random_number;
        }
    },
    /**
     * 'actions' - This also contain the functions but these functions can't change the value of data
     * that is in the state. Unlike mutations, you can write async functions here. the term for
     * triggering actions are called 'dispatching'.
     */
    actions:{
        /**
         * DOCU: This function will get the random number from the API, then call the increaseCounter in mutations.
         * Triggered: When user click the plus (+) button.
         * Last Updated Date: March 1, 2023
         * @function
         * @memberOf stores
         * @param {function} commit - This will be given a value automatically by Vue.
         * @author MadriñanComputerLab
         */
        increaseCounter({ commit }){
            axios.get("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
                .then(response => {
                    commit("increaseCounter", response.data);
                });
        },
        /**
         * DOCU: This function will get the random number from the API, then call the decreaseCounter in mutations.
         * Triggered: When user click the minus (-) button.
         * Last Updated Date: March 1, 2023
         * @function
         * @memberOf stores
         * @param {function} commit - This will be given a value automatically by Vue.
         * @author MadriñanComputerLab
         */
        decreaseCounter({ commit }){
            axios.get("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
                .then(response => {
                    commit("decreaseCounter", response.data);
                });
        }
    },
    /**
     * 'getters' - This was used to retrieve the data stored in state. 'getters' are only optional,
     * but you can use getters for performing operations upon data retrieval. Ex.: Getting the 
     * average value or sorting the data.
     */
    getters:{
        /**
         * DOCU: This function will calculate the square of counter of this state.
         * Triggered: When component loads and updates.
         * Last Updated Date: March 2, 2023
         * @function
         * @memberOf stores
         * @param {object} state - This was the state defined above. No need to include this when counterSquared() was called.
         * @author MadriñanComputerLab
         */
        counterSquared(state){
            return state.counter * state.counter;
        }
    },
    /** 'modules' - Using this, you can break the store into different modules that contain mutations, state and actions. */
    modules:{
    }
});