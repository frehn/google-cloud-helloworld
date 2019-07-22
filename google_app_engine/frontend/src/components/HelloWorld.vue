<template>
  <div>
    <p>From backend: {{ msgBackend }}</p>
    <p>From function: {{ msgFunction }} </p>
  </div>
</template>

<script>
const axios = require('axios')
const googleFunctionUrl = process.env.VUE_APP_GOOGLE_FUNCTION

export default {
  name: 'HelloWorld',
  data () {
    return {
      msgBackend: null,
      msgFunction: null
    }
  },
  mounted () {
    axios
      .get('/backend/hello')
      .then(response => (this.msgBackend = response.data))
      .catch(error => (this.msgBackend = `Error GETing from backend: ${error}`))

    axios
      .get(googleFunctionUrl)
      .then(response => (this.msgFunction = response.data))
      .catch(error => (this.msgFunction = `Error GETing from function: ${error}`))
  }
}
</script>
