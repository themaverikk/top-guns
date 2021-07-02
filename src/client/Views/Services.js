export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="row">
          {[
            {
              key: 1,
              icon: '/img/services/step1.png',
              heading: 'Connect',
              text: 'Answer a few basic questions. It will take less than 20 seconds',
            },
            //    { key: 5, arrow: '/img/services/arrow1.png', arrow: true },
            {
              key: 2,
              icon: '/img/services/step2.png',
              heading: 'Choose',
              text: 'Choose Professionals you like from our pre-vetted talent pool',
            },

            //    { key: 6, arrow: '/img/services/arrow2.png', arrow: true },
            {
              key: 3,
              icon: '/img/services/step3.png',
              heading: 'Off You GO',
              text: 'Start building your product full-steam. 7 days free trial, Pay only if satisfied!',
            },
          ].map((elem) => {
            return (
              <div className="col-lg-4 col-md-8 col-xs-16" key={elem.key}>
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
