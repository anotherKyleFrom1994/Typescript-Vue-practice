<template>
  <v-app id="login">
    <v-container fluid
                 class="fill-height">
      <v-row align="center"
             justify="center">
        <v-col xs="12"
               sm="8"
               md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary"
                       dark
                       flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <large-btn icon
                             target="_blank">
                    <v-icon>mdi-code-tags</v-icon>
                  </large-btn>
                </template>
                <span>Source</span>
              </v-tooltip>
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <large-btn icon
                             href="https://codepen.io/johnjleider/pen/pMvGQO"
                             target="_blank">
                    <v-icon>mdi-codepen</v-icon>
                  </large-btn>
                </template>
                <span>Codepen</span>
              </v-tooltip>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field v-model="username"
                              :rules="[checkColumn(username, loginColType.Username)]"
                              label="Login"
                              prepend-icon="person"
                              type="text">
                </v-text-field>

                <v-text-field v-model="password"
                              :rules="[checkColumn(password, loginColType.Password)]"
                              label="Password"
                              prepend-icon="lock"
                              type="password">
                </v-text-field>

              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
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

<script lang="ts"
        src="./Login.ts" />
