import React, { useState } from "react";
import axios from "axios";
import style from "./mystyle.module.css";

const Home = () => {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const Submit = async () => {
    try {
      await axios.post("http://localhost:2023/api/v1/checker", {
        topic,
        content,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="row" onSubmit={Submit}>
        <div>
          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            type="text"
            placeholder="Input the topic of the article"
            className={style.home_input_1}
          ></textarea>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Input the content of the article"
            className={style.home_input_2}
          ></textarea>
        </div>

        <button className={style.submit_btn}>Submit</button>
      </form>
    </div>
  );
};

export default Home;
