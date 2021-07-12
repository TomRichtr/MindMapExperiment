<template>
  <div id="app">
    <div id="map" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
import MindElixir from "mind-elixir";
import { testData } from "./data/testData";

export default {
  name: "App",
  data() {
    return {
      ME: null,
    };
  },
  mounted() {
    this.ME = new MindElixir({
      el: "#map",
      direction: MindElixir.SIDE,
      data: testData,
      draggable: true,
      contextMenu: true,
      toolBar: true,
      nodeMenu: true,
      keypress: true,
      contextMenuOption: {
        focus: true,
        link: true,
        extend: [
          {
            name: "Add a link",
            onclick: () => {
              this.ME.currentNode.appendChild(this.createLinkElement());
              this.ME.container.getElementsByTagName("cmenu")[0].hidden = true;
            },
          },
        ],
      },
    });
    this.ME.init();
  },
  methods: {
    createLinkElement() {
      const htmlString = "<span> 📎</span>";
      const span = document.createElement("span");
      span.innerHTML = htmlString.trim();
      span.firstChild.addEventListener("click", this.openLink);
      return span.firstChild;
    },
    openLink() {
      window.open("https://www.w3schools.com", "_blank");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
