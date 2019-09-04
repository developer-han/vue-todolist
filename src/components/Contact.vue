<template>
  <div>
      <h1>연락처</h1>
      <div class="wrapper">
          <div class="box" v-for="c in contacts" :key="c.no">
              <!--<router-link v-bind:to="{name: 'contactbyno', params:{no:c.no}}">{{c.name}}</router-link>-->
              <span @click="navigate(c.no)" style='cursor:pointer'>
                  [{{c.name}}]
              </span>
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
    },
    methods: {
        navigate(no) {
            if (confirm("상세 정보를 보시겠습니까?")) {
                this.$router.push({name: 'contactbyno', params: {no: no}}, function() {
                    console.log("/contacts/" + no + "로 이동 완료!");
                })
            }
        }
    }
}
</script>
