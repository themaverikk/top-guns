import { useEffect, useState } from 'react';

const NumberCounter = (props) => {
  const { number, duration } = props;
  const [count, setCount] = useState('0');

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);

  return (
    <span
      style={{
        fontSize: '24px',
        fontWeight: '800',
        color: 'var(--primary)',
      }}
    >
      {count}+
    </span>
  );
};

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="features-text section-header text-center">
              <div>
                <h2 className="section-title">
                  Curated Professionals On our platform
                </h2>
                <div className="desc-text">
                  <p>
                    A few numbers to show the abundance of talent
                    <br />
                    at the top-guns platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row featured-bg">
          {[
            {
              key: 1,
              tech: 'ReactJS',
              text: 'professionals building beautiful UIs.',
              number: 1000,
              icon: 'lni lni-github',
            },
            {
              key: 2,
              tech: 'NodeJS',
              text: 'professionals building complex backends.',
              number: 250,
              icon: 'lni lni-stackoverflow',
            },
            {
              key: 3,
              tech: 'Designers',
              text: 'professionals doing super creative work.',
              number: 1000,
              icon: 'lni lni-behance',
            },
            {
              key: 4,
              tech: 'Java',
              text: 'professionals sipping coffee and doing serious work.',
              number: 1000,
              icon: 'lni lni-java',
            },
            {
              key: 5,
              tech: 'Android',
              text: 'professionals making smart mobile apps',
              number: 1000,
              icon: 'lni lni-android',
            },
            {
              key: 6,
              tech: 'Product Managers',
              text: 'professionals handling complex teams',
              number: 1000,
              icon: 'lni lni-slack',
            },
          ].map((elem) => {
            return (
              <div className="col-lg-6 col-md-6 col-xs-12 p-0" key={elem.key}>
                <div className="feature-item featured-border1">
                  <div className="feature-icon float-left">
                    <i className={elem.icon}></i>
                  </div>
                  <div className="feature-info float-left">
                    <h4>{elem.tech}</h4>
                    <p>
                      <NumberCounter
                        number={elem.number.toString()}
                        duration={5}
                      />{' '}
                      {elem.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
