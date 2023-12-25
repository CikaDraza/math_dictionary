import { Divider, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function CategoryButtons({ name, icon, srb, eng }) {

  return (  
    <Card sx={{
      flexGrow: 1,
      height: '100%',
      width: '100%',
      textAlign: 'center',
      display: 'flex',
      borderRadius: '20px',
      border: '3px solid #fff',
      backgroundColor: 'transparent',
      boxSizing: 'border-box',
      '&:hover': {
        boxShadow: '0 0 30px #a2fdec',
      }
    }}>
      <CardActions sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent!important',
        height: '100%',
        '& .css-mbdgrr-MuiCardContent-root:last-child': { paddingBottom: 0}
        }}>
        <CardMedia
          component="img"
          sx={{
            width: '70%',
            height: 100,
            objectFit: 'contain',
            opacity: '0.8'
          }}
          image={icon.src}
          title={name}
        />
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          color: '#f4f4f4',
          }}>
          <Typography variant="caption">
            {srb}
          </Typography>
          <Divider variant="middle" style={{backgroundColor: '#a3a3a3'}} />
          <Typography variant="caption">
            {eng}
          </Typography>
        </CardContent>
      </CardActions>
    </Card>    
  )
}
