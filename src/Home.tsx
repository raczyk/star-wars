import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Main from "./Main";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import { useData } from "./useData";

const sidebar = {
  title: "About",
  description:
    "The Star Wars Character Encyclopedia is a web project dedicated to providing fans and enthusiasts of the Star Wars universe with a comprehensive and interactive resource to explore and learn about the rich tapestry of characters that inhabit this iconic galaxy far, far away. This project aims to immerse users in the vast and diverse world of Star Wars characters, spanning across movies, TV series, books, comics, and more.",

  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  const [{ data, isLoading, isError }, doFetch] = useData(
    "https://akabab.github.io/starwars-api/api/all.json"
  );

  console.log(data?.[0].image);
  const mainFeaturedPost = {
    title: data?.[0].name ?? "",
    description: data?.[0].manufacturer ?? "",
    image: data?.[0].image ?? "",
    imageText: data?.[0].name ?? "",
    linkText: "Continue reading…",
  };

  const featuredPosts = data?.slice(3, 5).map((item) => ({
    title: item.name,
    date: item.species,
    description: item.manufacturer,
    image: item.image,
    imageLabel: item.imageLabel,
    wiki: item.wiki,
  }));

  const mainPosts = data?.slice(5, 20).map((item) => ({
    title: item.name,
    date: item.species,
    description: item.manufacturer,
    image: item.image,
    imageLabel: item.imageLabel,
    homeworld: item.homeworld,
    cybernetics: item.cybernetics,
    wiki: item.wiki,
  }));

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Home" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts?.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {mainPosts && <Main posts={mainPosts} />}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
