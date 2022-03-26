<template>
<div class="wrapper">
  
      <div  class="Connection-container">
              <div v-if="isImage(this.connection)" class="Connection-image"> 
                <div class="image"> 
                   <img :src="'/images/'+this.connection.items[indexOne].url">
                </div>      
                <div class="image"> 
                   <img :src="'/images/'+this.connection.items[indexTwo].url">
                </div>             
            </div>
            <div v-if="isMp3(this.connection)" class="Connection-image"> 
                  <h1>
                      This is Mp3 {{this.connection.name}};
                  </h1>
            </div>

            <div v-if="isText(this.connection)" class="Connection-image"> 
                   <div class="text"> 
                      <p>{{this.connection.items[indexOne].string}} </p>
                   </div>  
                <div class="text"> 
                   <p>{{this.connection.items[indexTwo].string}} </p>
                </div>  
            </div>
        </div>

      <div v-if="guessesRemaining()" class="info">
        <form class="pure-form">
          <i class="fas fa-search"></i><input  id="textbar" v-model="guessText" />
        </form>
       
        <button @click="makeGuess()" class="auto"><img src="/images/arrow.png"></button>
      </div>

      <div v-else>
            <p>Sorry, the word was... </p>
            <p>{{this.connection.connectionPhrase}}</p>
            <button @click="newConnection()" class="auto">Try Another Connection</button>

        </div>
      <div class="answer">
          <div class="guessDisplay">
              <p class="exes">{{getExes()}}  </p>
            <p class="dots"> {{getDots()}}</p>
          </div>
          
           <p>{{getGuesses()}} Left </p>
          <p v-if="showHint()">Heres a hint: {{this.connection.hints.firstHint}}</p>
          <p v-if="showSecondHint()">Heres another hint: {{this.connection.hints.secondHint}}</p>
          <div v-if="guessed">
              <p >YOU GUESSED CORRECTLY</p>
          <button @click="newConnection()" class="auto">Try Another Connection</button>
          </div>
          
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConnectionList',
  props: {
    connections: Array,
  },
  data: function(){
      let index =  Math.floor(Math.random() * this.connections.length);
      while(this.connections[index].used){
        index =  Math.floor(Math.random() * this.connections.length);
    }
    let curr = this.connections[index];
    let rand1 = Math.floor(Math.random() * curr.items.length);
    let rand2 = Math.floor(Math.random() * curr.items.length);
    
    
    while(rand1 == rand2){
        rand2 =  Math.floor(Math.random() * curr.items.length);
    } 
    
    console.log(curr);
    curr.used = true;
    return {indexOne: rand1, indexTwo: rand2 ,guessed: false, connection:curr}

  },
  components: {
    
  },
  computed: {
      
  },
  methods: {

    isImage(connection){
        return connection.connectionType == "image"; 
    },
    isMp3(connection){
        return connection.connectionType == "mp3"; 
    },
    isText(connection){
        return connection.connectionType == "text"; 
    },
    showHint(){
        if(this.$root.$data.triesLeft < 4 && this.$root.$data.triesLeft != 0){
            return true;
        }
      },
       showSecondHint(){
        if(this.$root.$data.triesLeft < 2 && this.$root.$data.triesLeft != 0){
            return true;
        }
       },

    currentConnection(){
        return this.connection;
    },
    getGuesses(){
        return this.$root.$data.triesLeft;
    },

    getExes(){
        let exes = "";
        
        for(let i = 0; i < 5 - this.$root.$data.triesLeft; i++){
            exes += " X "
        }
   
        return exes;
    },
    
    getDots(){
        let dots = "";
        for(let i = 0; i <  this.$root.$data.triesLeft; i++){
            dots += " O "
        }
        return dots;
    },
    makeGuess() {
        let guess = this.guessText.toLowerCase();
        
        if(guess != this.connection.connectionPhrase.toLowerCase()){
            this.$root.$data.triesLeft -= 1;
        }
        else{
            this.guessed = true;
            this.$root.$data.triesLeft = 5;
        }
      },
      guessesRemaining(){
          if( this.$root.$data.triesLeft == 0)
          {
                return false;
          }
          return true;
      },
      newConnection(){
          let index =  Math.floor(Math.random() * this.connections.length);
                this.$root.$data.triesLeft = 5;
                while(this.connections[index].used){
                    index =  Math.floor(Math.random() * this.connections.length);
                }
                let curr = this.connections[index];
                let rand1 = Math.floor(Math.random() * curr.items.length);
                let rand2 = Math.floor(Math.random() * curr.items.length);
            
                while(rand1 == rand2){
                    rand2 =  Math.floor(Math.random() * curr.items.length);
                }
              curr.used = true; 
              this.indexOne= rand1; 
              this.indexTwo= rand2;
              this.guessed = false; 
              this.connection=curr;
      }
      

      

    },
  }
</script>

<style scoped>

.wrapper{
    margin-top: 100px;
}

.Connection-container {
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  height: 20em;
  width: 100%;

  
}

.Connection-image {
  
  margin-top: 10px;
  width: 100%;
  height: 100%;
  
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-radius: 5px;

}

.exes{
    width:auto;
    color: red;
    
    margin-right: 4px;
}

.guessDisplay{
    width: 200px;
    display: flex;
    
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}
.image {
  height: 100%;
  width: 385px;
  height: 280px;
  
  background: #292929;
  margin-left: 0;
}
.image img{
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
}
input[type=text] {
    border: none;
    border-bottom: 2px solid white;
}

.overlay p{
  color: white;
}
.overlay {
  padding-left: 15px;
  padding-right: 15px;
  background: rgba(38, 70, 83, 0.75);
  position: absolute;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.recipe .image {
  margin-bottom: 5px;
  position: relative;
  
}

.text{
    display: flex;
    height: 100%;
    width: 400px;
   font-size: 20px;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: left;
    margin-bottom: 100px;
   
}

.info {
  margin-top: 25px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 530px;

  
  
}

.description{
  height: 90px;
  width: 100%;
}


#textbar{
    background-color: transparent;
    height: 2em;
    font-size: 24px;
    color: white;
    
    margin-right: 15px;
    width: 500px;
    text-align: center;
    border: none;
    border-bottom: 1px solid white;
}

.price {
  display: flex;
}

button {
    height: auto;
    width: auto;
    padding: 10px 20px;
    border-radius: 60px;
    background-color: transparent;
    font-family: 'Space Grotesk', sans-serif;
    color: white;
    font-size: 18px;
    text-align: center;
   
    border: 1px solid white;
    z-index: 10px;
}
 button:hover{
    color: gray;
    border-color: gray;
    background-color: gray;
 }
.auto {
  margin-left: auto;
}
</style>