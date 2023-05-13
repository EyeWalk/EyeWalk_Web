import ImgPlanoBasico from "../img/app.png"
import ImgPlanoPremium from "../img/oculos.png"
import PriceCard from './PriceCard/PriceCard';
import Grid from '@mui/material/Grid';

const PriceTable = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <PriceCard imgSrc={ImgPlanoBasico} imgWidth={120} imgAlt="tela aplicativo" title="Plano Básico" text="Guia com navegação por voz, agenda de contatos com função de emergência e objetos." />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <PriceCard imgSrc={ImgPlanoPremium} imgWidth={360} imgAlt="dispositivo oculos" title="Plano Premium" text="Inclui o dispositivo EyeWalk para a detecção de obstáculos em tempo real, reconhecimento de pessoas, mais todas as funções do plano básico." />
            </Grid>

        </Grid>
    )
}

export default PriceTable