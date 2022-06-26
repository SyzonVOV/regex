import { Heading, VStack, Text, Flex, FormControl, FormLabel, Input, Box, Button } from '@chakra-ui/react'

function InputRegEx() {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="green.500"
      flex='3'
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Enter your RegEx:</Heading>
        <Text>Here you can enter you regex to implement them on input text</Text>
      </VStack>
      <Flex w="full" justify="space-between" alignItems='center' gap='2'>
        <Box>
          <FormControl>
            <FormLabel>RegEx</FormLabel>
            <Input placeholder="/regex/" />
          </FormControl>
          <FormControl>
            <FormLabel>Replace with</FormLabel>
            <Input placeholder="replacer" />
          </FormControl>
        </Box>
        <Button colorScheme='teal'>Imply</Button>
      </Flex>
      <Button size="lg" w="full" colorScheme='teal'>Imply All</Button>
    </VStack>
  )
}

export default InputRegEx