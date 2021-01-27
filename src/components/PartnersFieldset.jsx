import Partners from '@/components/Partners'
function PartnersFieldset() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <fieldset>
              <legend align="center">In Partnership With</legend>
              <Partners type="white" />
            </fieldset>
          </div>
        </div>
      </div>

      <style jsx>{`
        fieldset {
          border: 1px solid #fff;
          padding: 35px;
          padding-top: 20px;
          border-radius: 10px;
          margin-bottom: 40px;

          legend {
            float: none;
            margin-bottom: 0;
            font-weight: 700;
            font-size: 20px;
            line-height: 27px;
            text-align: center;
            color: #fff;
            font-family: 'Nunito Sans', Arial, sans-serif;
            display: inline-block;
            padding: 0 15px;
            width: auto;
          }
        }
      `}</style>
    </>
  )
}

export default PartnersFieldset
