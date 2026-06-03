import React from 'react';
import './Reading.css';

const books = [
  {
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell & Peter Norvig',
    imgSrc: 'https://picsum.photos/seed/ai-modern-approach/300/450',
    category: 'AI',
    description: 'The definitive textbook on search, reasoning, machine learning, and intelligent agents.',
  },
  {
    title: 'Deep Learning',
    author: 'Ian Goodfellow, Yoshua Bengio & Aaron Courville',
    imgSrc: 'https://picsum.photos/seed/deep-learning-book/300/450',
    category: 'AI',
    description: 'Foundational reference on neural networks, optimization, and representation learning.',
  },
  {
    title: 'Life 3.0',
    author: 'Max Tegmark',
    imgSrc: 'https://picsum.photos/seed/life-3-0/300/450',
    category: 'AI',
    description: 'Being human in the age of artificial intelligence — ethics, consciousness, and the future.',
  },
  {
    title: 'Hands-On Machine Learning',
    author: 'Aurélien Géron',
    imgSrc: 'https://picsum.photos/seed/hands-on-ml/300/450',
    category: 'AI',
    description: 'Practical Scikit-Learn, Keras & TensorFlow for real-world ML projects.',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    imgSrc: 'https://picsum.photos/seed/sapiens/300/450',
    category: 'History',
    description: 'A brief history of humankind — from the Cognitive Revolution to the present.',
  },
  {
    title: 'Guns, Germs, and Steel',
    author: 'Jared Diamond',
    imgSrc: 'https://picsum.photos/seed/guns-germs-steel/300/450',
    category: 'History',
    description: 'Why societies developed differently across geography, resources, and power.',
  },
  {
    title: 'The Silk Roads',
    author: 'Peter Frankopan',
    imgSrc: 'https://picsum.photos/seed/silk-roads/300/450',
    category: 'History',
    description: 'A new history of the world through trade routes connecting East and West.',
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    imgSrc: 'https://picsum.photos/seed/brief-history-time/300/450',
    category: 'History',
    description: 'Cosmology, black holes, and the origins of the universe explained for everyone.',
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">
        Favorites across artificial intelligence and world history.
      </p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div
            key={index}
            className="book-card"
            style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
          >
            <img
              src={book.imgSrc}
              alt={book.title}
              className="book-cover"
              loading="lazy"
            />
            <div className="book-info">
              <span className="book-category">{book.category}</span>
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
