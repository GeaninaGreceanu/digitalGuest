<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Log In</router-link>
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/user">User</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.infoField {
    width: 55%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    text-align: center;
    margin-bottom: 27px;
    font-family: "Ubuntu", sans-serif;
    }
    .infoField:focus {
    border: 2px solid rgba(0, 0, 0, 0.18) !important;
    }
    .btn {
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    /* background: linear-gradient(to right, #9c27b0, #e040fb); */
    background: rgb(27,73,123);
    border: 0;
    width: 25%;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: "Ubuntu", sans-serif;
    font-size: 13px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    }

    
    form {
    background-color: #ffffff;
    width: 50%;
    padding: 2.5%;
    margin: 3em auto;
    border-radius: 1.5em;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    }
    .disbtn {
      background: darkgrey;
    }
    .savebtn {
      background: green;
    }
    .cancelbtn {
      background: darkslategrey;
    }
</style>
