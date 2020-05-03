<template>
  <div class="post-item">
    <span class="date">{{date}}</span>
    <g-link :to="post.path" class="read">{{post.title}}</g-link>
    <span class="time-to-read"><i>{{post.timeToRead}} min read</i></span>
  </div>
</template>

<script>
  export default {
    props: ["post"],
    computed: {
      date() {
        return this.post.revdate.substring(0, this.post.revdate.length - 4);
      }
    }
  };
</script>

<style>
  .post-item {
    margin: 0.25em 0;
  }

  .date {
    margin-right: 0.25em;
    min-width: 60px;
    display: inline-block;
  }

  .time-to-read {
    margin-left: 10px;
    color: gray;
    font-size: .8em;
  }
</style>
