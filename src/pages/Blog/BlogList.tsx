import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './Blog.css';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Understanding Financial Data Analysis',
    excerpt: 'Learn the basics of analyzing financial data using Excel and modern tools.',
    date: '2025-11-20',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Optimizing Excel Workflows',
    excerpt: 'Tips and tricks to speed up your daily Excel tasks and reduce errors.',
    date: '2025-11-22',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'The Future of Fintech',
    excerpt: 'Exploring upcoming trends in financial technology and automation.',
    date: '2025-11-24',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function BlogList() {
  return (
    <>
      <Helmet>
        <title>Blog - FinanceTool</title>
        <meta name="description" content="Read our latest articles on finance, data analysis, and Excel tips." />
      </Helmet>

      <div className="blog-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="blog-header"
        >
          <h1>Latest Articles</h1>
          <p>Insights and updates from the FinanceTool team.</p>
        </motion.div>

        <div className="blog-grid">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="blog-card"
            >
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="blog-author">
                    <User size={14} />
                    {post.author}
                  </span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </>
  );
}
