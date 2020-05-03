<template>
  <Layout>
    <section class="preamble">
      <p>
        This <a target="_blank" class="link" href="//gridsome.org">Gridsome</a> Asciidoc starter project showcases the
        capabilities (and limitations) of the Gridsome <a target="_blank" class="link" href="//github.com/dotdev/transformer-asciidoc">transformer-asciidoc</a>.
      </p>
      <p>
        The best way to learn about Asciidoc is on official <a target="_blank" href="//asciidoctor.org">asciidoctor.org</a>&nbsp;&nbsp;<a target="_blank" href="//asciidoctor.org/docs/user-manual">user manual</a> or
        <a target="_blank" href="//asciidoctor.org/docs/asciidoc-syntax-quick-reference/">syntax quick reference</a>.
      </p>
      <p>In the blog posts listed below you can some of the syntax explained and showcased, but by no means does this try to demonstrate all of asciidoc's abilities.</p>
    </section>
    <section class="posts">
      <PostList v-for="year in years" :key="year" :year="year"/>
    </section>
  </Layout>
</template>

<script>
  import PostList from "@/components/PostList";

  export default {
    components: {
      PostList,
    },
    metaInfo: {
      title: "A simple Asciidoc blog"
    },
    computed: {
      years() {
        const years = {};
        const posts = this.$page.allPost.edges;
        posts.map((post) => {
          const year = post.node.revdate.split(" ")[2];
          years[year] = "";
        });
        return Object.keys(years).sort((a, b) => {
          return b - a;
        });
      }
    }
  };
</script>

<page-query>
  query {
    metadata {
      siteName
      siteDescription
    }
    allPost(filter: { revdate: { gte: "2020" }}, sortBy: "revdate", order: ASC) {
      totalCount
      edges {
        node {
          id
          title
          timeToRead
          revdate (format: "MMM D YYYY")
          path
          fileInfo {
            path
          }
        }
      }
    }
  }
</page-query>
