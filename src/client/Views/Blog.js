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
                <a target="blank" href="https://betterprogramming.pub/is-node-js-really-single-threaded-7ea59bcc8d64">
                  <img src="img/blog/nodejs.jpg" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a target="blank" href="https://betterprogramming.pub/is-node-js-really-single-threaded-7ea59bcc8d64">
                    Is Node.js Really Single-Threaded?
                  </a>
                </h3>
                <p>
                  A tutorial on multi-threading, multi-processing, threads, processes, thread pools, and more
                </p>
                <a href="" className="read-more">
                  5 Min read
                </a>
              </div>
              <div className="author">
                <span className="name">
                  <i className="lni-user"></i>
                  <a target="blank" href="https://betterprogramming.pub/is-node-js-really-single-threaded-7ea59bcc8d64">
                    Posted by Salil Arora
                  </a>
                </span>
                <span className="date float-right">
                  <i className="lni-calendar"></i>
                  <a target="blank" href="https://betterprogramming.pub/is-node-js-really-single-threaded-7ea59bcc8d64">
                    24 Sep, 2019
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a target="blank" href="https://dev.to/caroso1222/lessons-learned-doing-open-source-1eof">
                  <img src="img/blog/oss.jpg" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a target="blank" href="https://dev.to/caroso1222/lessons-learned-doing-open-source-1eof">
                    Lessons Learned doing Open Source
                  </a>
                </h3>
                <p>
                  I'm not popular in Github but I have a repo with 1.5K stars and 1M hits/month. Here's what I've learned along the way.
                </p>
                <a href="" className="read-more">
                  4 Min read
                </a>
              </div>
              <div className="author">
                <span className="name">
                  <i className="lni-user"></i>
                  <a target="blank" href="https://dev.to/caroso1222/lessons-learned-doing-open-source-1eof">
                    Posted by Carlos Roso
                  </a>
                </span>
                <span className="date float-right">
                  <i className="lni-calendar"></i>
                  <a target="blank" href="https://dev.to/caroso1222/lessons-learned-doing-open-source-1eof">
                    17 Jul, 2020
                  </a>
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
