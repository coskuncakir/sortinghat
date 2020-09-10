import Head from "next/head";
import Layout from "../components/layout";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Harry Potter</title>
      </Head>
      <Layout>
        <Container maxWidth="sm">
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Sorting Hat
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => router.push("/sorting-hat")}
                    size="small"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Characters
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => router.push("/characters")}
                    size="small"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Houses
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => router.push("/houses")} size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Spells
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => router.push("/spells")} size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
