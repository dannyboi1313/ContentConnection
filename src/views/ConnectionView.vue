<template>
<div id="app">
  <div id="banner">
    <div id="title">
    <h1>Analogy</h1>
    </div>
    </div>
      <div id="comparison-container">
        <ComparisonView :connections="connections"/>
        
      </div>
</div>
</template>

<script>

  import ComparisonView from "../components/ConnectionComponent.vue"
  
  export default {
    name: 'Home-view',
    components: {
      ComparisonView
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
</style>