import users from "./users";

const conversations = [
  {
    user: users[0],
    messages: [
      {
        id: "0001",
        from: users[0].username,
        to: "milad_a_kareem",
        message: "I am okay thanks",
        time: "2022-03-29T00:21:42.534Z",
      },
      {
        id: "0002",
        to: users[0].username,
        from: "milad_a_kareem",
        message:
          "Hi, not bad, how are you? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2022-03-29T00:20:42.534Z",
      },
      {
        id: "0003",
        from: users[0].username,
        to: "milad_a_kareem",
        message: "Hello, how are you?",
        time: "2022-03-29T00:19:42.534Z",
      },
    ],
  },
  {
    user: users[1],
    messages: [
      {
        id: "0004",
        from: users[1].username,
        to: "milad_a_kareem",
        message: "I am okay thanks2",
        time: "2022-03-29T00:21:42.534Z",
      },
      {
        id: "0005",
        to: users[1].username,
        from: "milad_a_kareem",
        message: "Hi, not bad, how are you?2",
        time: "2022-03-29T00:20:42.534Z",
      },
      {
        id: "0006",
        from: users[1].username,
        to: "milad_a_kareem",
        message: "Hello, how are you?2",
        time: "2022-03-29T00:19:42.534Z",
      },
    ],
  },
];

export default conversations;
