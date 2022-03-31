import users from "./users";

const conversations = [
  {
    user: users[0],
    messages: [
      {
        from: users[0].username,
        to: "milad_a_kareem",
        message: "I am okay thanks",
        time: "2022-03-29T00:21:42.534Z",
      },
      {
        to: users[0].username,
        from: "milad_a_kareem",
        message: "Hi, not bad, how are you?",
        time: "2022-03-29T00:20:42.534Z",
      },
      {
        from: users[0].username,
        to: "milad_a_kareem",
        message: "Hello, how are you?",
        time: "2022-03-29T00:19:42.534Z",
      },
    ],
  },
];

export default conversations;
