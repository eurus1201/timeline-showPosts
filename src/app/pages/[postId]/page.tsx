import { Grid, Typography } from "@mui/material";


type Params = {
    params: {
        postId: string
    }
}

const getPost = async (id: string): Promise<any> => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await data.json();
    return post;
};

const getComments = async (id: string): Promise<any> => {
    const comments = (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)).json();
    return comments;
}

export default async function PostPage({
    params: { postId },
}: {
    params: {
        postId: string;
    };
}) {
    const post = await getPost(postId);
    const comments = await getComments(postId);

     return (
        <Grid container spacing={2} justifyContent={'center'}>
            <Grid item xs={12} md={9}>
                <Typography variant="h3" paragraph >
                    {post.title}
                </Typography>
                <Typography paragraph>
                    {post.body}
                </Typography>
            </Grid>
            
            <Grid item xs={12} container md={9}>
                <Typography variant="h4" paragraph >
                    Comments
                </Typography>
                {
                    comments.map((comment: any) => {
                        return (<Grid my={2} pb={2} borderBottom={'0.02px solid aqua'} key={comment.id} item xs={12}>
                            <Typography paragraph>
                                {comment.name} - {comment.email}
                            </Typography>
                            <Typography variant="caption">
                                {comment.body}
                            </Typography>
                        </Grid>)
                    })
                }
            </Grid>
        </Grid>
    );
}