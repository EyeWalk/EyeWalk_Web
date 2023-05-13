import StyledTextarea from '@mui/base/TextareaAutosize';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./index.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='duvidas'>
                <Typography>Dúvidas?</Typography>
                <StyledTextarea
                    aria-label="minimum height"
                    minRows={3}
                    maxRows={4}
                    placeholder="Minimum 3 rows"
                />
            </div>
            <div className='contato'>
                <Typography>Contato</Typography>
                <div className='icons'>
                    <div>
                        <MailOutlineIcon sx={{ color: "#FFBB3F" }} />
                        {/* <Typography>Email</Typography> */}
                    </div>
                    <div>
                        <LinkedInIcon sx={{ color: "#FFBB3F" }} />
                        {/* <Typography>LinkedIn</Typography> */}
                    </div>
                    <div>
                        <InstagramIcon sx={{ color: "#FFBB3F" }} />
                        {/* <Typography>Instagram</Typography> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer