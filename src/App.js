import Header from "./components/Header";
import "./App.css";
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { API_KEY, API_URL } from "./common/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./components/CardItem";
import usePagination from "./components/Pagination";

function App() {
  // At the beginning, posts is an empty array
  const [comics, setComics] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  
  const PER_PAGE = 9;
  const count = Math.ceil(comics.length / PER_PAGE);
  const _DATA = usePagination(comics, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get(`${API_URL}?apikey=${API_KEY}`);
    console.log(data);
    setComics(data.data.results);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header Text={"Marvel"} />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Marvel Movies
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Grid>
                <Typography
                  component="span"
                  variant="span"
                  color="text.primary"
                  gutterBottom
                >
                  FilterBy:
                </Typography>
                {/* <TextField id="outlined-basic" label="Name" variant="outlined" />              
              <TextField id="outlined-basic" label="id" variant="outlined" /> */}
                <TextField
                  id="filter"
                  name="filter"
                  type="text"
                  value={filter}
                  onChange={(event) => setFilter(event.target.value)}
                />
                <Pagination
                  count={count}
                  size="large"
                  page={page}
                  variant="outlined"
                  shape="rounded"
                  onChange={handleChange}
                />
              </Grid>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {comics.length > 0 ? (
              _DATA
                .currentData()
                .filter((f) => f.title.includes(filter) || filter === "")
                .map((comic, comicIndex) => (
                  <Grid item key={comicIndex} xs={12} sm={6} md={4}>
                    <CardItem comic={comic} />
                  </Grid>
                ))
            ) : (
              <div>loader</div>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
