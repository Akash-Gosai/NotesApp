
import { AppBar, Toolbar ,Typography} from '@mui/material';
import { logo } from '../constants/constant';

const Header: React.FC = () => {
    return (
        <AppBar color="secondary"  position="static">
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 75, marginRight: 10}} />
                <Typography>BlueNote</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;