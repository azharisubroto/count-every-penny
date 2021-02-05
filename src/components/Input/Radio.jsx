export default function Radio(props) {
  return (
    <>
      <div className="radio-item">
        <input type="radio" name={props.name} id={props.id} value={props.value} />
        <label htmlFor={props.id}>{props.label}</label>
      </div>
      {/* Style */}
      <style jsx>{`
        .radio-item {
          margin-bottom: 12px;
          &:last-of-type {
            margin-bottom: 20px;
          }
          input[type='radio'] {
            display: none;

            + label {
              padding: 15px 20px;
              border: 1px solid #d6d6d6;
              border-radius: 4px;
              cursor: pointer;
              position: relative;
              display: flex;
              align-items: center;
              font-weight: 700;
              font-size: 18px;
              line-height: 30px;
              color: #333;
              transition: all 0.3s ease-in-out;

              &:before {
                content: '';
                width: 27px;
                height: 27px;
                flex: 0 0 27px;
                border-radius: 50%;
                border: 2px solid #333;
                margin-right: 20px;
                transition: all 0.3s ease-in-out;
                background-color: #fff;
              }

              &:hover {
                &:before {
                  border-color: #035aa6;
                }
              }
            }
            &:checked {
              + label {
                &:before {
                  background-color: #035aa6;
                  border-color: #4aa7f9;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}
