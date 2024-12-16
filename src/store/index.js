import { createStore } from 'vuex';

const initialState = {
  posts: [
      {
        "id":1,
        "userName": "WanderingMind42",
        "date": "2023-11-01",
        "text": "I just invested in dogecoin",
        "profilePicture": "/res/images/profilepic1.png",
        "image": "/res/images/IMG_5411.png",
        "imageTextDescription": "A silly cat"
      },
      {
        "id":2,
        "userName": "EchoThoughts",
        "date": "2023-11-01",
        "text": "Go to the moooon!!!",
        "profilePicture": "/res/images/profilepic2.jpg",
        "image": null,
        "imageTextDescription": null
      },
      {
        "id":3,
        "userName": "QuietObserver",
        "date": "2023-11-01",
        "text": "That's a good idea!",
        "profilePicture": "/res/images/profilepic3.jpg",
        "image": "/res/images/IMG_5799.jpg",
        "imageTextDescription": "An exploding cat saying on my way"
      },
      {
        "id":4,
        "userName": "HiddenVoice",
        "date": "2023-11-01",
        "text": "lol",
        "profilePicture": "/res/images/profilepic4.jpg",
        "image": null,
        "imageTextDescription": null
      },
      {
        "id":5,
        "userName": "PixelGhost",
        "date": "2023-11-01",
        "text": "I'm trying to find out who asked",
        "profilePicture": "/res/images/profilepic5.jpg",
        "image": "/res/images/IMG_5800.jpg",
        "imageTextDescription": "A cat on a telephone"
      },
      {
        "id":6,
        "userName": "SadCat",
        "date": "2023-11-01",
        "text": "I did",
        "profilePicture": "/res/images/profilepic6.jpg",
        "image": "/res/images/IMG_6017.png",
        "imageTextDescription": "A nerdy cat about to correct someone"
      },
      {
        "id":7,
        "userName": "AnonScribe",
        "date": "2023-11-01",
        "text": "Nerd",
        "profilePicture": "/res/images/profilepic7.jpg",
        "image": null,
        "imageTextDescription": null
      },
      {
        "id":8,
        "userName": "SleeplessMuse",
        "date": "2023-11-01",
        "text": "Anyone know how to get rich quickly?",
        "profilePicture": "/res/images/profilepic8.jpg",
        "image": null,
        "imageTextDescription": null
      },
      {
        "id":9,
        "userName": "UrbanNomad",
        "date": "2023-11-01",
        "text": "Buy some NFT-s",
        "profilePicture": "/res/images/profilepic9.jpg",
        "image": "/res/images/IMG_6571.jpg",
        "imageTextDescription": "A cat in a suit"
      },
      {
        "id":10,
        "userName": "ShadowsSpeak",
        "date": "2023-11-01",
        "text": "UrbanNomad right now",
        "profilePicture": "/res/images/profilepic10.jpg",
        "image": "/res/images/IMG_7001.png",
        "imageTextDescription": "A cat that likes to give people reasons to hate it"
      }
    ]
  }

export default createStore({
  state: {
    // Add your global state properties here
    ...initialState,
  },
  mutations: {
    // Add your synchronous state modification functions here
  },
  actions: {
    // Add your asynchronous functions or logic here
  },
  getters: {
    // Add your state-derived computed properties here
    allPosts: (state) => state.posts,
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
  },
},
});
