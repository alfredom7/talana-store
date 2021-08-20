<template>
  <div class="row h-100">
    <div class="col-12">
      <Header></Header>
    </div>
    <div class="col-md-3">
      <Sidebar></Sidebar>
    </div>
    <div class="col-md-8">
          <Category></Category>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Category from '@/components/Category.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar,
    Category
  }
}
</script>

