<template>
  <div class="container is-fluid">
      
  </div> 
</template>

<script>
// @ is an alias to /src
// import axios  from "axios";

export default {
  name: 'Home',
  data(){
    return{
      info: null
    }
  },
  methods:{
    fetchYTS: function(){
      // axios
      // .get('https://yts.mx/api/v2/list_movies.json')
      // .then(response => (this.info = response))
    }
  },
  created(){
    this.fetchYTS()
  }
}
</script>



