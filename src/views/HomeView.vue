<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">

        <div class="counter" :style="{ color: $store.state.color_code }">
            {{ $store.state.counter }}
        </div>

        <div class="counter-squared">
            {{ $store.state.counter }}
            <sup>2</sup> = {{ $store.getters.counterSquared }}
        </div>

        <div class="buttons">
            <!-- This is how you call a mutation in the store/vuex -->
            <button @click="$store.dispatch('decreaseCounter')">-</button>
            <button @click="$store.dispatch('increaseCounter')">+</button>
        </div>

        <div>
            <input type="text" placeholder="Enter color code" v-model="color_code">
        </div>
    </div>
</template>

<script>

export default {
    name: 'HomeView',
    computed: {
        color_code: {
            /**
             * DOCU: This function will get get the color_code state in the store.
             * Triggered: When component loads and update.
             * Last Updated Date: March 2, 2023
             * @function
             * @memberOf stores
             * @author MadriñanComputerLab
             */
            get(){
                return this.$store.state.color_code;
            },
            /**
             * DOCU: This function will get set the color_code state in the store by dispatching the 'setColorCode'.
             * Triggered: When component loads and update.
             * Last Updated Date: March 2, 2023
             * @function
             * @memberOf stores
             * @param {string} new_value - This will be the new color code.
             * @author MadriñanComputerLab
             */
            set(new_value){
                this.$store.dispatch("setColorCode", new_value);
            }
        }
    }
}
</script>

<style>
div{
    margin-bottom: 10px;
}
div.counter{
    font-size: 80px;
}
div.buttons button{
    font-size: 40px;
    width: 200px;
    margin: 0px 10px;
}
</style>
