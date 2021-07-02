export function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-text section-header text-center">
              <div>
                <h2 className="section-title">Explore Our Publications</h2>
                <div className="desc-text">
                  <p>Let's learn something new today</p>
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
                <a target="blank" href="https://betterprogramming.pub/is-node-js-really-single-threaded-7ea59bcc8d64" className="read-more">
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
                <a target="blank" href="https://dev.to/caroso1222/lessons-learned-doing-open-source-1eof" className="read-more">
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
                <a target="blank" href="https://towardsdatascience.com/four-deep-learning-papers-to-read-in-july-2021-e91c546d112d">
                  <img src="img/blog/ml_papers.jpg" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a target="blank" href="https://towardsdatascience.com/four-deep-learning-papers-to-read-in-july-2021-e91c546d112d">
                    Four Deep Learning Papers to Read in July 2021
                  </a>
                </h3>
                <p>
                  From Large Scale Deep RL to Adversarial Robustness, SimCLR-v2 & Learning Neural Network Spaces
                </p>
                <a target="blank" href="https://towardsdatascience.com/four-deep-learning-papers-to-read-in-july-2021-e91c546d112d" className="read-more">
                  6 Min read
                </a>
              </div>
              <div className="author">
                <span className="name">
                  <i className="lni-user"></i>
                  <a target="blank" href="https://towardsdatascience.com/four-deep-learning-papers-to-read-in-july-2021-e91c546d112d">
                    Posted by Robert Lange
                  </a>
                </span>
                <span className="date float-right">
                  <i className="lni-calendar"></i>
                  <a target="blank" href="https://towardsdatascience.com/four-deep-learning-papers-to-read-in-july-2021-e91c546d112d">
                    30 June, 2021
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
