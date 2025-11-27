import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './Blog.css';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Essential Powerhouse - Unpacking the General Uses of File Comparison',
    excerpt: `File comparison is essential for version control (like Git) in software development, enabling collaboration and bug resolution. It’s crucial for legal redlining to ensure document integrity in regulated industries, and for IT audits to verify system configurations and data integrity in backups.`,
    date: '2025-11-20',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'The Logic Beneath the Surface - How File Comparison Algorithms Work',
    excerpt: `Comparison tools use diff algorithms like the Myers Algorithm to solve the Longest Common Subsequence (LCS) problem. This finds the shortest path between two files, identifying additions and deletions. For quick checks of file identity, they use cryptographic hashes (like SHA-256) instead of full content comparison.`,
    date: '2025-11-22',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Dollars and Deltas - File Comparison in the Finance World',
    excerpt: `In finance, comparison is vital for financial reconciliation, matching transaction records across different ledgers to ensure accuracy and fast book-closing. It is also used for regulatory compliance, verifying audit trails, and for fraud detection by spotting anomalies in trading and user activity logs.`,
    date: '2025-11-24',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'How JSON Validators Save Time for Developers',
    excerpt: 'JSON validators automate error detection, preventing runtime crashes and saving hours of debugging. Learn how integrating validation into your workflow boosts productivity.',
    date: '2025-11-25',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Common JSON Formatting Errors and How to Fix Them',
    excerpt: 'Trailing commas, missing quotes, and wrong data types are common pitfalls in JSON. Discover the most frequent mistakes and how to spot and fix them instantly.',
    date: '2025-11-26',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'The Importance of Data Validation in Daily Tech Tasks',
    excerpt: 'Data validation ensures integrity, security, and reliability in applications. Explore why validating your data inputs and outputs is critical for robust software.',
    date: '2025-11-26',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    title: 'Why You Need a Text Comparison Tool',
    excerpt: 'Manually checking for differences between two texts is tedious and error-prone. Discover how a text comparison tool can save you time and ensure accuracy.',
    date: '2025-11-27',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'How to Compare Code Snippets Online',
    excerpt: 'Comparing code snippets is essential for debugging and version control. Learn how to use online tools to visualize code changes effectively.',
    date: '2025-11-27',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    title: 'Best Free Online Diff Checkers',
    excerpt: 'Looking for the best free online diff checkers? We review the top tools available to help you choose the right one for your needs.',
    date: '2025-11-27',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
