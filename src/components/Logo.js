import { Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme  = useTheme();

  return (
    <Box >
      <Typography variant="h4" component="h1" sx={{ fontWeight: 500, color: theme.palette.textGrey1 }}>
        TeeRex
      </Typography>
    </Box>
  );
}
 

export default Logo;