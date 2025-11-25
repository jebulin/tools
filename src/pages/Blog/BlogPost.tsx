import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import './Blog.css';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Understanding Financial Data Analysis',
    content: 'Financial data analysis is the process of analyzing a company\'s industry, competitors, and its own business to determine its value. It involves looking at financial statements, such as the balance sheet, income statement, and cash flow statement. By using tools like Excel, analysts can organize and interpret this data to make informed decisions.',
    date: '2025-11-20',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Optimizing Excel Workflows',
    content: 'Excel is a powerful tool, but it can be overwhelming. To optimize your workflow, start by learning keyboard shortcuts. Use tables to organize data and pivot tables to summarize it. Macros can automate repetitive tasks. Keeping your formulas simple and documenting your work can also save time in the long run.',
    date: '2025-11-22',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'The Future of Fintech',
    content: 'Fintech is rapidly evolving with the integration of AI and blockchain. We are seeing more personalized financial services, faster transaction speeds, and enhanced security. The future promises even more automation and accessibility, making financial tools available to a broader audience.',
    date: '2025-11-24',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) {
    return <div className="blog-container">Post not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - FinanceTool</title>
        <meta name="description" content={`Read about ${post.title}`} />
      </Helmet>

      <div className="blog-container blog-post-detail">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={20} /> Back to Blog
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className="post-header">
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
            <h1>{post.title}</h1>
          </header>

          <img src={post.image} alt={post.title} className="post-image" />

          <div className="post-body">
            <p>{post.content}</p>
          </div>
        </motion.article>
      </div>
    </>
  );
}
