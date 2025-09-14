import { Link } from 'react-router-dom';
import { useState } from 'react';

const blogPost = {
  id: 1,
  title: "Getting Started with React and TypeScript",
  content: `
React and TypeScript make a powerful combination for building modern web applications. TypeScript brings static type checking to JavaScript, which helps catch errors early in development and provides better tooling support.

## Why Use TypeScript with React?

TypeScript offers several advantages when working with React:

1. **Type Safety**: Catch errors at compile time rather than runtime
2. **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
3. **Self-Documenting Code**: Types serve as inline documentation
4. **Easier Refactoring**: Confident code changes with type checking

## Setting Up Your Project

The easiest way to get started is using Create React App with the TypeScript template:

\`\`\`bash
npx create-react-app my-app --template typescript
cd my-app
npm start
\`\`\`

## Component Props with TypeScript

When creating React components with TypeScript, you'll want to define interfaces for your props:

\`\`\`typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
\`\`\`

## Conclusion

TypeScript and React work beautifully together to create maintainable, scalable applications. The initial learning curve is worth the long-term benefits of type safety and improved developer experience.
`,
  author: "Sarah Johnson",
  date: "December 15, 2024",
  readTime: "5 min read",
};

const comments = [
  {
    id: 1,
    author: "Mike Chen",
    content: "Great article! This makes TypeScript seem much more approachable.",
    date: "2 hours ago",
  },
  {
    id: 2,
    author: "Emily Davis",
    content: "Loved the props interface example – really clear!",
    date: "5 hours ago",
  },
  {
    id: 3,
    author: "Alex Rodriguez",
    content: "Type safety has prevented so many bugs on our team.",
    date: "1 day ago",
  },
];

export default function BlogPost() {
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [allComments, setAllComments] = useState(comments);

  const handleAddComment = () => {
    if (!commentAuthor || !newComment) return;
    setAllComments([
      ...allComments,
      {
        id: allComments.length + 1,
        author: commentAuthor,
        content: newComment,
        date: "Just now",
      },
    ]);
    setNewComment('');
    setCommentAuthor('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-4">
          <Link to="/" className="text-sm text-gray-600 hover:text-blue-600">&larr; Back to Blog</Link>
          <Link to="/" className="text-lg font-bold text-blue-600">BlogSpace</Link>
        </div>
      </nav>

      {/* Blog Article */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <article className="bg-white p-8 rounded shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{blogPost.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-6 space-x-6">
            <span><strong>{blogPost.author}</strong></span>
            <span>{blogPost.date}</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-xs">{blogPost.readTime}</span>
          </div>

          {/* Render Content */}
          <div className="prose prose-lg max-w-none">
            {blogPost.content.split("\n").map((line, i) => {
              if (line.trim() === "") return null;
              if (line.startsWith("## ")) {
                return <h2 key={i}>{line.replace("## ", "")}</h2>;
              }
              if (line.match(/^\d+\./)) {
                return <li key={i}>{line.replace(/^\d+\.\s*/, "")}</li>;
              }
              if (line.startsWith("```")) return null; // skip code block wrappers
              return <p key={i}>{line}</p>;
            })}
          </div>
        </article>

        {/* Comments */}
        <section className="mt-12">
          <div className="bg-white p-8 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Comments ({allComments.length})</h3>

            {/* New Comment */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Leave a Comment</h4>
              <input
                type="text"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                placeholder="Your name"
                className="w-full border border-gray-300 rounded px-4 h-10 mb-3"
              />
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write your comment here..."
                className="w-full border border-gray-300 rounded px-4 py-2 min-h-[100px]"
              />
              <button
                onClick={handleAddComment}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              >
                Post Comment
              </button>
            </div>

            {/* Comment List */}
            <div className="space-y-4">
              {allComments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 p-4 rounded">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="font-semibold text-gray-800">{comment.author}</h5>
                    <span className="text-xs text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
