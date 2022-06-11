import { ref } from "vue"
const conn = new WebSocket('ws://localhost:8081');

const message = ref<string>()
const name = ref<string>()
const date = ref<string>()

if (conn) {
  conn.onmessage = async (evt) => {
    const response = await evt.data
    const text = await response.text()
    if (text) {
      const json = JSON.parse(text)
      message.value = json.svg
      name.value = json.name
      date.value = json.date
    }
  }
}


const sendToServer = (socket: WebSocket, message: {name: string, svg: string, date: string}) => {
  const msg = JSON.stringify(message)
  socket.send(msg)
}

export { sendToServer, conn, message, name, date }