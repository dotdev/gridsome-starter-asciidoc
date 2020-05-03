<template>
  <main class="layout" role="main">
    <Header :siteName="$page.metadata.siteName"/>
    <slot/>
    <footer>
      <p>
        Built with
        <a target="_blank" class="link" href="//gridsome.org">Gridsome</a>
        <span v-if="$page.post">
          &diamondsuit; Edit this page on <a target="_blank" class="link" :href="'//github.com/dotdev/gridsome-starter-asciidoc/blob/master/' + $page.post.fileInfo.path">Github</a>
        </span>
      </p>
    </footer>
  </main>
</template>

<script>
  import Header from "../components/Header";

  export default {
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  :root {
    --app-background-color: #FFFFFF;
    --app-font-color: black;
  }

  body {
    background-color: var(--app-background-color);
    color: var(--app-font-color);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-size: 1.1em;
  }

  .layout {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
    font-size: .8em;
  }

  footer a {
    color: gray;
  }

  @media only screen and (max-width: 500px) {
    .footer {
      flex-direction: column;
    }
    .header {
      h1 {
        font-size: 1em;
      }
    }
  }
</style>
