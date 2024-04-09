import { useState } from "react";
import { Typography, Menu, MenuItem, Box, styled } from '@mui/material';
import { IoLogOutOutline } from "react-icons/io5";
const Component = styled(Menu)`
    margin-top: 10px;
    cursor: pointer;
    margin-left: -20px;
`;

const Container=styled(Box)`
    display: flex;
    align-items: center;
`

const Profile = ({account,setAccount,imageURL}) => {
    const [open, setOpen] = useState(false);
    const dpURL= 'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png'
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const logout = () => {
        setAccount('');
    }
return (
    <Box>
            <Box onClick={handleClick} className="flex justify-center items-center gap-2 cursor-pointer">
            {imageURL ? <img src={imageURL} alt="profile" className="w-8 h-8 rounded-full"/> : <img src={dpURL} alt="profile" className="w-8 h-8 rounded-full"/> }
            <Typography style={{ cursor:'pointer',fontSize:'16px',paddingRight:'4px',marginTop:'-2'}} >{account} </Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <Container>
                <MenuItem onClick={() => { handleClose(); logout();}}>
                    
                    <p className='font-medium flex justify-around items-center gap-3'><IoLogOutOutline />Logout</p>
                </MenuItem>
                </Container>
            </Component>
            
        </Box>
)
}

export default Profile
