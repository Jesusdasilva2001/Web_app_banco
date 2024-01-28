import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { AppContext } from './AppContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        setIsLoggedIn(false)
        navigate('/')
    }

    return(
        <Flex backgroundColor='orange' padding='5px'>
            <Box>
                <Center>
                    <Text fontSize='3x1'>RT Bank</Text>
                </Center>
            </Box>
            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button
                            onClick={() => logout()}
                        >
                            Sair
                        </Button>
                    </>
                )
            }
        </Flex>
        
    )
}