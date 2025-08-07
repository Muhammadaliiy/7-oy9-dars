function FormInput({ label, type, name }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-white lg:text-white ">
        {label}
      </legend>
      <input
        type={type}
        name={name}
        className="input w-full text-white"
        placeholder="Type here"
      />
    </fieldset>
  );
}

export default FormInput;
