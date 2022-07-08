<template>
  <div class="flex px-8 py-4 bg-green-500">
    <button
      class="px-4 py-2 rounded text-white bg-gray-900 shadow-xl shadow-current hover:bg-gray-600"
      @click="DELETE_MESSAGE()"
    >
      delete message
    </button>
    {{ getMessage }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  layout: 'HomePage',
  computed: {
    ...mapGetters('test', ['getMessage']),
  },
  methods: {
    ...mapActions('test', ['DELETE_MESSAGE']),
  },
}
</script>
