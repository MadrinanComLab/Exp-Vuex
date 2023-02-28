import { createStore } from "vuex";

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
         * Triggered: When user click the plus (+) button.
         * Last Updated Date: February 28, 2023
         * @function
         * @memberOf stores
         * @param {object} state - This was the state defined above. No need to include this when increaseCounter() was called.
         * @author MadriñanComputerLab
         */
        increaseCounter(state){
            state.counter++;
        },
        /**
         * DOCU: This function will decrease the value of 'counter' defined in state.
         * Triggered: When user click the minus (-) button.
         * Last Updated Date: February 28, 2023
         * @function
         * @memberOf stores
         * @param {object} state - This was the state defined above. No need to include this when decreaseCounter() was called.
         * @author MadriñanComputerLab
         */
        decreaseCounter(state){
            state.counter--;
        }
    },
    /**
     * 'actions' - This also contain the functions but these functions can't change the value of data
     * that is in the state. Unlike mutations, you can write async functions here. the term for
     * triggering actions are called 'dispatching'.
     */
    actions:{
    },
    /**
     * 'getters' - This was used to retrieve the data stored in state. 'getters' are only optional,
     * but you can use getters for performing operations upon data retrieval. Ex.: Getting the 
     * average value or sorting the data.
     */
    getters:{
    },
    /** 'modules' - Using this, you can break the store into different modules that contain mutations, state and actions. */
    modules:{
    }
});