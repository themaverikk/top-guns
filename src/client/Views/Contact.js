export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-text section-header text-center">
              <div>
                <h2 className="section-title">Get In Touch</h2>
                <div className="desc-text">
                  <p>
                    Our support Team is always there to help you
                  </p>
                  <p>Fell free to drop a message we will get back to you as soon as possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <form id="contactForm">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                      data-error="Please enter your name"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      id="msg_subject"
                      className="form-control"
                      name="msg_subject"
                      required
                      data-error="Please enter your subject"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      data-error="Please enter your Email"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Budget"
                      id="budget"
                      className="form-control"
                      name="budget"
                      required
                      data-error="Please enter your Budget"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Write Message"
                      rows="4"
                      data-error="Write your message"
                      required
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="submit-button">
                    <button className="btn btn-common" id="submit" type="submit">
                      Submit
                    </button>
                    <div id="msgSubmit" className="h3 hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-img">
              <img src="img/contact/01.png" className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-1"></div>
        </div>
      </div>
    </section>
  );
}
