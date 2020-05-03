<template>
  <Layout>
    <div class="article">
      <h1 class="article-title">{{$page.post.title}}</h1>
      <p class="article-date">{{ $page.post.revdate}} · <i>{{$page.post.timeToRead}} min read</i></p>
      <p class="article-author">by {{$page.post.authors}}</p>
      <article v-html="$page.post.content"/>
    </div>
  </Layout>
</template>

<script>
  import Header from "@/components/Header";

  export default {
    components: {
      Header
    },
    metaInfo() {
      return {
        title: this.$page.post.title,
      }
    },
    mounted() {
      if (this.$page.post.chart !== "") {
        const Chartist = require('chartist');
        const charts = document.querySelectorAll(".ct-chart");
        charts.forEach((node) => {
          const options = {
            height: node.dataset['chartHeight'],
            width: node.dataset['chartWidth'],
            colors: node.dataset['chartColors'].split(','),
          };
          const dataset = Object.assign({}, node.dataset);
          const series = Object.values(Object.keys(dataset)
            .filter((key) => key.startsWith('chartSeries-'))
            .reduce((obj, key) => {
              obj[key] = dataset[key];
              return obj;
            }, {})).map((value) => value.split(','));
          const data = {
            labels: node.dataset['chartLabels'].split(','),
            series: series,
          };
          Chartist[node.dataset['chartType']](node, data, options);
        });
      }
    }
  };
</script>


<page-query>
  query Post ($path: String!) {
    metadata {
      siteName
      siteDescription
    }
    post: post (path: $path) {
      id
      title
      authors
      content
      revdate (format: "D MMMM YYYY")
      timeToRead
      fileInfo {
        path
      }
    }
  }
</page-query>

<style lang="scss">
  .katex {
    @import '~katex/dist/katex.css';
  }

  .ct-chart {
    @import "~chartist/dist/chartist.min.css";
  }

  .article {
    margin-top: 15px;
  }

  .article-title {
    margin-bottom: 0;
  }

  .article-date {
    color: var(--app-font-color);
    margin-top: 0;
    margin-bottom: 0.2em;
    font-size: .8em;
  }

  .article-author {
    color: var(--app-font-color);
    margin-top: 0;
    font-size: .8em;
    padding-left: 1em;
  }

  .article th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
  }

  .article td {
    border-top: 1px solid #ddd;
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
  }

  .article tr:nth-child(odd) td {
    background-color: #f9f9f9;
  }

  .article img {
    width: 80%;
    display: block;
    margin: 10px auto;

    &[alt=Logo] {
      display: inline-block;
      margin: 0;
      width: 18px;
    }
  }

  ul {
    li {
      p {
        margin: 0.2em 0;
      }
    }
  }

  code {
    font-size: 0.9rem;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    background-color: #f5f2f0;
    padding: 2px 5px;
    color: #a81042;
  }

  .listingblock {
    .title {
      font-size: 0.95rem;
      color: #424242;
      font-style: italic;
      margin-bottom: -0.4em;
    }
  }

  code[class*="language-"] {
    font-size: 0.9rem;
  }

  .colist {
    tr:nth-child(odd) td {
      background: none;
      border: none;
    }

    tr:nth-child(even) td {
      background: none;
      border: none;
    }
  }

  img {
    max-width: 100%;
  }

</style>
