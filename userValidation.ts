import * as yup from 'yup';

export let uservalidation = yup.object().shape({

  email: yup.string().email("E mail formatında olmalıdır.").required("Zorunlu Alan"),
  password:yup.string().required("Zorunlu Alan")   .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.!@#\$%\^&\*])(?=.{6,20})/,
    " 6-20Karakterli,Alfanumerik olmalıdır"
  ),
 
});

