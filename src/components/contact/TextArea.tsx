import React from 'react';

interface IProps {
  placeholder?: string;
}

const TextArea = (props: IProps) => {
  const { placeholder } = props;

  return (
    <div className="inux-contact-us-form-input">
      <textarea placeholder={placeholder} />
    </div>
  );
};

export default TextArea;
