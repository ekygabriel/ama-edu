import Link from "next/link";
import classes from "./Button.module.scss";

interface ButtonProps {
  text: string;
  type?: "button" | "submit";
  className?: string;
  style?: object;
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "";
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  type = "button",
  style = {},
  target = "",
  href,
  onClick,
}) => {
  let content: React.ReactNode;

  if (href) {
    content = (
      <Link href={href} className={classes.Button} target={target}>
        {text}
      </Link>
    );
  } else {
    content = (
      <button
        type={type}
        onClick={onClick ? onClick : () => {}}
        className={classes.Button}
      >
        {text}
      </button>
    );
  }
  return (
    <div style={style || {}} className={classes.Container}>
      {content}
    </div>
  );
};

export default Button;
