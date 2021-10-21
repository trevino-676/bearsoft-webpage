import {Container, Box, Heading} from '@chakra-ui/react'

const Page = () => {
	return (
		<Container>
			<Box borderRadius="lg" background="red" p={3} align="center">
				Hello, I&apos;m a full-stack developer from Mexico
			</Box>
			<Box display={{md: 'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Luis Manuel Torres Trevino
					</Heading>
					<p>Sofware Developer (Frontend, Backend, Data)</p>
				</Box>
			</Box>
		</Container>
	)
}

export default Page;
