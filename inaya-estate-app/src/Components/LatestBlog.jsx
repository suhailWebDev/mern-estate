import React from 'react';
import { Link } from 'react-router-dom';

// Sample blogs with images
import blogImage1 from '../Images/abu-dhabi-seascape-with-skyscrapers.jpg';
import blogImage2 from '../Images/businessman-summer-city-with-three-women.jpg';
import blogImage3 from '../Images/cityscape-view-building-twilight-bangkok-thailand.jpg';
import blogImage4 from '../Images/woman-walking-near-chicago-river.jpg';

const blogs = [
  { id: 'dubai-real-estate-2024', title: 'Dubai Real Estate Market 2024', image: blogImage1 },
  { id: 'renting-guide-dubai', title: 'Guide to Renting in Dubai: Everything Expats Need to Know', image: blogImage2 },
  { id: 'top-10-neighbourhoods', title: 'Top 10 Neighbourhoods in Dubai for Property Investment', image: blogImage3 },
  { id: 'waterfront-communities', title: 'Best Waterfront Communities in Dubai: Where Luxury Meets Sea', image: blogImage4 },
];

const LatestBlog = () => {
    return (
        <div className="container my-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold">Latest Blogs</h2>
            <Link to="/blogs" className="btn btn-outline-dark">View All →</Link>
          </div>
          
          <div className="row">
            {/* Main Featured Blog */}
            <div className="col-lg-8 mb-3">
            <Link to={`/blog/${blogs[0].id}`}>
              <div className="position-relative">
                <img src={blogs[0].image} alt={blogs[0].title} className="img-fluid w-100 rounded" />
                <div className="position-absolute bottom-0 bg-white p-3 w-100" style={{ opacity: 0.9 }}>
                  <h4>{blogs[0].title}</h4>
                  <small className="text-muted">📅 {blogs[0].date}</small>
                </div>
              </div>
              </Link>
            </div>
            
            {/* Sidebar Blogs */}
            <div className="col-lg-4">
              {blogs.slice(1).map((blog) => (
                <Link to={`/blog/${blog.id}`}>
                <div key={blog.id} className="d-flex mb-3">
                  <img src={blog.image} alt={blog.title} className="img-fluid rounded me-3" style={{ width: '100px', height: '70px' }} />
                  <div>
                    <h6 className="mb-1">{blog.title}</h6>
                    <small className="text-muted">📅 {blog.date}</small>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
  );
};

export default LatestBlog;
