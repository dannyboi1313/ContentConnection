<template>
  <div id="app">
      <div v-if="popup()" class="wrapper-2">
          <div class="popup-border">
            <div class="instructions">
                <h1 class="headline">
                    <span>Welcome to Analogy</span>
                </h1>
                <h2 class="sub-headline">
                    <span>How to Play:</span>
                </h2>
                <p class="p-instructions">
                  <span>The premise of "Analogy" is to guess the connection between two given media types. For example, if two pictures are given, the object of the game is to guess the analogous relationship between the two. The connection is typically somewhat abstract. <br> The user has 5 chances to guess the answer. After two wrong guesses, the user is given a hint. After 4 wrong guesses, the user is given one final hint. 5 wrong guesses is a loss. Similar to "Wordle", the user can only play this game once per day.</span>
                </p>
                <div id="nav">
                    <button @click="updatePopup()" class="play-game"><router-link id="route" to="/connections">Get Started!</router-link></button>
        
                </div>
                 
            </div>
          </div>  
      </div>
      <router-view />
 </div>
  
</template>

<script>

  
  export default {
    name: 'app-view',
    components: {
     
    },
      data() {
      return {}
      
    },
    computed: {
    connections() {
     
      return this.$root.$data.connections;
    },
 

    getValue(){
      return this.$root.$data.getConnections();
    }

    },
  methods: {
    popup(){
      return this.$root.$data.popup;
    },
    updatePopup(){
      this.$root.$data.popup = false;
    }
  }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

#app {
  font-family: 'Space Grotesk', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
  color: white;
   margin-top: 75px;
  background-size: cover;
}

#app h1{
  font-size: 40px;
}

.wrapper-2 {
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
}

.instructions {
    width: 80%;
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.popup-border {
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    margin: 10px 30px;
    border: 1px solid white;
    background-image: linear-gradient(0deg,rgba(41, 41, 41, 0.6) ,  rgba(41, 41, 41, 0.6)) ;
    width: 60%;
    border-radius: 10px;
}

.sub-headline {
    color: red;
    font-size: 36px;
    font-family: 'Space Grotesk', sans-serif;
    text-align: center;
    font-weight: 300;
    margin: 0;
}

.p-instructions {
    color: white;
    font-family: 'Space Grotesk', sans-serif;
    line-height: 2em;
    font-size: 22px; 
}

.play-game {
    height: auto;
    width: auto;
    padding: 10px 20px;
    border-radius: 60px;
    background-color: transparent;
    font-family: 'Space Grotesk', sans-serif;
    color: white;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    border: 1px solid white;
    z-index: 10px;
    text-align: center;
    margin: 20px 0;
    text-emphasis: none;
    text-decoration-style: none;
}
#route{
  text-emphasis: none;
  text-decoration-style: none;
  color: white;
  text-decoration: none;
}

.play-game:hover {
    background-color: gray;
    border-color: gray;
}
</style>
