type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return (
    <div className="button" onClick={onClick}>
      Click
    </div>
  );
};

export default Button;
