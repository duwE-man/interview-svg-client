import { mount } from '@vue/test-utils'
import WS from "jest-websocket-mock";
import { sendToServer } from '../components/useApi';
import ImageShower from '../components/ImageShower.vue'
import { nextTick} from "vue"

test("sending image data to server", async () => {
  const server = new WS("ws://localhost:1234", { jsonProtocol: true });
  const client = new WebSocket("ws://localhost:1234");

  await server.connected;
  const testDate = new Date()
  sendToServer(client, { "name": "koteles", svg: "<svg/>", date: "" + testDate })

  await expect(server).toReceiveMessage({ "name": "koteles", svg: "<svg/>", date: "" + testDate });
});

test('show image in component', async () => {
  const wrapper = mount(ImageShower, {props: {message: "<div>Test showing v-html</div>", username: "david"}})
  console.log(wrapper.html())
  expect(wrapper.html()).toContain("Test showing v-html")
})