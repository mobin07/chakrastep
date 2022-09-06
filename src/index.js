// author: Abhishek Kumar Singh - https://abheist.com/

import React from "react";
import ReactDOM from "react-dom";
import HookForm from "./HookForm";
import Stepper from "./Stepper";
import { ChakraProvider, CSSReset, Box, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

const theme = extendTheme({
  components: {
    Steps
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box p={4}>
        <HookForm />
        <Stepper />
      </Box>
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
