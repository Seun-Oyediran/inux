import React from 'react';

interface IProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

const Input = (props: IProps) => {
  const { type, placeholder } = props;

  return (
    <div className="inux-contact-us-form-input">
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
