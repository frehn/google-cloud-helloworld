<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: null
    }
  },
  mounted () {
    axios
      .get('/backend/hello')
      .then(response => (this.msg = response.data))
      .catch(error => (this.msg = error))
  }
}
</script>
