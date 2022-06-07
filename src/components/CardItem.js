import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@mui/material";
import { useState } from "react";

export default function CardItem({comic}) {  
return(
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardMedia
      component="img"      
      sx={{
        // 16:9
        pt: "56.25%",
      }}
      image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
      alt="image"
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">        
      {comic.title}
      </Typography>
      <Typography style={{
        textOverflow:'ellipsis',
        overflow:'hidden',
        height:40,
        whiteSpace:'nowrap'
      }}>
        {comic.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View</Button>
      <Button size="small">Edit</Button>
    </CardActions>
  </Card>
)
  
}
