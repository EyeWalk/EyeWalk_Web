import StyledTextarea from '@mui/base/TextareaAutosize';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider"
import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import "./index.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-main'>
                <div className='duvidas'>
                    <Typography sx={{ textAlign: 'start', fontSize: "16px", marginBottom: "20px", textDecoration: "underline" }}>Dúvidas?</Typography>
                    <FormControl sx={{ flexDirection: "row" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", marginRight: "15px" }}>
                            <Input placeholder='Nome' type='text' size='small' sx={{ color: "black", fontSize: "12px", backgroundColor: "white", borderRadius: "2px", textAlign: "center", paddingLeft: "5px", marginBottom: "15px" }} />
                            <Input placeholder='Email' type="email" size='small' sx={{ color: "black", fontSize: "12px", backgroundColor: "white", borderRadius: "2px", textAlign: "center", paddingLeft: "5px", marginBottom: "15px" }} />
                            <Button
                                sx={{ textTransform: "none", color: "#ffffff", fontSize: "12px", marginBottom: "10px", height: "20px", width: "30px" }}
                                variant="contained"
                            >Enviar</Button>
                        </Box>
                        <StyledTextarea
                            minRows={3}
                            maxRows={4}
                            placeholder='Sua mensagem'
                            style={{ height: "62px", fontSize: "12px", width: "150px", paddingLeft: "5px" }}
                        />
                    </FormControl>

                </div>
            </div>
            <div className='line'></div>
            <div className='footer-bottom'>
                <Typography sx={{ fontSize: "12px" }}> &copy; 2023 Insane Technology </Typography>
                <div className='contato'>
                    <Typography sx={{ textAlign: 'center', fontSize: "14px", marginRight: "10px" }}>Siga-nos</Typography>
                    <div className='icons'>
                        <div className='icon'>
                            <MailOutlineIcon sx={{ color: "#FFBB3F", fontSize: 17, margin: "0 10px 0 0" }} />
                            {/* <Typography sx={{ fontSize: "14px" }}>Email</Typography> */}
                        </div>
                        <div className='icon'>
                            <LinkedInIcon sx={{ color: "#FFBB3F", fontSize: 17, margin: "0 10px 0 0" }} />
                            {/* <Typography sx={{ fontSize: "14px" }}>LinkedIn</Typography> */}
                        </div>
                        <div className='icon'>
                            <InstagramIcon sx={{ color: "#FFBB3F", fontSize: 17, margin: "0 10px 0 0" }} />
                            {/* <Typography sx={{ fontSize: "14px" }}>Instagram</Typography> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer