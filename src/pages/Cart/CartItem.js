import { Card, CardContent, CardActions, CardMedia, Typography, Box, Stack, Divider, IconButton, Icon, Button } from '@mui/material';
import { incrementQunatity, decrementQuantity, deleteItem } from '../../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import useLocalStorage from '../../hooks/useLocalStorage';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const {  setItemToLocalStorage } = useLocalStorage();

  const handleOnIncrementQuantity = () => {
    dispatch(incrementQunatity(item.id));
  }

  const handleOnDecrementQuantity = () => {
    dispatch(decrementQuantity(item.id));
  }

  const handleOnDeleteItem = () => {
    dispatch(deleteItem(item.id));
  }

  const getTotalItemPrice = () => item.price * item.cartQuantity;
  
  return (
    <Card sx={{ display: "flex", padding: 2 }}>
      <CardMedia
        component="img"
        image={item.imageURL}
        alt={item.name}
        sx={{ width: "30%" }}
      />
      <Box sx={{ flex: 1 }}>
        <CardContent>
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="body1">{item.name}</Typography>
            <Typography variant="h5" component="span">
              ₹ {getTotalItemPrice()}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography>₹ {item.price}</Typography>
            <Box
              sx={{ width: ".5px", height: "15px", backgroundColor: "#999" }}
            />
            <Typography>In Stock</Typography>
          </Stack>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ border: "1px solid #ddd", borderRadius: 2 }}
          >
            <IconButton onClick={handleOnDecrementQuantity} sx={{ fontSize: "1.3rem" }}>
              <ion-icon name="remove-outline"></ion-icon>
            </IconButton>
            <Typography>{item.cartQuantity}</Typography>
            <IconButton onClick={handleOnIncrementQuantity} sx={{ fontSize: "1.3rem" }}>
              <ion-icon name="add-outline"></ion-icon>
            </IconButton>
          </Stack>
          <Button onClick={handleOnDeleteItem} sx={{display: 'flex', gap: .5, alignItems: 'center',}}> 
            <ion-icon style={{fontSize: '1rem'}} name="trash-outline"></ion-icon>
            <Typography variant='body1'>Delete</Typography>
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default CartItem;