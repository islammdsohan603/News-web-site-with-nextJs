'use client';

import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
    });

    if (data) {
      toast.success('Successfully logged in!');
      router.push('/');
      router.refresh();
    }
    if (error) {
      toast.error('Login failed!');
    }
  };

  return (
    <div className="w-10/12 mx-auto flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <div>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={value => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address';
              }
              return null;
            }}
          >
            <Label className="text-white">Email</Label>
            <Input
              name="email"
              placeholder="john@example.com"
              className={'text-white'}
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={value => {
              if (value.length < 8)
                return 'Password must be at least 8 characters';
              if (!/[A-Z]/.test(value))
                return 'Password must contain at least one uppercase letter';
              if (!/[0-9]/.test(value))
                return 'Password must contain at least one number';
              return null;
            }}
          >
            <Label className="text-white">Password</Label>
            <Input
              name="password"
              placeholder="Enter your password"
              className={'text-white'}
            />
            <Description>
              {' '}
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className={'w-full text-lg font-semibold'}>
              <Check />
              LogIn
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
