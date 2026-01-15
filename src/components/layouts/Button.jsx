const Button = (props) => {
  return (
    <div className="px-6 py-1 border-1 border-black bg-[#d5cece] hover:text-[#FFF] hover:bg-black transition-all rounded-full cursor-pointer w-fit">
      {props.title}
    </div>
  );
};

export default Button;
