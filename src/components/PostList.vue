<template>
  <div class="post-list">
    <h1>{{year}}</h1>
    <PostItem :key="post.node.id" v-for="post in this.postsByYear" :post="post.node"/>
  </div>
</template>

<script>
  import PostItem from './PostItem';

  export default {
    props: ["year"],
    components: {
      PostItem
    },
    computed: {
      postsByYear() {
        return this.$page.allPost.edges.filter((post) => {
          return post.node.revdate.includes(this.year);
        })
      }
    }
  };
</script>

<style scoped="true">
  h1 {
    font-size: 2em;
    margin: 0;
    padding-bottom: 15px;
  }

  .post-list {
    margin-top: 20px;
  }
</style>
