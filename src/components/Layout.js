import React, { Component } from "react";
import store from "./store";
import List from "./list"

class Layout extends Component {
  render() {
    const { skills } = store.job;
    console.log(skills);
    return (
      <form className="container">
        {skills.map((skill, idx) => (< List
          key={idx} skl={skill} />))
        }
        <button className="sUbmit" type="submit">Submit</button>
      </form >
    );
  }
}

export default Layout;