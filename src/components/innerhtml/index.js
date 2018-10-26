import React from 'react';

const InnerHtml = (props) => {

  const getContents = () => {
      return {
        __html: props.data,
      };
    }
  return (
    <div dangerouslySetInnerHTML={getContents()} onClick={props.handleClick} />
  );
};
InnerHtml.propTypes = {

};

InnerHtml.defaultProps = {
  data: '',
  handleClick:null
};
export default InnerHtml;
