import HashLoader from "react-spinners/HashLoader";
import { Box,Center } from "@chakra-ui/react";
function Loading({lod}){

    return(
        <Center>
        <Box mt='80'>
<HashLoader size={60} color={'#36d7b7'} loading={lod} />
</Box>
</Center>
    )
}

export default Loading