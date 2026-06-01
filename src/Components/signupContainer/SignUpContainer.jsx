
"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';




const SignUpContainer = () => {

  const router = useRouter()

  const handleSignUp = async (event) => {

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const convertedData = Object.fromEntries(formData.entries());
    console.log(convertedData,'converted')

    const { name, email, image, password } = convertedData;
    

   try{
     // signup with email and password;
    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      image: image,
      password: password

    })
    
    if(error){
      toast.error(error.message)
    }
    if(data){
      toast.success('Registration successful! Please login.')
      router.push('/login')
    }
     console.log('error', error, data)
   }
    catch(err){
      toast.error(err?.message || "Something went wrong");
   }

  
  }


  // sign up with Google;
  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className='my-15 space-y-5 '>
      {/* heading content */}
      <div className='text-center'>
        <h1 className='text-4xl font-semibold mb-1
        text-[#22D3EE] hover:text-[#67E8F9]'>Create Account</h1>
      </div>

      {/* form */}
      <Card className='max-w-md mx-auto p-5 rounded-xl  bg-white/10 border border-white/10 backdrop-blur-xl'>
        <Form onSubmit={handleSignUp}
          className="flex flex-col gap-4 ">

          <TextField
            isRequired
            name="name"
            type="text"

          >
            <Label className='text-[#E2E8F0]'>Name</Label>
            <Input className='bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#64748B]'
             placeholder="write your name" />
            <FieldError />

          </TextField>
          <TextField
          isRequired
            name="image"
            type="url">

            <Label className='text-[#E2E8F0]'>Photo Url</Label>
            <Input className='bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#64748B]'
             placeholder="https://..." />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className='text-[#E2E8F0]'>Email</Label>
            <Input className='bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#64748B]'
             placeholder="write your email" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className='text-[#E2E8F0]'>Password</Label>
            <Input className='bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#64748B]'
             placeholder="Enter your password" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 lowercase and 1 number</Description>
            <FieldError />
          </TextField>

          <Button type="submit" className={'w-full bg-[#22D3EE] hover:bg-[#06B6D4] text-[#07111F] rounded-xl text-base'}>
            Create Account
          </Button>

          <div className='flex items-center gap-3 justify-center'>
            <div className='bg-[#94A3B8] h-0.5 w-full'></div>
            <span className='text-[#94A3B8]'>Or</span>
            <div className='bg-[#94A3B8] h-0.5 w-full'></div>
          </div>

          <Button onClick={handleGoogleSignUp}
            className=" bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200
            w-full rounded-xl py-4 text-base" variant="tertiary">
            <FcGoogle className='size-5' />
            Continue with Google
          </Button>
        </Form>
        <p className='text-center text-sm text-[#94A3B8]'>Already have an account?
          <Link className='font-medium text-[#22D3EE] hover:text-[#67E8F9]'
            href="/login"> Login</Link></p>
      </Card>
    </div>
  );
};

export default SignUpContainer;