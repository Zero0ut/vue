<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
