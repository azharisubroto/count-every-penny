export default function NavBarThanks() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <div className="logo-item">
              <img src="/static/logo-cep.svg" alt="Count Every Penny" />
            </div>
            <div className="logo-item">
              <img src="/static/logo/health-insurance-comparison.svg" alt="Health Insurance Comparison" />
            </div>
          </div>
        </div>
      </header>

      {/* Style */}
      <style jsx>
        {`
          header {
            background: #f9f9f9;
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            line-height: 0;
            position: relative;
            z-index: 100;
            padding: 20px 0;

            .logo {
              display: flex;
              width: 100%;
              align-items: center;
              justify-content: center;
              &-item {
                display: flex;
                align-items: center;
                img {
                  height: 38px;
                  width: auto;
                }

                &:after {
                  width: 2px;
                  height: 40px;
                  background-image: url('/static/logo/separator.png');
                  background-size: 2px 40px;
                  background-repeat: no-repeat;
                  margin: 0 20px;
                  display: block;
                  content: '';
                }

                &:last-child {
                  &:after {
                    display: none;
                  }
                }
              }
            }
          }
        `}
      </style>
    </>
  )
}
