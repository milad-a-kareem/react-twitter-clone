import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "milad_a_kareem",
    display_name: "Milad A. Kareem",
    profileImage:
      "https://pbs.twimg.com/profile_images/1434652734993612802/Ra1GO3z7_400x400.jpg",
    cover_image:
      "https://pbs.twimg.com/profile_banners/4127410635/1494595447/1500x500",
    bio: "Data Scientist | Full Stack Developer",
    location: null,
    birthday: "1995-01-01",
    website: "https://miladkareem.com",
    following: 128,
    followers: 31,
    joined: "2015-11-01T00:21:42.534Z",
    tweets: [
      {
        username: "milad_a_kareem",
        display_name: "Milad A. Kareem",
        profileImage:
          "https://pbs.twimg.com/profile_images/1434652734993612802/Ra1GO3z7_400x400.jpg",
        tweetText: `I recently created an app with these three frameworks (React Native, Ionic, Flutter). 
        
🏆 Flutter gave me the best result, especially in performance.
          `,
        hashtags: [
          "#miladkareem",
          "#milad",
          "#crossplatformappdevelopment",
          "#reactnative",
          "#flutter",
          "#ionicframework",
          "#mobileappdevelopment",
        ],
        time: "2022-04-12T00:21:42.534Z",
        replays: 0,
        retweets: 0,
        likes: 2,
        images: [
          "https://pbs.twimg.com/media/FQJvTYMXoAQpXJI?format=png&name=900x900",
        ],
      },
      {
        username: "milad_a_kareem",
        display_name: "Milad A. Kareem",
        profileImage:
          "https://pbs.twimg.com/profile_images/1434652734993612802/Ra1GO3z7_400x400.jpg",
        tweetText: `Alhamdulillah, being a trainer in the WeCode frontend development Bootcamp was a great experience for me.
I like to congratulate the participants of the Bootcamp, thanks for your effort in learning and making a better version of yourself. I wish you the best in the future steps.`,
        hashtags: [],
        time: "2022-04-02T00:21:42.534Z",
        replays: 0,
        retweets: 0,
        likes: 1,
        images: [
          "https://pbs.twimg.com/media/FPS44RxXwAA0LxS?format=jpg&name=4096x4096",
        ],
      },
      {
        username: "milad_a_kareem",
        display_name: "Milad A. Kareem",
        profileImage:
          "https://pbs.twimg.com/profile_images/1434652734993612802/Ra1GO3z7_400x400.jpg",
        tweetText: `Minimum viable product (MVP): is a version of a product with just enough features to be usable by early customers who can then provide feedback for future product development.`,
        hashtags: ["#development", "#productdevelopment"],
        time: "2021-12-20T00:21:42.534Z",
        replays: 0,
        retweets: 2,
        likes: 10,
        images: [
          "https://pbs.twimg.com/media/FHAEOhIXMAEmnu0?format=jpg&name=large",
        ],
      },
    ],
  },
  reducers: {
    changeBday(state, { payload }) {
      state.birthday = payload;
    },
    changeDisplayName(state, { payload }) {
      state.display_name = payload;
    },
    changeProfieImage(state, { payload }) {
      state.profileImage = payload;
    },
    changeCoverImage(state, { payload }) {
      state.cover_image = payload;
    },
    changeBio(state, { payload }) {
      state.bio = payload;
    },
    changeLocation(state, { payload }) {
      state.location = payload;
    },
    changeWebsite(state, { payload }) {
      state.website = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
