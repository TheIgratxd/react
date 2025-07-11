interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: string;
  required?: boolean;
  id?: string;
  name?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  required = false,
  id,
  name,
}) => {
  return (
    <div className="agrupacion-inputs">
      <img src={icon} alt="Logo" className="logo" />
      <div className="input-usuario-Contraseña">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      </div>
    </div>
  );
};

export default InputField;
