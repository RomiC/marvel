import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardItem({comic}) {  
return(
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardMedia
      component="img" 
      height="200"
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
    </CardActions>
  </Card>
)  
}
