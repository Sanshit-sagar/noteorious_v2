import { Swatch } from '../../components/Swatch'
import { DarkMode } from '../../components/DarkMode'

import { Text } from '../../primitives/Text'
import { 
    Head, 
    HeadGroupL, 
    HeadGroupR, 
    HeadDivider 
} from '../../primitives/AppBar'


export const Header = () => (
    <Head>
        <HeadGroupL>
            <Text> yoyo </Text>
        </HeadGroupL> 

        <HeadGroupR>
           
            <Swatch />
            <DarkMode /> 
            <HeadDivider />
            <UserProfile /> 
        </HeadGroupR> 
    </Head>  
);
