'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import StyledButton from './buttons/StyledButton';
import clsx from 'clsx';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({ defaultValues: { name: '', email: '', message: '' } });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    if (data) {
      axios
        .post('/api/send', data)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setIsLoading(false);
            router.push('/thankyou');
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id='form'
      className='flex flex-col gap-4 w-full max-w-[35rem] xl:max-w-[40rem]'>
      <input
        placeholder='Name*'
        {...register('name', { required: true })}
        className={clsx(
          `
        p-2
        border
        bg-transparent
        outline-none
        placeholder:italic
        placeholder:text-text
        focus-visible:bg-backgroundD/10
        focus-visible:pl-4
        hover:bg-backgroundD/10
        hover:pl-4`,
          errors.name ? 'border-rose-500' : 'border-backgroundD',
          isLoading &&
            'opacity-75 cursor-default hover:pl-2 hover:bg-transparent'
        )}
      />
      <input
        placeholder='Email*'
        {...register('email', {
          required: 'Must be valid email address.',
          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        })}
        className={clsx(
          `
        p-2
        border
        bg-transparent
        outline-none
        placeholder:italic
        placeholder:text-text
        focus-visible:bg-backgroundD/10
        focus-visible:pl-4
        hover:bg-backgroundD/10
        hover:pl-4`,
          errors.email ? 'border-rose-500' : 'border-backgroundD',
          isLoading &&
            'opacity-75 cursor-default hover:pl-2 hover:bg-transparent'
        )}
      />
      <textarea
        placeholder='Message*'
        {...register('message', { required: true })}
        className={clsx(
          `p-2
          border
          bg-transparent
          outline-none
          resize-none
          placeholder:italic
          placeholder:text-text
          focus-visible:bg-backgroundD/10
          focus-visible:pl-4
          hover:bg-backgroundD/10
          hover:pl-4
          min-h-[8rem]`,
          errors.message ? 'border-rose-500' : 'border-backgroundD',
          isLoading &&
            'opacity-75 cursor-default hover:pl-2 hover:bg-transparent'
        )}
      />
      <StyledButton
        submit
        disabled={!isDirty || !isValid}
        black
        border>
        {isLoading ? 'Sending...' : 'Send'}
      </StyledButton>
    </form>
  );
};

export default Form;
