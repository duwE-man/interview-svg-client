<script setup lang="ts">
import { ref, onMounted } from "vue"
import { fabric } from "fabric"

const test = ref<HTMLCanvasElement>()
const canvas = ref<any>(null)

onMounted(() => {
  if (test.value) {
    canvas.value = new fabric.Canvas(test.value)
    canvas.value.isDrawingMode = true;
    canvas.value.freeDrawingBrush.width = 5;
    canvas.value.freeDrawingBrush.color = '#00aeff';
  }
})
const vars = ref("")
const test123 = () => {
  console.log("hello")
  console.log(canvas.value.toSVG())
}
</script>

<template>
  <canvas class="test" ref="test">
    Hello wolrd
  </canvas>
  <button @click="test123">Hello world</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.test {
  width: 500px;
  height: 500px;
}
</style>
