import { Swatch } from '../../components/Swatch'
import { DarkMode } from '../../components/DarkMode'
import { 
    Head, 
    HeadGroupL, 
    HeadGroupR, 
    HeadDivider 
} from '../../primitives/AppBar'
import { Text } from '../../primitives/Text'

export const Header = () => (
    <Head>
        <HeadGroupL>

        </HeadGroupL> 

        <HeadGroupR>
            {rightSlot}
        </HeadGroupR> 
    </Head>  
);
