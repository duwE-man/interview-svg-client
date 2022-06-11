const sendToServer = (socket: WebSocket, message: {name: string, svg: string, date: string}) => {
  const msg = JSON.stringify(message)
  socket.send(msg)
}

export { sendToServer }