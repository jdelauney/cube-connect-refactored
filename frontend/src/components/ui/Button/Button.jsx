import { cn } from '../../../lib/utils/cn.js';

const Button = ({ variant, className, onClick, children, ...restOfProps }) => {
  let variantClasses;
  switch (variant) {
    case 'danger':
      variantClasses = 'text-white bg-red-500 hover:bg-red-700';
      break;
    default:
      variantClasses = 'text-white bg-blue-500 hover:bg-blue-700';
      break;
  }
  return (
    <Button className={cn('rounded px-4 py-2 font-bold', variantClasses, className ? className : '')} onClick={onClick} {...restOfProps}>
      {children}
    </Button>
  );
};

export default Button;
