import { Grid } from "@mui/material"
import CardPost from '../components/card';

async function getData() {
  const res = await fetch('https://jsonplaceholder.org/posts',{
    next:{revalidate:10},
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
interface props{
  id: string;
  image: string;
  src: string;
  title:string;
  slug:string;
}
export default async function Page() {
  const data = await getData()

   return <main>
    <Grid container justifyContent={'space-between'} p={3} spacing={2}>
      {
        data?.map((post: props) => {
          return (
            <CardPost
              title={post.title}
              src={post.image}
              id={post.id}
              slug={post.slug}
            />
          )
        })
      }
    </Grid>
  </main>
}
