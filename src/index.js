import React from 'react'; //for libraries
import ReactDOM from 'react-dom/client';

import './index.css'; //for our own folders or files
const firstBook = {
    author: 'Dr. Mark Hyman MD',
    title: 'Young Forever',
    img: './images/young_forever.jpg',
};

const secondBook = {
    author: 'Colleen Hoover',
    title: 'It Ends with Us',
    img: './images/it-ends-with-us.jpg',
};

const thirdBook = {
    author: 'Bonnie Garmus',
    title: 'Lessons in Chemistry',
    img: './images/lessons-in-chem.jpg',
};

const fourthBook = {
    author: 'Colleen Hoover',
    title: 'It Starts with Us',
    img: './images/it-starts-with-us.jpg.jpg',
};

const BookList = () => {
    return (
        <section className='booklist'>
            <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            />
            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
            <Book
                author={thirdBook.author}
                title={thirdBook.title}
                img={thirdBook.img}
            />
            <Book
                author={fourthBook.author}
                title={fourthBook.title}
                img={fourthBook.img}
            />
        </section>
    );
};

const Book = props => {
    const { img, title, author } = props; //using destructuring
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

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
