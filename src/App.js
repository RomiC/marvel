
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Header from "./components/Header";
import CardItem from "./components/CardItem";
import { API_KEY, API_URL,PER_PAGE } from "./common/constants";
import usePagination from "./common/customHooks/Pagination";
import Skeleton from "./components/Skeleton";

function App() {
  const [comics, setComics] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  
  const count = Math.ceil(comics.length / PER_PAGE);
  const _DATA = usePagination(comics, PER_PAGE);

  const handlePaging = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  
  // Define the function that fetches the data from API
  const fetchData = async () => {
     await axios.get(`${API_URL}?apikey=${API_KEY}`)
    .then(function (response) {
      setComics(response.data.data.results);
    })
    .catch(function (error) {
     setError(true)
    })
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
              <Typography variant="caption" display="block" gutterBottom> Filter by</Typography>
              <TextField  size="small" id="filter" name="filter" type="text" value={filter} onChange={(event) => setFilter(event.target.value)} />
              {filter===""&&<Pagination count={count} size="large" page={page} variant="outlined" shape="rounded" onChange={handlePaging}  />}
              <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {!error?
            (<Grid container spacing={4}>
                        {comics.length > 0 ? (
                          _DATA.currentData()
                            .filter((f) => f.title.toLowerCase()
                            .includes(filter.toLowerCase()) || filter === "")
                            .map((comic, comicIndex) => (
                              <Grid item key={comicIndex} xs={12} sm={6} md={4}>                            
                                <CardItem comic={comic} />
                              </Grid>
                            ))      
                        ) :          
                      <Skeleton data={comics}/>
                        }
                      </Grid>):<div>Error Ocured :( Please Try Again Later</div>
          }
          
        </Container>
      </main>
    </div>
  );
}

export default App;
