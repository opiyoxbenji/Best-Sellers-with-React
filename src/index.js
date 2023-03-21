import React from 'react'; //for libraries
import ReactDOM from 'react-dom/client';

import './index.css'; //for our own folders or files

const BookList = () => {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => (
    <h2>
        <img
            src='https://images-na.ssl-images-amazon.com/images/I/813d0G3ILGL._AC_UL300_SR300,200_.jpg'
            alt='Young Forever'
        />
    </h2>
);
const Title = () => <h2>Young Forever</h2>;
const Author = () => {
    return <h4>Dr. Mark Hyman MD </h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
