import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");

  return (
    <Flex marginBottom="110px">
      <Flex
        position="fixed"
        justify="flex-end"
        align="center"
        bg="brown"
        width="100%"
        margin="auto"
      >
        <Flex gap="20px" display={["none", "none", "flex", "flex"]}>
          <Link to="/">
            <Button 
            color="white"
            backgroundColor="brown"
            _hover={{
              outline: "#FA5D00",
              bgColor: "teal",
            }}
            _focus={{
              outline: "#FA5D00",
              bgColor: "teal",
            }} fontSize="xl" fontWeight="bold" as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link to="/about">
            <Button fontSize="xl" 
            color="white"
            backgroundColor="brown"
            _hover={{
              outline: "#FA5D00",
              bgColor: "teal",
            }}
            _focus={{
              outline: "#FA5D00",
              bgColor: "teal",
            }} fontWeight="bold" as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link to="/contact">
            <Button  color="white"
          backgroundColor="brown"
          _hover={{
            outline: "#FA5D00",
            bgColor: "teal",
          }}
          _focus={{
            outline: "#FA5D00",
            bgColor: "teal",
          }}
             fontSize="xl" fontWeight="bold" as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
          <Link to="/signup">
            <Button fontSize="xl" 
            color="white"
            backgroundColor="brown"
            _hover={{
              outline: "#FA5D00",
              bgColor: "teal",
            }}
            _focus={{
              outline: "#FA5D00",
              bgColor: "teal",
            }} fontWeight="bold" as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              SignUp
            </Button>
          </Link>
          <Link to="/signin">
            <Button fontSize="xl" 
            color="white"
            backgroundColor="brown"
            _hover={{
              outline: "#FA5D00",
              bgColor: "teal",
            }}
            _focus={{
              outline: "#FA5D00",
              bgColor: "teal",
            }} fontWeight="bold" as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              SignIn
            </Button>
          </Link>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="sm"
          mr={2}
          mt={4}
          mb={4}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="80vw"
        display={display}
        bgColor="gray"
        color="white"
        zIndex={20}
        h="84vh"
        pos="fixed"
        top="10px"
        right="0"
        overflowY="auto"
        flexDir="column"
        borderRadius={5}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link to="/about">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link to="/contact">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
          <Link to="/signup">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              SignUp
            </Button>
          </Link>
          <Link to="/signin">
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              SignIn
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
