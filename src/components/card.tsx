import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Typography } from "@mui/material";

interface Props {
  src: string;
  title: string;
}

const CardPost: React.FC<Props> = ({ src, title }) => {

    return (
    <Grid sx={{paddingLeft:'0 !important'}} justifyContent={'center'} key={Math.random()*100000000000000} item xs={12} md={5.9} lg={2.9} mt={2} borderRadius={'15px'} container minHeight={300} border={'1px solid aqua'}  >
      <Typography pl={1} variant="h6">
        {title}
      </Typography>
      {src &&
      <Image src={src} alt="t" width={420} height={200} />
      }
    </Grid>
  );
};

export default CardPost;