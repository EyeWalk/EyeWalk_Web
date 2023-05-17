import ImgPlanoBasico from "../img/app.png"
import ImgPlanoPremium from "../img/oculos.png"
import PriceCard from './PriceCard';
import Grid from '@mui/material/Grid';

const PriceTable = ({ planos }) => {
    return (
        <Grid container spacing={2} my={4}>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                {
                    planos
                        ? <PriceCard imgSrc={ImgPlanoBasico} imgWidth={120} imgAlt="tela aplicativo" title={planos[0].name} text={planos[0].description} price={planos[0].price} />
                        : <PriceCard imgSrc={ImgPlanoBasico} imgWidth={120} imgAlt="tela aplicativo" title="Plano Básico" text="Descrição" price="preço" />
                }
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>

                {
                    planos
                        ? <PriceCard imgSrc={ImgPlanoPremium} imgWidth={360} imgAlt="dispositivo oculos" title={planos[1].name} text={planos[1].description} price={planos[1].price} />
                        : <PriceCard imgSrc={ImgPlanoPremium} imgWidth={360} imgAlt="dispositivo oculos" title="Plano Premium" text="Descrição" price="preço" />
                }
            </Grid>
        </Grid>
    )
}

export default PriceTable