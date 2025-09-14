import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and JavaScript",
    description:
      "Learn how to set up a modern React application with JavaScript for better development experience.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    description:
      "Exploring emerging trends and technologies that will shape the future of web development.",
    author: "Mike Chen",
    date: "Dec 12, 2024",
    readTime: "8 min read",
  },
  // ... Add more blogs as needed
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-400">
              <Link to="/">BlogSpace</Link>
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/" className="hover:text-blue-400">Home</Link>
              <Link to="/create" className="hover:text-blue-400">Create Blog</Link>
              <Link to="/login" className="hover:text-blue-400">Login</Link>
              <Link
                to="/signup"
                className="border border-blue-400 px-3 py-1 rounded hover:bg-blue-400 hover:text-white transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to BlogSpace</h1>
        <p className="text-xl mb-8 text-blue-100">
          Share your thoughts, ideas, and stories with the world
        </p>
        <Link
          to="/create"
          className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-100 text-lg"
        >
          Start Writing
        </Link>
      </section>

      {/* Blog Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-3">
                {post.author} • {post.date} • {post.readTime}
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
              <Link
                to={`/blog/${post.id}`}
                className="block text-blue-500 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
