2 applications: client + server

node version for trying this 16.13.1

server run: 

yarn

node server.js



client run:

yarn

yarn dev


tests: 

yarn test



A few things what i decided to do:
1. canvas drawing i used fabric js and drawmode: on, also .toSVG() to create the way how to send canvas through websocket
2. there is a posibility to write username on the bottom of the page
3. date is created automatically
4. on the right side is always shown image from the server (it's going to all clients (broadcast))
5. i used vitest for tests, i tested only sending message to server and then printing to component
5. A) i missed drawing, it's because i used fabric js
6. logging: don't understand what you mean with logging but on the client side you can create class logger where you can log, on call probably
something like Logger.info("info") or Logger.error("error"), logger class will store logs (could be defined how many and stuff like that)