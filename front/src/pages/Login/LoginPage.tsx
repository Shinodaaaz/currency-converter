import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {login} from "@/store/slices/auth.slice.ts";
import {Container, FormWrapper, Title} from "@/pages/Login/Login.styles.ts";
import {Input} from "@/shared/ui/Input/Input.tsx";
import {Button} from "@/shared/ui/Button/Button.tsx";
import {Navigate} from "react-router-dom";
import type {RootState} from "@/store/store.ts";

interface LoginFormInputs {
  username: string
  password: string
}

const schema = yup.object({
  username: yup.string().required("Login is required"),
  password: yup.string().required("Password required").min(4,
    "Minimum of 4 characters"),
}).required();

export const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)

  if (isAuth) {
    return <Navigate to="/rates"/>
  }

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    setError,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    const {
      username,
      password
    } = data
    if (username === 'demo' && password === 'demo') {
      dispatch(login({
        password: password,
        login: username
      }));
      navigate('/rates');
    } else {
      setError('password',
        {
          type: 'manual',
          message: 'Invalid username or password',
        })
    }
  }

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>
          Currency Converter
        </Title>
        <Input label={'Login'} id={'login'} error={errors.username?.message} {...register("username")} />

        <Input label={'Password'} type={'password'} id={'password'}
               error={errors.password?.message} {...register("password")} />

        <Button type={'submit'} disabled={isSubmitting} label={'Sign in'}/>
      </FormWrapper>
    </Container>
  );
};
