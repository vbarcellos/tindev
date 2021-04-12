import React from "react";

export const AppContext = React.createContext();

const reducer = (state, action) => {
  // const playing = getPlaying(state);
  // const ct = getCurrentTrack(state);
  // const user = getUser(state);

  switch (action.type) {
    case "LOGOUT": {
      return {
        ...state,
        auth: {
          ...state.auth,
          user: null,
        },
      };
    }
    case "LOGGED_IN": {
      return {
        ...state,
        auth: {
          ...state.auth,
          user: action.user,
        },
      };
    }

    case "SIGN_UP": {
      return {
        ...state,
        users: [...state?.users, action.user],
      };
    }

    default: {
      return state;
    }
  }
};

const logger = (reducer) => {
  const reducerWithLogger = (state, action) => {
    console.log(
      "%cPrevious State:",
      "color: #9E9E9E; font-weight: 700;",
      state
    );
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    console.log(
      "%cNext State:",
      "color: #47B04B; font-weight: 700;",
      reducer(state, action)
    );
    return reducer(state, action);
  };

  return reducerWithLogger;
};

const loggerReducer = logger(reducer);

const initialState = {
  auth: {
    user: null,
  },
  users: [
    {
      email: "admin@gmail.com",
      name: "admin",
      password: "123456",
      username: "admin",
      img: "https://i.imgur.com/1j7Sasc.png",
      bio: "Administrador do Sistema",
      position: "Sys admin",
    },
    {
      email: "victor@gmail.com",
      name: "Victor Barcellos",
      password: "123456",
      username: "victor",
      img: "https://i.imgur.com/tZLhFXT.png",
      bio:
        "Full stack software developer based in Belo Horizonte, Brazil. Currently working on advancing the mining industry at Geolabor.",
      position: "Full-Stack Developer",
      openChats: [
        {
          username: "pedro",
          conversation: [{ pedro: "Bom dia" }, { victor: "Bom dia" }],
        },
      ],
    },
    {
      email: "pedro@gmail.com",
      name: "Pedro Antônio",
      password: "123456",
      username: "pedro",
      img: "https://i.imgur.com/EVl2or1.png",
      bio:
        "Front-End developer currently working at Framework. I love learning and sharing knowledge about coding, science and psychology",
      position: "Front-End Developer",
    },
    {
      email: "joao@gmail.com",
      name: "João Silva",
      password: "123456",
      username: "joao",
      img: "https://i.imgur.com/4zYirzt.png",
      bio:
        "Two years of MEAN stack experience, had to move due to personal reasons, currently looking for a job",
    },
  ],
};

export function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState,
  };

  let [state, dispatch] = React.useReducer(reducer, fullInitialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export const AppContextConsumer = AppContext.Consumer;

// State action creators
export const logout = () => ({
  type: "LOGOUT",
});

export const loggedIn = (user) => ({
  type: "LOGGED_IN",
  user,
});

export const signup = (user) => ({
  type: "SIGN_UP",
  user,
});

// State selectors
export const getUser = (state) => state?.auth?.user;
export const getUsers = (state) => state?.users;
