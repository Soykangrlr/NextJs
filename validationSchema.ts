import * as yup from 'yup';

export let registerValidation = yup.object().shape({
  name: yup.string().required("Zorunlu Alan"),
    lastName:yup.string().required("Zorunlu Alan"),
  email: yup.string().email("E mail formatında olmalıdır.").required("Zorunlu Alan"),
  password:yup.string().required("Zorunlu Alan")   .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.!@#\$%\^&\*])(?=.{6,20})/,
    " 6-20Karakterli,Alfanumerik olmalıdır"
  ),
  phoneNumber:yup.string().test("len", "Telefon Numarasını doldurun", (val="") => {
   
    return val.length === 17;
  }),
  passwordConfirm:yup.string().required("Zorunlu Alan").oneOf([yup.ref('password'),null],"Parola Eşleşmedi")
});

export let loginValidation = yup.object().shape({

  email: yup.string().email("E mail formatında olmalıdır.").required("Zorunlu Alan"),
  password:yup.string().required("Zorunlu Alan")   .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.!@#\$%\^&\*])(?=.{6,20})/,
    " 6-20Karakterli,Alfanumerik olmalıdır"
  ),
 
});
