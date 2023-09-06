import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Paper } from "@mui/material";

interface MainProps {
  posts: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    homeworld: string;
    cybernetics: string;
    wiki: string;
  }[];
}
export default function Main(props: MainProps) {
  const { posts } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      {posts.map((post) => {
        return (
          <div key={post.title}>
            <Divider />

            <Typography variant="h6" gutterBottom>
              {post.title}
            </Typography>
            <Paper
              sx={{
                width: "50%",
                height: 400,
                position: "relative",
                backgroundColor: "grey.800",
                color: "#fff",
                mb: 4,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${post.image})`,
              }}
            ></Paper>
            <Typography variant="caption">{post.description}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle2" paragraph>
              {post.cybernetics}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Home world: {post.homeworld}
            </Typography>
            <a href={post.wiki} target="_blank" rel="noreferrer">
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </a>
            <Divider />
          </div>
        );
      })}
    </Grid>
  );
}
