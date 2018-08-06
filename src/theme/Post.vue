<template>
  <div class="card">
    <div class="card-content">
      <h3>{{post.title}}</h3>
        {{post.content}}
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" :style="$theme-primary" :href="post.link" target="_blank">Read More</a>
    </footer>
  </div>
</template>
<script>
  export default {
    props: ['post']
  }
</script>
<style  scoped>
  .card{
    padding-bottom: 40px;
    height: 100%;
  }
  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
</style>
