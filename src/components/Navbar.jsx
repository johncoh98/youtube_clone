import{ Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';



const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{positon: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}} >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src="./blueyt.png" alt="Logo Youtube Bleu Png@nicepng.com" height={40}/>
      </Link>
      <SearchBar />
    </Stack>
  );

export default Navbar