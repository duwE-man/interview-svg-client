import { ref } from "vue"
const conn = new WebSocket('ws://localhost:8081');

const message = ref<string>()

if (conn) {
  conn.onopen = function (evt) {
    console.log('Connection open ...');
    conn.send('Hello WebSockets!');
  }
  conn.onclose = function (evt) {
    console.log('Connection closed.');
  };
  conn.onmessage = async (evt) => {
    const response = await evt.data
    message.value = await response.text()
  }
}

export { conn, message }