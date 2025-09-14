import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './CreateBlog.css';

export default function EditBlog() {
  const { id } = useParams();

  const [title, setTitle] = useState('Sample Blog Title');
  const [content, setContent] = useState('Sample content to edit.');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated:', { id, title, content });
  };

  return (
    <div className="create-blog-container">
      <h2>Edit Blog</h2>
      <form className="create-blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
