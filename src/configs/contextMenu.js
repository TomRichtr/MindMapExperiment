import App from "../App";

export const contextMenuOption = {
  focus: true,
  link: true,
  extend: [
    {
      name: "Add a link",
      onclick: () => {
        console.log(App.data().ME());
      },
    },
  ],
};
