import { useField } from "formik";
import { LoginTextField } from "../../styles/loginPage";
const CustomTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props.name);
 
  return (
    <>
      <LoginTextField
        {...field}//value, onchange, onblur
        {...props}
        placeholder={placeholder}
        error={meta.error && meta.touched }
        helperText={meta.touched && meta.error}

      ></LoginTextField>
      
    </>
  );
};

export default CustomTextField;
