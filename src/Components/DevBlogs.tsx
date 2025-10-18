import React from "react";

export interface DevBlog {
  title: string;
  description: string;
  url: string;
}

interface DevBlogsProps {
  blogs: DevBlog[];
}

export const DevBlogs: React.FC<DevBlogsProps> = ({ blogs }) => {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="dev-blogs section" id="blogs">
      <h2 className="section-title">Dev Blogs</h2>
      <div className="blogs__container bd-grid">
        {blogs.map((blog, index) => (
          <div className="blog__card" key={index}>
            <div className="blog__content">
              <h3 className="blog__title">{blog.title}</h3>
              <p className="blog__description">{blog.description}</p>
            </div>
            <div className="blog__footer">
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog__link"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
