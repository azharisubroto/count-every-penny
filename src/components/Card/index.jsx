export default function Card(props) {
  const { children, color, padding, radius, dark, className, outlined, disableElevation, ...rest } = props
  return (
    <>
      <div {...rest} className={`${className != null ? className : ''} cep-card`}>
        {children}
      </div>
      <style jsx>
        {`
          .cep-card {
            box-shadow: ${disableElevation !== true ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
            border: ${outlined ? '1px solid #ddd' : '0'};
            border-radius: ${radius ? radius : '3px'};
            background: ${color ? color : '#fff'};
            padding: ${padding != null && padding != '' ? padding : '40px'};
            color: ${dark != null ? '#fff' : '#000'};

            @media screen and (max-width: 500px) {
              padding: 20px;
            }
          }
        `}
      </style>
    </>
  )
}
