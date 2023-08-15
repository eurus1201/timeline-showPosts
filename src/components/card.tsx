import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  id: string;
  slug:string;
}

const CardPost: React.FC<Props> = ({ src, title, id ,slug}) => {

  return (
    <Grid sx={{ paddingLeft: '0 !important' }} justifyContent={'center'} key={Math.random() * 100000000000000} item xs={12} md={5.9} lg={2.9} mt={2} borderRadius={'15px'} container minHeight={300} border={'1px solid aqua'}  >
          <Typography pl={1} variant="h6">
            {title}
          </Typography>
          {src &&
      <Link href={`/pages/${id}`} >
            <Image src={src} alt="t" width={395} height={200} />
      </Link>
          }
    </Grid>
  );
};

export default CardPost;