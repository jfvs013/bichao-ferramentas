export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false, 
  className = '',
  type = 'button',
  ...props 
}) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-secondary-orange text-primary-white hover:bg-accent-green focus:ring-secondary-orange',
    secondary: 'bg-accent-green text-primary-white hover:bg-secondary-orange focus:ring-accent-green',
    outline: 'border-2 border-secondary-orange text-secondary-orange hover:bg-secondary-orange hover:text-primary-white focus:ring-secondary-orange',
    ghost: 'text-secondary-orange hover:bg-secondary-orange hover:bg-opacity-10 focus:ring-secondary-orange',
    gold: 'bg-secondary-gold text-primary-black hover:bg-secondary-orange hover:text-primary-white focus:ring-secondary-gold'
  };
  
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

