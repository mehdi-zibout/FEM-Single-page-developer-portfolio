export type TextInputProps = { fieldName: string; error?: string };

const TextInput = ({ fieldName, error }: TextInputProps) => {
  return (
    <label
      htmlFor={fieldName}
      className=" w-[21.4rem] tablet:w-[27.8rem]   flex flex-col"
    >
      <span className="invisible">={fieldName}</span>
      <input
        type="text"
        className={`focus:outline-none ring-0 focus:ring-0 border-t-0 border-r-0 border-l-0 pb-4 pl-6  ${
          error ? "border-b-[#FF6F5B]" : "border-b-white"
        } focus:border-b-green
           border-b-[1px] tablet:border-b-2 w-full  bg-darkGrey`}
        name={fieldName}
        id={fieldName}
        placeholder={fieldName.toUpperCase()}
      />
      <div className="text-[#FF6F5B] self-end text-body text-[0.75rem]">
        {error}
      </div>
    </label>
  );
};

export default TextInput;
