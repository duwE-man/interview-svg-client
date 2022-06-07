<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import { fabric } from "fabric"

import { conn, message } from "./helpers/websocket-api"

const canvasElement = ref<HTMLCanvasElement>()
const area = ref<HTMLDivElement>()
const canvas = ref<any>(null)
const imageServer = ref<HTMLDivElement>()

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
  conn.send(canvas.value.toSVG())
}

watch(message, (value) => {
  if (value) {
    const svgNode = document.createRange().createContextualFragment(value);
    imageServer.value?.appendChild(svgNode)
  }
})
</script>

<template>
  <div class="application">
    <div class="drawing-canvas">
      <h1>Drawing canvas</h1>
      <div ref="area" class="drawing-area">
        <canvas ref="canvasElement">
          Hello wolrd
        </canvas>
      </div>
      <div>
        <button @click="sendImageToServer">Send image to server</button>
      </div>
    </div>
    <div ref="imageServer">
      
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
