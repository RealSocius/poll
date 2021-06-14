<template>
  <div id="poll">
    <h1>Create your poll today</h1>
    <p>🧊 Polls too chilled for the north pole 🥶</p>
    <form>
      <p>Informations</p>
      <div class="input">
        <input
          type="text"
          placeholder="Enter your poll's title ... (required)"
          v-model="title"
        />
      </div>
      <div class="input">
        <input
          type="text"
          placeholder="Enter your name ... (optional)"
          v-model="creator"
        />
      </div>
      <div class="input">
        <textarea
          placeholder="Enter your poll's description ... (optional)"
          v-model="description"
        ></textarea>
      </div>
      <p>Possible anwsers</p>
      <div class="input anwser" v-for="(anwser, index) of anwsers" :key="index">
        <input type="text" v-model="anwsers[index]" @input="input" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: String(),
      description: String(),
      creator: String(),
      anwsers: [""],
    };
  },
  methods: {
    input() {
      for (let index = 1; index < this.anwsers.length; index++) {
        if (this.anwsers[index] == "") {
          this.anwsers.splice(index, 1);
        }
      }
      console.log(this.anwsers.length);
      if (this.anwsers[this.anwsers.length - 1] != "") {
        this.anwsers.push("");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#poll {
  box-sizing: border-box;
  box-shadow: 0.42vw 0.83vw 0.83vw rgba($color: #000, $alpha: 0.2);
  border-radius: 1.04vw;
  width: 70vw;
  min-height: 30vw;
  margin: 0 auto;
  background: #303940;
  padding: 1vw;
  h1 {
    text-align: center;
    font-size: 2.5vw;
    font-weight: bold;
  }
  p {
    text-align: center;
    font-size: 1.25vw;
    font-style: italic;
    margin-bottom: 1vw;
  }
  form p {
    text-align: center;
    font-size: 1.25vw;
    font-style: normal;
    margin: 2vw 0;
  }
  .input {
    width: 70%;
    margin: 1vw auto;
    input {
      width: 100%;
      transition: 0.3s;
      font-family: Roboto;
      font-size: 1vw;
      background: transparent;
      outline: 0;
      border: 0;
      padding: 0.2vw;
      border-bottom: 0.1vw solid #1b262c;
      &:focus {
        border-bottom: 0.1vw solid #3282b8;
      }
    }
    textarea {
      width: 100%;
      transition: 0.3s;
      font-family: Roboto;
      font-size: 1vw;
      background: transparent;
      outline: 0;
      border: 0;
      padding: 0.2vw;
      border-bottom: 0.1vw solid #1b262c;
      &:focus {
        border-bottom: 0.1vw solid #3282b8;
      }
    }
  }
}
</style>
