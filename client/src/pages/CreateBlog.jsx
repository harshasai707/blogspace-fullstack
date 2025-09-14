// client/src/pages/CreateBlog.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api"; // axios instance you already added

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Protect route: redirect to login if no token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handlePublish = async (e) => {
    e.preventDefault();
    setError("");
    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await API.post("/blogs", { title, content });
      // on success, redirect to the blog details page (or home)
      const created = res.data;
      navigate(`/blog/${created._id}`);
    } catch (err) {
      console.error("Publish error:", err);
      setError(err.response?.data?.error || err.response?.data?.message || "Failed to publish blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm flex items-center space-x-1">
                <span className="inline-block">&larr;</span>
                <span>Back</span>
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Create New Blog Post</h1>
            </div>
            <Link to="/" className="text-lg font-bold text-blue-600">BlogSpace</Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Write Your Story</h2>

          {error && <div className="mb-4 text-red-600">{error}</div>}

          <form onSubmit={handlePublish} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-base font-medium text-gray-700 mb-1">
                Blog Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter an engaging title for your blog post..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 h-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-base font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea
                id="content"
                placeholder="Start writing your blog post here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[320px] border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t">
              <Link to="/" className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 text-gray-700">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-2 text-white rounded ${loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"}`}
              >
                {loading ? "Publishing..." : "Publish Post"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
