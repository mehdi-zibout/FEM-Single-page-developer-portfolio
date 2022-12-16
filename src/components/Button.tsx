const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className={
        "border-b-2 border-green text-m pb-2 text-[16px] hover:text-green " +
        props.className
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
