import * as Yup from 'yup';

interface ILoginSubmitted {
  loginEmail: string;
  loginPassword: string;
}

export const formLoginData = {
  initialValues: {
    loginEmail: '',
    loginPassword: ''
  },
  validationSchema: Yup.object({
    loginEmail: Yup.string()
      .email('E-mail inválido')
      .required('Este campo é obrigatório'),
    loginPassword: Yup.string().required('Este campo é obrigatório')
  }),
  onSubmit: (values: ILoginSubmitted) => {
    alert(JSON.stringify(values, null, 2));
  }
};
