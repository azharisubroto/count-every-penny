export default function AgesCTA({ href, headline, intro, footerText, className, ...props }) {
  return (
    <>
      <div className={`${className} paytoomuch text-center px-4 py-4`} {...props}>
        <div className="text-20 text-md-24 lh-30 lh-md-34 family-1">{headline}</div>

        <p className="text-18">{intro}</p>

        <div className="mx-md-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <a href={href} className="green text-18 mb-3">
                {' '}
                &lt; 50 years{' '}
              </a>
            </div>
            <div className="col-12 col-md-6">
              <a href={href} className="blue text-18 mb-3">
                {' '}
                &lt; 51 - 60 years{' '}
              </a>
            </div>
            <div className="col-12 col-md-6">
              <a href={href} className="yellow text-18 mb-3">
                {' '}
                &lt; 60 - 70 years{' '}
              </a>
            </div>
            <div className="col-12 col-md-6">
              <a href={href} className="red text-18 mb-3">
                {' '}
                &gt; 70 years{' '}
              </a>
            </div>
          </div>
        </div>

        <div className="text-center averagesavings text-16 lh-30">{footerText}</div>
      </div>

      <style jsx>{`
        .paytoomuch {
          background: #0c345a;
          color: #fff;

          a {
            display: inline-block;
            color: #fff;
            display: block;
            padding: 10px 24px;
            box-shadow: inset 3px 3px 4px 2px rgba(255, 255, 255, 0.34), inset -3px -3px 3px 2px rgba(0, 0, 0, 0.2);
            border-radius: 4px;

            &.green {
              background: #07af43;
            }
            &.blue {
              background: #23abd1;
            }
            &.yellow {
              background: #e0960b;
            }
            &.red {
              background: #e94a73;
            }
          }
          .averagesavings {
            background: rgba(0, 0, 0, 0.1);
            padding: 15px;
          }
        }
      `}</style>
    </>
  )
}
