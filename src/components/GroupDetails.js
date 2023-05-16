import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import picEllen from "../img/PictureE.png"
import picGa from "../img/PictureG.png"
import picRafa from "../img/PictureRa.png"
import picRenne from "../img/PictureRe.png"
import { Typography } from '@mui/material';

const GroupDetails = () => {

    return (
        <Box sx={{ width: '80%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10px 0 50px 0" }}>
                    <Avatar src={picEllen} sx={{ width: 90, height: 90 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: "18px", margin: "15px 0" }}>Ellen Gomes</Typography>
                    <Typography>Fisioterapeuta especialista em Neurologia Funcional e Analista de Sistemas, apaixonada por medicina, ciência e inovação, e sempre em busca de melhorar a qualidade de vida do maior número de pessoas possível, trazendo o lado humanizado da Medicina para a área de Tecnologia.</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10px 0 50px 0" }}>
                    <Avatar src={picGa} sx={{ width: 90, height: 90 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: "18px", margin: "15px 0" }}>Gabriel Almeida</Typography>
                    <Typography>Analista e Programador de Sistemas com experiência na indústria 4.0, desenvolvendo e integrando sistemas IOT. Sempre utilizando as melhores práticas de desenvolvimento de software e gerenciamento de equipes e focado em arquitetar soluções e resolver problemas.</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Avatar src={picRafa} sx={{ width: 90, height: 90 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: "18px", margin: "15px 0" }}>Rafael Costa</Typography>
                    <Typography>Analista de Sistemas e Desenvolvedor BackEnd com experiência em logística, tendo trabalhado e interagindo em diversas áreas e participado de diferentes projetos, interessado em ciência e tecnologia, e com foco no trabalho em equipe e em se manter resiliente aos problemas.</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Avatar src={picRenne} sx={{ width: 90, height: 90 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: "18px", margin: "15px 0" }}>Renne Castrucci</Typography>
                    <Typography>Diretor de cena, fotógrafo, apaixonado por tecnologia e inovação. Traz seu olhar estético e apurado, decorrente de mais de 18 anos de trabalho na área da moda, e está sempre em busca de unir design e tecnologia em soluções que façam a diferença na vida do próximo.</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default GroupDetails