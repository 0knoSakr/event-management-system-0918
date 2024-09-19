import React from "react";

const CreateEventPage = () => {
  return (
    <div className="App">
      <h1>イベント作成</h1>
      <form className="textBox">
        <div>
          <label htmlFor="">イベント名:</label>
          <input type="text" />
        </div>
        <button>追加</button>
      </form>
    </div>
  );
};

export default CreateEventPage;
