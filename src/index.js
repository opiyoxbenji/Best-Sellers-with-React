import React from 'react'; //for libraries
import ReactDOM from 'react-dom/client';

import './index.css'; //for our own folders or files
import { books } from './books'; // {} for getting a specific item
import Book from './book';

const BookList = () => {
    return (
        <section className='booklist'>
            {books.map(book => {
                //with the spread op
                return <Book {...book} key={book.id} />;
            })}
        </section>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

// before book
// const EventExamples = () => {
// const handleFormInput = e => {
//     console.log(e.target);
//     console.log(e.target.name);
//     console.log(e.target.value);
// };
// const handleButtonClick = () => {
//     alert('Handle Button Click');
// };
// const handleFormSubmission = e => {
//     e.preventDefault(); //we will handle form submissions
//     console.log('form submitted');
// };
//     return (
//         <section>
//             {/* add onSubmit Event Handler */}
//             <form onSubmit={handleFormSubmission}>
//                 <h2>Typical Form</h2>
//                 <input
//                     type='text'
//                     name='example'
//                     onChange={handleFormInput}
//                     style={{ margin: '1rem 0' }}
//                 />
//                 {/* add button with type='submit' */}
//                 <button type='submit'>submit form</button>
//             </form>
//             <button onClick={handleButtonClick}>clicky </button>
//         </section>
//     );
// };

//after book
//adding the children prop
// const Book = ({ img, title, author, children }) => {
//     return (
//         <article className='book'>
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//             {children}
//         </article>
//     );
// };

/* <h4 style={{color: '#617d98',fontSize: '0.75rem',marginTop: '0.5rem',}}></h4> */

//Creating different components
// const Image = () => (
//     <h2>
//         <img src='./images/young_forever.jpg' alt='Young Forever' />
//     </h2>
// );
// const Title = () => <h2>Young Forever</h2>; //Implicit return
// const Author = () => {
//     const inlineHeadingStyles = {
//         color: '#617d98',
//         fontSize: '0.75rem',
//         marginTop: '0.5rem',
//     };
//     return (
//         // explicit return
//         <h4 style={inlineHeadingStyles}>Dr. Mark Hyman MD </h4>
//     ); //CSS inline styles
// };

//array map //is declarative -> use functions to describe state
// const users = [{ name: 'illenium' }, { name: 'khali' }, { name: 'chain' }];

// const usernames = users.map(user => user.name);
// console.log(usernames)
