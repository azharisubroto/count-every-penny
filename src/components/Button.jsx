const cButton = ({ color, children, block, width, smWidth, height, fontsize, className, ...other }) => {
  const clr = color ? color : '#F2B000'

  return (
    <>
      <a {...other} className={`root${className ? ' ' + className : ''}`}>
        {children}
      </a>
      <style jsx>{`
        $base_color: ${clr} !default;
        $base_height: ${height ? height + 'px' : '40px'};
        a.root {
          background-color: $base_color;
          display: ${block ? block : 'inline-block'};
          width: ${width ? width : 'auto'};
          height: $base_height;
          line-height: $base_height;
          font-size: ${fontsize ? fontsize : '18px'};
          border-radius: 4px;
          padding: 0 15px;
          cursor: pointer;
          position: relative;
          text-align: center;
          z-index: 1;
          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 4px;
            width: 100%;
            margin: auto;
            z-index: -1;
            background: #fff;
            opacity: 0.2;
          }
          &:hover {
            filter: brightness(0.9);
          }
          @media screen and (max-width: 576px) {
            width: ${smWidth ? smWidth : '100%'};
          }
        }
      `}</style>
    </>
  )
}

export default cButton
