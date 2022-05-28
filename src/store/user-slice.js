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
    tweets: [
      {
        username: "clifton_addison",
        display_name: "Clifton B. Addison",
        profileImage:
          "https://pbs.twimg.com/profile_images/1434652734993612802/Ra1GO3z7_400x400.jpg",
        verified: true,
        tweetText: `
          تقبل الله منا ومنكم صالح الأعمال.
رمضان كريم.
          `,

        time: "2022-05-02T00:21:42.534Z",
        replays: 0,
        retweets: 0,
        likes: 2,
        images: [],
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
