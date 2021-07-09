import React, { useEffect, useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';


import Home from './pages/Home';
import EnterPage from './pages/EnterPage';
import CreateProdus from './pages/CreateProdus';
import { getProdusAction,getProdusActionForUser,getProdusActionAll } from './actions/produsActions';
import Produs from './pages/Produs';
import EditProdus from './pages/EditProdus.js';
import MyProdus from './pages/MyProdus.js';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Signup from './pages/Signup';
import ProdusToBuy from './pages/ProdusToBuy';

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    
    if(token == null){
      setIsAuthenticated(false);
    }
    fetch(`https://magazin-sportiv-nodejs.herokuapp.com/api/auth/check-auth`, {
      headers: {
        Authorization: token,
      },
    }).then((res) => {
        switch (res.status) {
          case 200:
            setIsAuthenticated(true);
            break;
          default:
            setIsAuthenticated(false);
            break;
        }
      })
      .catch(console.error);
  }, []);
  
  const loguot = () => {
    localStorage.removeItem("token");
    fetch(`https://magazin-sportiv-nodejs.herokuapp.com/api/auth/logout`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      switch (res.status) {
        case 200:
          setIsAuthenticated(false);
          break;
        default:
          setIsAuthenticated(true);
          break;
      }
    });
}
  const getMyProdus = () => {
    if(isAuthenticated === true){
      dispatch(getProdusActionForUser());
    }
  };
  const getProdus = () => {
    if(isAuthenticated === true){
      dispatch(getProdusAction());
    }
  };
  
  useEffect(() => {
    if(isAuthenticated === true){
      dispatch(getProdusAction());
    }
    if(isAuthenticated === false){
      dispatch(getProdusActionAll());
    }
  }, [dispatch,isAuthenticated]);
  return (
    <div className="App">


<Box bg="#233d4d" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'} >          
          {isAuthenticated ?
            <NavLink   to="/home" >
            {isAuthenticated ?
                <Link  onClick={getProdus} as="h2"  color="white" _hover={{                  
                  color:"#fe7f2d"
                }}><Heading color="white"  _hover={{color:"#fe7f2d"}} as="h2">Magazin Sportiv</Heading></Link>
                :<Heading color="white"  _hover={{color:"#fe7f2d"}} as="h2">Magazin Sportiv</Heading>}
              </NavLink>    
              :
              <NavLink   to="/" >
            {isAuthenticated ?
                <Link  onClick={getProdus} as="h2"  color="white" _hover={{                  
                  color:"#fe7f2d"
                }}><Heading color="white"  _hover={{color:"#fe7f2d"}} as="h2">Magazin Sportiv</Heading></Link>
                :<Heading color="white"  _hover={{color:"#fe7f2d"}} as="h2">Magazin Sportiv</Heading>}
              </NavLink>    }       
          </HStack>
          <Stack
            flex={{  base: 'none', md: 'inline-flex' }}
            justify={'flex-end'}
            direction={'row'}
            spacing={10}
            >
            
          <NavLink  to="/login">
            {isAuthenticated ?null:
            <Link
             display={{ base: 'none', md: 'inline-flex' }}
             color="white"
              fontSize={'16px'}
              fontWeight={400}
              bg={'##202020'}
              p={"10px"} 
              
              >
              Sign In
            </Link>
            }
          </NavLink>
          <NavLink  to="/register">
          {isAuthenticated ? null:
          <Link
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'16px'}
            color={'white'}
            borderRadius={"5%"}
            bg={'#fe7f2d'}
            p={"10px"}
            _hover={{
              bg: '#fcca46',
              borderRadius:"5%",
              color:"black"
            }}>
            Sign Up
          </Link>
        }
          </NavLink>
          {isAuthenticated ? 
          <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&psig=AOvVaw24LQgGkaUpGDWFeHTze2Ta&ust=1622727268347000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi5kaWI-fACFQAAAAAdAAAAABAD'
                  }
                />
              </MenuButton>
              <MenuList>
              <NavLink  to="/myprodus">
                <MenuItem for="mypro">
            {isAuthenticated ?
                <Link id="mypro"  textAlign="center" onClick={getMyProdus} as="h5" w="100%"  color="black" _hover={{                  
                  color:"#fe7f2d"
                }}>Produsele Mele</Link>
                :null}            
              </MenuItem>
              </NavLink>
              <NavLink to="/create-produs">
              <MenuItem for="add" >
              
              {isAuthenticated ?
                <Link id="add" color="black" textAlign="center" as="h5" w="100%" _hover={{                  
                  color:"#fe7f2d"
                }}>Adauga Produs</Link>
                :null}                
              </MenuItem>
              </NavLink>
                <MenuDivider />
                <MenuItem>
                <Button
             display={{ base: 'none', md: 'inline-flex' }}
             color="white"
              fontSize={'16px'}
              fontWeight={400}
              bg={'#fe7f2d'}
              p={"10px"} 
              w={"100%"}
              type={"button"}
              onClick={loguot}
              _hover={{
                bg: '#fcca46',
                color:"black"
              }}
              >
              Logout
            </Button>
                </MenuItem>
              </MenuList>
            </Menu>
            :null}
        </Stack>
        </Flex>

      </Box>


      
        <Flex>
        <Box width="100%" >
          <Switch>            
             <PrivateRoute
            path="/myprodus/:id/edit"
            isAuthenticated={isAuthenticated}
            render={(props) => <EditProdus {...props} />}
          />
           
            <PrivateRoute
            path="/myprodus/:id"
            isAuthenticated={isAuthenticated}
            render={(props) => <Produs {...props} />}
          />
           <PrivateRoute
            path="/produs/:id"
            isAuthenticated={isAuthenticated}
            render={(props) => <ProdusToBuy {...props} />}
          />
          <PrivateRoute
            path="/create-produs"
            isAuthenticated={isAuthenticated}
            render={(props) => <CreateProdus {...props} />}
          />
            
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} setIsAuthenticated={setIsAuthenticated} />
              )}
            />
            <Route
              path="/register"
              render={(props) => (
                <Signup {...props} setIsAuthenticated={setIsAuthenticated} />
              )}
            />
            <PrivateRoute
          path="/myprodus"
          isAuthenticated={isAuthenticated}
          render={(props) => <MyProdus {...props} />}
        />
            <PrivateRoute
              path="/home"      
              isAuthenticated={isAuthenticated}
              render={(props) => <Home {...props} />}
              />
              <Route
              path="/"
              render={(props) => (
                <EnterPage {...props} setIsAuthenticated={setIsAuthenticated} />
              )}
            />
          </Switch>
        </Box>
        </Flex>
    </div>
      
    
  );
}

export default App;
