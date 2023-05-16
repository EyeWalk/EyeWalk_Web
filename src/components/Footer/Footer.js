import StyledTextarea from '@mui/base/TextareaAutosize';
import Typography from '@mui/material/Typography';
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
                    <FormControl>
                        <Input placeholder='Nome' type='text' size='small' sx={{ color: "black", fontSize: "14px", backgroundColor: "white", borderRadius: "2px", textAlign: "center", paddingLeft: "5px", marginBottom: "15px" }} />
                        <Input placeholder='Email' type="email" size='small' sx={{ color: "black", fontSize: "14px", backgroundColor: "white", borderRadius: "2px", textAlign: "center", paddingLeft: "5px", marginBottom: "15px" }} />


                        <StyledTextarea
                            aria-label="minimum height"
                            minRows={3}
                            maxRows={4}
                            placeholder=""
                        />
                    </FormControl>

                    <Button
                        sx={{ textTransform: "none", color: "#ffffff", fontSize: "12px", margin: "10px 0" }}
                        variant="contained"
                        size="small">Enviar</Button>
                </div>

            </div>

            <div className='line'></div>
            <div className='footer-bottom'>
                <Typography sx={{ fontSize: "12px" }}> &copy; 2023 Insane Technology - Todos os direitos reservados.</Typography>
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