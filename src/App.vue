<template>
  <div class="w-100">
    <Header></Header>
  </div>
  <div class="container mt-5 pt-4" style="min-width: 440px;">
    <div class="row">
      <div class="col-sm-12 col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div class="col-sm-12 col-md-9">
        <Category></Category>
      </div>
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
<style>
  .principal-container{
    -webkit-align-items: center;
    align-items: center;
    -webkit-flex-direction: column;
    flex-direction: column;
    overflow: visible;
    display: flex;
    width: 100%;
  }
  .secondary-container{
    width: 100%;
    margin-top: 0;
    display: flex;
  }
  .search-sidebar{
    -webkit-flex: 1 1;
    flex: 1 1;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 294px;
    min-width: 210px;
    padding-right: 14px;
    width: 100%;
  }
  .search-results {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    width: 885px;
  }
</style>