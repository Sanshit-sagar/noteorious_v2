
import { 
    Head, 
    HeadGroupL, 
    HeadGroupR, 
    HeadDivider 
} from '../../primitives/AppBar'


export const Header = () => (
    <Head>
        <HeadGroupL>
            
        </HeadGroupL> 

        <HeadGroupR>
            <LocaleSelector /> 
            <Swatch />
            <DarkMode /> 
            <HeadDivider />
            <UserProfile /> 
        </HeadGroupR> 
    </Head>  
);
