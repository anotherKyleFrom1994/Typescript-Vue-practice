
<template>
  <div class="login">
    login
    <!-- <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    <ul>
      <li>
        <a v-if="isLink" :target="target" :href="href">{{ displayWording }}</a>
        {{ displayWording }}
      </li>
    </ul> -->
    <router-link to="/about">123123 </router-link>
    <router-view></router-view>
    <ListItem title="1111"></ListItem>
  </div>
</template>
<script lang="ts" src="./Login.ts"/>

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
