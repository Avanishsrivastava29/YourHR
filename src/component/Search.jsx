  
import {InputBase,Box ,styled} from "@mui/material"; 
import  SearchIcon from '@mui/icons-material/Search';
//styling
const SearchContainer = styled(Box)`

background:#fff;
width:40%;
boarder-radius=2px;
margin-left:10px;  
display:flex;


`;
const SearchIconWrapper = styled(Box)`
color:grey;
padding-top:5px;`
const PlaceHolder=styled(InputBase)`
padding-left:20px;
width:100%;
`;




const Search = ()=>{
   return (
       
       <SearchContainer>
           <SearchIconWrapper>
               <SearchIcon/>
           </SearchIconWrapper>
           <PlaceHolder
           placeholder ="search for Jobs"
           />
             
       </SearchContainer>
   
   )
}
export default Search;      