import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../validation/schemas';
import { z } from 'zod';
import TextInput from '../components/TextInput';
import './RegisterPage.css';

type RegisterFormInputs = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => {
    console.log('Register Data:', data);
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
        <TextInput label="Name" {...register('name')} error={errors.name?.message} />
        <TextInput label="Email" {...register('email')} error={errors.email?.message} />
        <TextInput label="Password" type="password" {...register('password')} error={errors.password?.message} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
