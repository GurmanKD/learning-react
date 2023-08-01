import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <React.Fragment>
      <h2>My first component</h2>
      <ul>
        <li>
          <a href='#'>hi</a>
        </li>
      </ul>
    </React.Fragment>
  );
}

const Greeting2 = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "hello world")
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting></Greeting>);
root.render(<Greeting2></Greeting2>);

//Nesting
function Greeting3() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Gurman Kaur</h2>;
const Message = () => {
  return <p>this is my message</p>;
};
root.render(<Greeting3></Greeting3>);
