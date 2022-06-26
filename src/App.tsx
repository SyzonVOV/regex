import {
  ChakraProvider,
  Container,
  Flex,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from './ColorModeSwitcher'
import InputRegEx from "./components/InputRegEx"
import TextArea from "./components/TextArea"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh">
        <ColorModeSwitcher justifySelf="flex-end" />
        <InputRegEx />
        <TextArea />
      </Flex>
    </Container>
  </ChakraProvider>
)
