import { Link, useNavigate } from 'react-router-dom';
import { ButtonProps } from '../utils/interfaces';

function Button({
  children,
  disabled,
  to,
  type,
  onClick,
  className,
}: ButtonProps) {
  const base =
    'inline-block text-xl rounded-md bg-[#3D5572] text-white tracking-wide transition-colors duration-300 hover:bg-[#2B3E57] focus:bg-[#2B3E57] focus:outline-none focus:ring focus:ring-[#50728C] focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary: base + ' px-3 py-1 md:px-3 md:py-1 text-[10px]',
    nav: 'font-semibold	font-roboto',
  };

  const navigate = useNavigate();
  const style = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return (
      <button className={style} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  if (to && type)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick && type)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  if (className)
    return (
      <button onClick={onClick} disabled={disabled} className={className}>
        {children}
      </button>
    );

  if (type)
    return (
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return null;
}

export default Button;
