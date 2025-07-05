import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../validation/schemas';
import { z } from 'zod';
import TextInput from '../components/TextInput';
import './LoginPage.css';

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login Data:', data);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
        <TextInput label="Email" {...register('email')} error={errors.email?.message} />
        <TextInput label="Password" type="password" {...register('password')} error={errors.password?.message} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
