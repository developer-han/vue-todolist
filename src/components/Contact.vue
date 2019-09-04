<template>
  <div>
      <h1>연락처</h1>
      <div class="wrapper">
          <div class="box" v-for="c in contacts" :key="c.no">
              <router-link v-bind:to="{name: 'contactbyno', params:{no:c.no}}">{{c.name}}</router-link>
          </div>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
import contectlist from '../ContactList'

export default {
    name: "contact",
    data: function() {
        return {
            contacts: contectlist.contacts
        }
    }
}
</script>
