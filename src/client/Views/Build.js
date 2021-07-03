export const Build = () => {
  return (
    <>
      <section id="build">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="mx-2">Scale Remote teams, on demand</h3>

            <div className="col-lg-6 col-md-12 pl-4">
              <div className="business-item-info">
                <h5
                  style={{
                    color: 'var(--primary)',
                    fontWeight: '800',
                    fontSize: '24px',
                  }}
                >
                  PRE VETTED POOL
                </h5>
                <p>
                  Do you know of a better professional than James Bond? Our professionals have a similar bar. Take a free 7 days trial and you won't regret it!
                </p>

                <div>
                  <img
                    className="text-center mx-auto mt-3"
                    src="img/team/arvind.jpeg"
                    alt="Card image cap"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '80px',
                      textAlign: 'center',
                    }}
                  />
                  <p className="m-1">
                    Arvind Kumar <span>(CEO and Co- Founder)</span>
                  </p>
                  <p>
                    Acadbee
                  </p>

                  <div
                    style={{
                      borderLeft: '8px solid var(--primary)',
                      borderRadius: '8px',
                    }}
                    className="p-3"
                  >
                    “We were struggling with our e-learning product. We hired a team of 5 engineers in-house, most of them turned out to be bad hires and had to be fired 😢 <br />
                    In the end, we were left with like 27 days to demo the product to the investers and 2 not so great engineers. We contacted hirejamesbond, took 3 engineers for trial, covered decent ground in first week itself.
                    We hired them 😍<br />and Boom 🎉🎉🎉🎉 <br />These engineers helped our in-house team as well and we rocked the demo!
                    ”
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-4 pt-70">
              <div className="row">
                {[
                  {
                    key: 0,
                    name: 'Devender',
                    job: 'Senior Staff Software Engineer',
                    company: 'Google',
                    image: 'https://picsum.photos/200',
                  },
                  {
                    key: 1,
                    name: 'Suhas',
                    job: 'Senior Full-stack Engineer',
                    company: 'Amazon',
                    image: 'img/team/suhas.jpeg',
                  },
                  {
                    key: 2,
                    name: 'Lana',
                    job: 'Angular Developer',
                    company: 'Architech',
                    image: 'img/team/lana.jpg',
                  },
                  {
                    key: 3,
                    name: 'Daria',
                    job: 'Remote Javascript Developer',
                    company: 'SimbirSoft',
                    image: 'img/team/daria.jpeg',
                  },
                ].map((elem) => {
                  return (
                    <div key={elem.key} className="col-lg-6 col-md-12 pl-0 mt-2 ">
                      <div className="card text-center">
                        <img
                          className="text-center mx-auto mt-3"
                          src={elem.image}
                          alt="Card image cap"
                          style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '80px',
                            textAlign: 'center',
                          }}
                        />
                        <div className="card-body">
                          <h5
                            className="card-title"
                            style={{
                              fontSize: '24px',
                              fontWeight: 800,
                              color: 'var(--primary)',
                            }}
                          >
                            {elem.name}
                          </h5>
                          <p className="card-text">{elem.job}</p>
                          <p>{elem.company}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 pl-4">
              <div className="pr-3">
                <img src="img/team/team_management.svg" style={{ maxWidth: "100%" }} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-5">
              <div className="business-item-info">
                <div>
                  <img
                    className="text-center mx-auto mt-3"
                    src="img/team/chip.jpg"
                    alt="Card image cap"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '80px',
                      textAlign: 'center',
                    }}
                  />
                  <p className="m-1">
                    Chip Rodgers
                  </p>
                  <p style={{ fontFamily: "Poppins, sans-serif" }}>
                    WorkSpan
                  </p>

                  <div
                    style={{
                      borderLeft: '8px solid var(--primary)',
                      borderRadius: '8px',
                    }}
                    className="p-3"
                  >
                    “We wanted to test the waters first with MVP before working on our product full-time. We quickly hired a few part-time engineers from hirejamesbond and tested the MVP. Later, we hired those engineers full-time 🔥 <br />
                    I never imagined hiring a team could be so simple and more importantly RISK FREE ⚡⚡⚡
                    ”
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
