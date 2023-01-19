import axios from "axios";

const backendApi = axios.create({
  baseURL: "http://185.233.117.105:1337/api",
});

backendApi.interceptors.response.use(
  (response) => [null, response.data],
  (error) => [error, null]
);

const chatIds = [904054855, 1133429141]; // Kirill: 688334536

//* Events
export const getEventsFetch = () =>
  backendApi.get("/events?pagination[pageSize]=50");

//* Telegram Bot
export const sendMessageToBot = (sendText) =>
  chatIds.forEach((chatId) => {
    axios.post(
      "https://api.telegram.org/bot5603004166:AAFen05We0DnU5I5p5xcdENooDn-MRBYlxQ/sendMessage",
      {
        chat_id: chatId,
        text: sendText,
      }
    );
  });
