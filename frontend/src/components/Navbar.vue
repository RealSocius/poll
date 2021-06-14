<template>
  <nav>
    <router-link to="/"><img src="../assets/logo.png" /></router-link>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/">Polls</router-link>
      <router-link to="/">About</router-link>
    </div>
    <div class="verwalten">
      <input type="text" placeholder="Manage your poll" />
      <img src="../assets/go.png" />
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pollId: String,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  box-shadow: 0 0.43vw 0.43vw rgba($color: #000, $alpha: 0.1);
  margin-bottom: 5vw;
  height: 5vw;
  background: #0f4c75;
  display: flex;
  align-items: center;
  padding: 0 2vw;
  img {
    width: 10vw;
  }
  .links {
    margin-left: 3vw;
    a {
      margin-right: 2vw;
      color: #fff;
      font-size: 1.33vw;
      text-decoration: none;
    }
  }
  .verwalten {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      box-sizing: border-box;
      transition: 0.3s;
      margin-left: auto;
      padding: 0.5vw 1vw;
      border-radius: 2.6vw;
      outline: 0;
      border: 0;
      font-family: Roboto;
      color: #404040;
      margin-right: 1vw;
      border: 0.1vw solid #404040;
      &:focus {
        border: 0.1vw solid #bbfabd;
      }
    }
    img {
      width: 2vw;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
}
</style>
