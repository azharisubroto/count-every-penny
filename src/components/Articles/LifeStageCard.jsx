const LifeStageCard = ({ href, bevel, ...props }) => {
  return (
    <>
      <a href={href} {...props} className={`${bevel ? 'bevel' : ''}`}>
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

          &.bevel {
            background: #ffffff;
            box-shadow: inset 3px 3px 4px 2px rgba(255, 255, 255, 0.34), inset -3px -3px 3px 2px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
          }

          &:hover {
            border-color: #000;
          }
        }
      `}</style>
    </>
  )
}

export default LifeStageCard
