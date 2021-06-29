export const Build = () => {
  return (
    <section id="build">
      <div className="container">
        <div className="row justify-content-center">
          <h3 className="mx-2">Build Amazing Teams, on demand</h3>

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
                A team is as good as its talent so we connect you with the best
                of the best with our pre assessed pool of talent.
              </p>

              <div>
                <img
                  className="text-center mx-auto mt-3"
                  src="https://picsum.photos/200"
                  alt="Card image cap"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '80px',
                    textAlign: 'center',
                  }}
                />
                <p className="m-1">
                  Satish Polymer <span>(CEO and Co- Founder)</span>
                </p>
                <p>
                  <i className="lni lni-producthunt"></i>
                  ProductHunt
                </p>

                <div
                  style={{
                    borderLeft: '8px solid var(--primary)',
                    borderRadius: '8px',
                  }}
                  className="p-3"
                >
                  “With CrewScale, we got a team of highly skilled developers to
                  fulfill our Tech requirements in a short period of time. The
                  performance and professionalism of the team were of the
                  highest caliber. Totally recommend CrewScale if you are
                  looking for quality to scale”
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 pl-4 pt-70">
            <div className="row">
              {[
                {
                  key: 1,
                  name: 'Perfect Man',
                  job: 'Remote Javascript Developer',
                  company: 'Tech Mahindra',
                  image: 'https://picsum.photos/200',
                },
                {
                  key: 1,
                  name: 'Honey Singh',
                  job: 'Remote Angular Developer',
                  company: 'Microsoft',
                  image: 'https://picsum.photos/400',
                },
                {
                  key: 1,
                  name: 'Raftaar',
                  job: 'Remote MongoDB Developer',
                  company: 'Google',
                  image: 'https://picsum.photos/300',
                },
                {
                  key: 1,
                  name: 'Divine',
                  job: 'Remote Javascript Developer',
                  company: 'Facebook',
                  image: 'https://picsum.photos/600',
                },
              ].map((elem) => {
                return (
                  <div className="col-lg-6 col-md-12 pl-0 mt-2 ">
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
  );
};
