import React from 'react'; //for libraries
import ReactDOM from 'react-dom/client';

import './index.css'; //for our own folders or files
import { books } from './books'; // {} for getting a specific item
import Book from './book';

const BookList = () => {
    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className='booklist'>
                {books.map((book, index) => {
                    //with the spread op
                    return <Book {...book} key={book.id} number={index} />;
                })}
            </section>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
