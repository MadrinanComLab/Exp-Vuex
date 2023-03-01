# Welcome to Vuex Experiment!
This project was created on February 27, 2023<br/>

Before you run this app, install the dependencies first, by running this command:
NPM Command
-------------------------------------------------|
npm install|

Command to run this app:
NPM Command
-------------------------------------------------|
npm run serve|

## How this project was created? Do the following:
- Run this command:
```
vue create learn-vuex
```
- Then select "Manually select features" and enable: 'Router' and 'Vuex'
- And disable the following: Linter
- After selecting and deselecting features, press 'Enter'
- Select Vue 3.x
- Press "n" for history mode
- Select "In dedicated config files"
- Press "n" again for preset for future project

## How to add Vuex in your existing project?
If you have an existing Vue app and you did not include Vuex, you can do the following to add it on your project:
1. Run this command
```
npm install vuex
```
2. Then add the following files in the "src": ```/store/index.js```
3. This code will be in /store/index.js
```javascript
import { createStore } from "vuex";

export default createStore({
    state:{
    },
    mutations:{
    },
    actions:{
    },,
    getters:{
    }
    modules:{
    }
});
```
4. Lastly, In main.js (located in the root of 'src') you code will be something like this:
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store"; // This was added

createApp(App)
    .use(router)
    .use(store) // This was also added
    .mount('#app')
```