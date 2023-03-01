<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">

        <div class="counter">{{ $store.state.counter }}</div>

        <div class="buttons">
            <!-- This is how you call a mutation in the store/vuex -->
            <button @click="$store.dispatch('decreaseCounter')">-</button>
            <button @click="$store.dispatch('increaseCounter')">+</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HomeView'
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
