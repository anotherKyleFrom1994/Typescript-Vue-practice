<template>
  <div class="listItem">
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    <ul>
      <li>
        <a v-if="isLink" :target="target" :href="href">{{ displayWording }}</a>
        {{ displayWording }}
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* h1,
  h2 {
    font-weight: normal;
  }

  ul {`
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  } */
</style>

<script src="./list_item.ts" />
