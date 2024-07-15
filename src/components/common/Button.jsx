export const Button = ({ text, className = "", ...props }) => {
    return (
      <button
        className={`duration-500 bg-malachite py-2 sm:py-3 md:py-4 px-6 text-light-white flex rounded-[36px] font-inter border-[2px] border-malachite font-bold text-sm overflow-hidden ease-in-out text-center after:absolute relative after:left-50%  after:bg-vampire-black after:w-full after:h-full  after:left-0 after:top-0 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:rounded-[36px] after:duration-500 after:ease-in-out hover:text-malachite ${className}`}
        {...props}
      >
        <span className="relative z-10 my-auto">{text}</span>
      </button>
    );
  };
  