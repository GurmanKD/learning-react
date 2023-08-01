import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

// function Greeting() {
//   return (
//     <React.Fragment>
//       <h2>My first component</h2>
//       <ul>
//         <li>
//           <a href='#'>hi</a>
//         </li>
//       </ul>
//     </React.Fragment>
//   );
// }

// const Greeting2 = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "hello world")
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting></Greeting>);
// root.render(<Greeting2></Greeting2>);

// //Nesting
// function Greeting3() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>Gurman Kaur</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };
// root.render(<Greeting3></Greeting3>);

const author = 'Jordan Moore';
const title = 'Interesting Facts For Curious Minds';
const img = './images/book-1.jpg';

// // parameters
// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// }; 
// // arguments
// someFunc("job", "developer");


function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {

    return (
      <article className='book'>
        <img
          src={img}
          alt={title}
        />
        <h2>{title}</h2>
        <h4>{author.toUpperCase()}</h4>
        {/* <p>{let x=6}</p>  */}
        {/* only return statements are allowed inside{} */}
      </article>
    )
};

// const Image = () => (
//   <img src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
//   alt="Interesting Facts for Curious Minds"/>
// )

// const Image = () => (
//   <img src='./images/book-1.jpg' alt='Interesting Facts For Curious Minds' />
// )
//whatever assets we place in public - instantly available

// const Title = () => {
//   return <h2>Interesting Facts For Curious Minds</h2>
// };
// const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}}>Jordan Moore</h4>;

//// WAY 2
// const Author1 = ()=>{
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   };
//   return<h4 styles={inlineHeadingStyles}>Jordan Moore</h4>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

