import React from 'react';
import './TextInput.css';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const TextInput: React.FC<TextInputProps> = ({ label, error, ...rest }) => (
  <div className="text-input-wrapper">
    <label className="text-input-label">{label}</label>
    <input className="text-input" {...rest} />
    {error && <p className="text-input-error">{error}</p>}
  </div>
);

export default TextInput;
