import { AppBar, Toolbar, Typography } from "@mui/material";


export default function Header({Text="Title"}) {
    return (
        <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
        {Text}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  