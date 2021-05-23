export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="row">
          {[
            {
              key: 1,
              icon: 'lni lni-list',
              heading: 'Create Requirement',
              text: 'Create a requirement by filling a basic questionairre. It only take a couple of minutes, we promise!',
            },
            {
              key: 2,
              icon: 'lni lni-network',
              heading: 'Choose Professionals',
              text: 'Choose Proffessionals from a curated list of vetted talent, with detailed assessment, reliability and efficiency scores.',
            },

            {
              key: 3,
              icon: 'lni lni-cloud-check',
              heading: 'Build Your Team',
              text: 'Have a chat with the shortlisted candidates for culture fit & comfort. We shall handle the rest.',
            },
          ].map((elem) => {
            return (
              <div className="col-lg-4 col-md-6 col-xs-12" key={elem.key}>
                <div className="services-item text-center">
                  <div className="icon">
                    <i class={elem.icon}></i>
                  </div>
                  <h4>{elem.heading}</h4>
                  <p>{elem.text}</p>
                </div>
              </div>
            );
          })}
          {/* <div className="col-lg-4 col-md-6 col-xs-12">
          <div className="services-item text-center">
            <div className="icon">
              <i class="lni lni-network"></i>
            </div>
            <h4>Bootstrap 4</h4>
            <p>
              Share processes and data secure lona need to know basis Our team
              assured your web site is always safe.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-xs-12">
          <div className="services-item text-center">
            <div className="icon">
              <i className="lni-brush"></i>
            </div>
            <h4>Slick Design</h4>
            <p>
              Share processes and data secure lona need to know basis Our team
              assured your web site is always safe.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-xs-12">
          <div className="services-item text-center">
            <div className="icon">
              <i className="lni-heart"></i>
            </div>
            <h4>Crafted with Love</h4>
            <p>
              Share processes and data secure lona need to know basis Our team
              assured your web site is always safe.
            </p>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
}
