<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import { fabric } from "fabric"

import { sendToServer, conn, message, name, date } from "./components/useApi"

import ImageShower from "./components/ImageShower.vue"

const canvasElement = ref<HTMLCanvasElement>()
const area = ref<HTMLDivElement>()
const canvas = ref<any>(null)

const username = ref("")

onMounted(() => {
  if (canvasElement.value) {
    canvas.value = new fabric.Canvas(canvasElement.value)
    canvas.value.setHeight(area.value?.clientHeight)
    canvas.value.setWidth(area.value?.clientWidth)
    canvas.value.isDrawingMode = true
    canvas.value.freeDrawingBrush.width = 5
    canvas.value.freeDrawingBrush.color = '#00aeff'
  }
})

const sendImageToServer = () => {
  sendToServer(conn, {name: username.value, svg: canvas.value.toSVG(), date: "" + new Date()})
}
</script>

<template>
  <div class="application">
    <div class="drawing-canvas">
      <h1>Drawing canvas</h1>
      <div ref="area" class="drawing-area">
        <canvas data-test="canvas" ref="canvasElement">
        </canvas>
      </div>
      <div>
        <button @click="sendImageToServer">Send image to server</button>
        <input type="text" v-model="username" />
      </div>
    </div>
    <div>
      <image-shower :message="message" :username="name" :date="date"></image-shower>
    </div>
  </div>
</template>

<style lang="scss">
#app, body, html {
  height: 100%;
  margin: 0;
}

.application {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: aquamarine;
  height: 100%;
}

.application .drawing-canvas {
  height: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
}

.application .drawing-canvas .drawing-area {
  height: 100%;
  background-color: white;
}

.application .drawing-canvas .drawing-area .canvas {
  height: 100%;
  background-color: white;
}
</style>
