
import {Box,Button, Typography,styled} from "@mui/material"; //Importing tags from mui/material
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 
//styling
const Wrapper = styled(Box)`
display:flex;`
const Events =styled(Typography)`
color:white;
display:flex;
font-size:15px;
`
const  Arrow = styled(KeyboardArrowDownIcon)`
color:white;`
const ImageIcon  = styled(AccountCircleIcon)`
color:white;`

//components

const CustomButtons=()=>{
    return(
        <Wrapper>
            <Events style={{margin:3, marginTop:12}}>  Browse Jobs<Arrow/></Events>
            <Events style={{ margin:3,marginTop:12}}> Post Jobs<Arrow/> </Events>
                
            <Events style={{ margin:3,marginTop:12}}>  Help <Arrow/></Events>
            <Box>
                <Events style={{ Margin:3,marginTop:12}}><ImageIcon/>avanishsrivastava78@gmail.com <Arrow/></Events>
            </Box>
        </Wrapper>
    ) 

}
export default CustomButtons;
