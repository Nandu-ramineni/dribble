import { Dialog, Box,  Typography, styled } from '@mui/material';
import { useContext, useState } from 'react';
import { authenticateLogin, authenticateSignup } from '../../Services/api';
import { DataContext } from '../../Context/DataProvider';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { logos } from '../../Constants/data';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const Component = styled(Box)`
    height: 80vh;
    width: 100vw;

    @media (min-width: 768px) {
        width: 80vw;
    }
`;
const Image = styled(Box)`
    display: none; 
    @media (min-width: 768px) {
        display: block;
        background: #F5D48E url('https://cdn.dribbble.com/users/76454/screenshots/6596459/drbbb_4x.png') no-repeat center 85%;
        height:auto;
        background-size: contain;
        width:40%;
        padding:45px 35px;
        & > p,h5{
            color: #ffffff;
            font-weight: bold;
        }
    }
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 2rem 5%;

    @media (min-width: 768px) {
        padding: 2rem 13%;
    }

    & > div,& > button, & > p{
        margin-top:20px;
    }
    @media (min-width: 450px) {
        padding: 2rem 13%;
    }
`
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
    
`
const CreateAccount = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    text-align: center;
    cursor: pointer;
    color: #EA4B8B;
`
const accountIntialValues = {
    login: {
        view: 'login',
        heading: 'Welcome Back!',
        subheading: 'We are so excited to see you again!',
    },
    signUp: {
        view: 'signup',
        heading: 'Discover the Worlds top',
        subheading: 'Designers and Creatives',
    }
}
const signUpIntialValues = {
    Name: '',
    userName: '',
    email: '',
    password: '',

}
const loginIntialValues = {
    userName: '',
    password: ''
}
const Error = styled(Typography)`
    color: #ff6161;
    font-size: 14px;
    line-height: 0;
`
const InputBox = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
    @media (min-width: 450px) {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }


`
const Login = () => {
    const [account, toggleAccount] = useState(accountIntialValues.login)
    const [signUp, setSignUp] = useState(signUpIntialValues)
    const [login, setLogin] = useState(loginIntialValues)
    const { setAccount } = useContext(DataContext)
    const [error, setError] = useState(false)
    const navigate= useNavigate()
    const handleClose = () => {
        //setOpen(false)
        toggleAccount(accountIntialValues.login)
        setError(false)
    }
    const toggleSignUp = () => {
        toggleAccount(account.view === 'login' ? accountIntialValues.signUp : accountIntialValues.login)
    }
    const toggleLogin = () => {
        toggleAccount(account.view === 'signup' ? accountIntialValues.login : accountIntialValues.signUp)
    }
    const HandleChange = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value })
        console.log(signUp);
    }
    const signupUser = async () => {
        let response = await authenticateSignup(signUp);
        if (response.status == 200) {
            const templateParams = {
                to_email: signUp.email,
                greeting: `Hello ${signUp.Name},`, 
                message: `Thank you for signing up! We're excited to have you on board.`,
            };
            emailjs.send('service_4xwezha', 'template_xnb3pxt', templateParams, 'Lm_Wni6iZVR4wdHdf')
                .then((response) => {
                    console.log('Email sent successfully:', response);
                })
                .catch((error) => {
                    console.error('Email sending failed:', error);
                });
            handleClose();
            setAccount(signUp.userName);
            navigate('/completeProfile')
        } else {
            setError(true)
        }
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    const LoginUser = async () => {
        let response = await authenticateLogin(login);
        if (response.status === 200) {
            handleClose();
            setAccount(login.userName)
            navigate('/completeProfile')
        } else {
            setError(true)
        }
    }
    const handleCloseLogin = () => {
        navigate('/')
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <img src="https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo-2009.png" alt="logo" className='w-1/4 filter invert sepia saturate-0 hue-rotate-303 brightness-100 contrast-101' />
                        <Typography variant='h5' style={{ marginTop: 20, color: '#846014' }} >{account.heading}</Typography>
                        <Typography variant='h5' style={{ color: '#846014' }}>{account.subheading}</Typography>
                    </Image>
                    {account.view === 'login' ? (
                        <Wrapper>
                            <Box className="flex justify-end text-xl cursor-pointer">
                                <IoClose  onClick={handleCloseLogin}/>
                            </Box>
                            <Box>
                                <Typography variant='h5' style={{ textAlign: 'center', fontWeight: 'bold' }}>Sign In to Dribble</Typography>
                            </Box>
                            <Box>
                                <label htmlFor='userName' className='font-medium flex items-center gap-3'><FaRegUser />username</label> 
                                <input name='userName' label='Enter Username' onChange={onValueChange} placeholder='Enter username' className="mt-1 p-2 bg-[#F3F3F3] w-3/4  rounded-md focus:outline-none md:w-full"/>
                            </Box>
                            <Box>
                                <label htmlFor='password' className='font-medium flex items-center gap-3'><RiLockPasswordLine />password</label> 
                                <input name='password' label='Enter Password' onChange={onValueChange} placeholder='Enter password' className="mt-1 p-2 bg-[#F3F3F3] w-3/4  rounded-md focus:outline-none md:w-full"/>
                            </Box>
                            {error && <Error>Please enter valid credentials</Error>}
                            <Text className='flex justify-center'>By continuing, you agree to Dribble{"'"}s Terms & services.</Text>
                            <button onClick={LoginUser} className='bg-[#EA4B8B] text-white font-medium rounded-md py-2 w-1/2'>Login</button>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <Box className='flex  justify-center items-center gap-12 py-5 cursor-pointer'> 
                                {
                                    logos.map((logo, index) => (
                                        <img key={index} src={logo.url} alt='logo' className='w-10 h-10' />
                                    ))
                                }
                            </Box>
                            <CreateAccount onClick={toggleSignUp}>New to Dribble? Create Account</CreateAccount>
                        </Wrapper>
                    ) : (
                        <Wrapper >
                            <Box className="flex justify-end text-xl cursor-pointer">
                                <IoClose  onClick={handleCloseLogin}/>
                            </Box>
                            <CreateAccount onClick={toggleLogin}>Already a member? Sign In</CreateAccount>
                            <Box>
                                <Typography variant='h5' style={{ textAlign: 'center', fontWeight: 'bold' }}>Sign up to Dribble</Typography>
                            </Box>
                            <InputBox>
                                <Box>
                                    <label htmlFor='Name' className='font-medium flex items-center gap-3'><IoPersonAddOutline/>Name</label> 
                                    <input name='Name' onChange={HandleChange} className="mt-1 p-2 bg-[#F3F3F3] w-3/4  rounded-md focus:outline-none md:full " />
                                </Box>
                                <Box>
                                    <label htmlFor='userName' className='font-medium flex items-center gap-3'><FaRegUser /> User Name</label> 
                                    <input name='userName' label='Enter User Name' onChange={HandleChange} className="mt-1 p-2 bg-[#F3F3F3] w-3/4  rounded-md focus:outline-none md:full" />
                                </Box>
                            </InputBox>
                            <Box>
                                <label htmlFor='email' className='font-medium flex items-center gap-3'><MdOutlineEmail />Email</label> 
                                <input name='email' type='email' label='Enter Email' onChange={HandleChange} className="mt-1 p-2 bg-[#F3F3F3] w-3/4  rounded-md focus:outline-none md:w-full" />
                            </Box>
                            <Box>
                                <label htmlFor='password' className='font-medium flex items-center gap-3'><RiLockPasswordLine /> Password</label> 
                                <input name='password' type='password' label='Enter Password' onChange={HandleChange} className="mt-1 p-2 bg-[#F3F3F3] w-3/4  rounded-md focus:outline-none md:w-full" />
                            </Box>
                            <Box>
                                {error && <Error>Username or email already taken.</Error>}
                            </Box>
                            <Box style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                                <input type='checkbox' style={{ marginTop: '1rem' }} /> <Typography className='text-gray-600'>Creating an account means you{"'"}re okay with our <span className='text-[#4F3CB7] text-md font-medium'>Terms of service,Privacy policy.</span></Typography>
                            </Box>
                            <button onClick={signupUser} className='bg-[#EA4B8B] text-white font-medium rounded-md py-2 w-1/2'>Create Account</button>
                        </Wrapper>
                    )}
                </Box>
            </Component>
        </Dialog>
    )
}

export default Login