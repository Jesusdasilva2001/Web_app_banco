import { Box, Center, Input } from "@chakra-ui/react";
import { useState } from "react";
import { login } from '../services/login';
import DButton from "./DButton";



export const Card = () => {
    const [ email, setEmail ] = useState<string>('')

    return (
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <Input placeholder="password" />
            <Center>
                <DButton
                    onClick={() => login(email)}
                />
            </Center>
        </Box>
    );
};