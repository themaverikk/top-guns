export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="row">
          {[
            {
              key: 1,
              icon: '/img/services/step1.png',
              heading: 'Create Requirement',
              text: 'Create a requirement by filling a basic questionairre. It only take a couple of minutes, we promise!',
            },
            //    { key: 5, arrow: '/img/services/arrow1.png', arrow: true },
            {
              key: 2,
              icon: '/img/services/step2.png',
              heading: 'Choose Professionals',
              text: 'Choose Proffessionals from a curated list of vetted talent, with detailed assessment, reliability and efficiency scores.',
            },

            //    { key: 6, arrow: '/img/services/arrow2.png', arrow: true },
            {
              key: 3,
              icon: '/img/services/step3.png',
              heading: 'Build Your Team',
              text: 'Have a chat with the shortlisted candidates for culture fit & comfort. We shall handle the rest.',
            },

            //     { key: 7, arrow: '/img/services/arrow3.png', arrow: true },
            {
              key: 4,
              icon: '/img/services/step4.png',
              heading: 'Build Your Team',
              text: 'Have a chat with the shortlisted candidates for culture fit & comfort. We shall handle the rest.',
            },
          ].map((elem) => {
            return (
              <div className="col-lg-3 col-md-6 col-xs-12" key={elem.key}>
                <div className="services-item text-center">
                  <div className="">
                    <img src={elem.icon} />
                  </div>
                  <h4>{elem.heading}</h4>
                  <p>{elem.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
