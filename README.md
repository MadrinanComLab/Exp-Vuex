# Welcome to Vuex Experiment!
![Vuex-Exp](https://user-images.githubusercontent.com/74145874/222163352-1f394e70-f737-41fd-baf1-a86ce4c8246d.jpg)
Source of this experiment: https://www.youtube.com/watch?v=nFh7-HfODYY&t=1230s<br/>
This project was created on February 27, 2023<br/>

## What does this project contain?:
The following are the branches of this repo and a short description about it

Branch | Description
-------------|------------
master       | This branch contains a demo for retrieving state value and how to use Vuex' mutation
actions-demo | This branch contains a demo of how to use Vuex' actions
getters-demo | This branch contains a demo of how to use Vuex' getters
two-way-binding | This branch contains a demo of how to use implement a two-way binding (v-model) in Vuex

## How to run this project?:
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

---
### Connect with me via:
<p float="left">
  <a href="https://twitter.com/MadrinanComLab">
  <img src="https://user-images.githubusercontent.com/74145874/219954290-0afa8626-f2b5-44a9-8130-1ccce187ac06.png" width="50px" title="Twitter"/>
  </a>
  <a href="https://www.linkedin.com/in/john-clifford-madri%C3%B1an-3b5ba222a/">
  <img src="https://user-images.githubusercontent.com/74145874/219954352-03919daf-97cf-4639-80a8-dab307ad1964.png" width="50px" title="Linkedin"/>
  </a>
</p>