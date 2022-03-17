import httpService from "./http.service";

const todosEndpoint = "todos/";

const answers = [
  "Вперед!",
  "Сейчас",
  "Сделай это",
  "Да",
  "Думаю, стоит",
  "Надейся на это",
  "Все получится",
  "Это круто",
];

const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndpoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
  post: async () => {
    const { data } = await httpService.post(todosEndpoint, {
      title: answers[Math.floor(Math.random() * answers.length)],
      completed: false,
    });
    console.log(data);
    return data;
  },
};

export default todosService;
