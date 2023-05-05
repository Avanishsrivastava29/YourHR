import { AppBar, Toolbar, Typography, styled, Box, Button } from "@mui/material"; //Importing tags from mui/material

import Search from "./Search"; //search bar is imported from search.jsx
import CustomButtons from "./CustomButtons"; //custom buttons are imported from Custom.jsx

//adding style to the appbar
const StyledHeader = styled(AppBar)`
  background: rgb(159, 224, 225);
`;

const Component = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 120px;
  }
`;

//components
const Header = () => {
  //image link
  const logoURL = "";

  return (
    <StyledHeader>
      <Toolbar>
        <Component>
          <h1>YourHR </h1>
        </Component>
          <CustomButtons />
        <Search />
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
