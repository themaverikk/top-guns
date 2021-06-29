export function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-text section-header text-center">
              <div>
                <h2 className="section-title">Latest Blog Posts</h2>
                <div className="desc-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <p>eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="single-post.html">
                  <img src="img/blog/01.jpg" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a href="single-post.html">
                    How Slick Will Transform <br />
                    Your Business
                  </a>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
                <a href="" className="read-more">
                  5 Min read
                </a>
              </div>
              <div className="author">
                <span className="name">
                  <i className="lni-user"></i>
                  <a href="#">Posted by Admin</a>
                </span>
                <span className="date float-right">
                  <i className="lni-calendar"></i>
                  <a href="#">10 April, 2020</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="single-post.html">
                  <img src="img/blog/02.jpg" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a href="single-post.html">
                    Growth Techniques for <br />
                    New Startups
                  </a>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
                <a href="" className="read-more">
                  5 Min read
                </a>
              </div>
              <div className="author">
                <span className="name">
                  <i className="lni-user"></i>
                  <a href="#">Posted by Admin</a>
                </span>
                <span className="date float-right">
                  <i className="lni-calendar"></i>
                  <a href="#">10 April, 2020</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="single-post.html">
                  <img src="img/blog/03.jpg" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a href="single-post.html">
                    Writing Professional <br />
                    Emails to Customers
                  </a>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
                <a href="" className="read-more">
                  5 Min read
                </a>
              </div>
              <div className="author">
                <span className="name">
                  <i className="lni-user"></i>
                  <a href="#">Posted by Admin</a>
                </span>
                <span className="date float-right">
                  <i className="lni-calendar"></i>
                  <a href="#">10 April, 2020</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
