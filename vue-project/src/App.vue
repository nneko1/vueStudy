<template>
  <form action="submit">
    <table class="main">
      <tr>
        <td>
          <img src="./assets/20675d5.png" width="438.75px" height="504.75px">
        </td>
        <td>
          <web-page></web-page>
        </td>
      </tr>
    </table>
  </form>
</template>

<script>
import WebPage from './components/WebPage.vue'

export default {
  components: {
    'web-page': WebPage
  }
}
</script>

<style>
html {
  background-color: #eff0f1;
  font-family: 맑은고딕, Malgun Gothic, dotum, gulim, sans-serif;
}
form {
  background-color: #eff0f1;
}

table,td {
  border-collapse: collapse;
  border: 0px;
  margin: 0px;
  padding: 0px;
}
img {
  display: block;
}
td {
  background-color: white;
  width: 438.75px;
  height: 504.75px;
}
.main {
  /* vertical-align: middle; */
  margin-top: 108.625px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 108.625px;
}
</style>