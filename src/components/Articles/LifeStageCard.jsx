const LifeStageCard = ({ href, ...props }) => {
  return (
    <>
      <a href={href} {...props}>
        {props.children}
      </a>
      <style jsx>{`
        a {
          background: #ffffff;
          border: 1px solid #dadada;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          text-align: center;
          display: block;
          padding: 18px 20px;
          height: 100%;
          transition: all 0.2s ease;

          &:hover {
            border-color: #000;
          }
        }
      `}</style>
    </>
  )
}

export default LifeStageCard
