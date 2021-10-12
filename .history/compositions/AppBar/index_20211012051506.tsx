import { 
    Head, 
    HeadGroupL, 
    HeadGroupR, 
    HeadDivider 
} from '../../primitives/AppBar'

export const Header = ({ leftSlot, rightSlot }: { 
    leftSlot: React.ReactNode; 
    rightSlot: React.ReactNode; 
}) => (
    <Head>
        <HeadGroupL>
            {leftSlot}
            <HeadDivider /> 
        </HeadGroupL> 

        <HeadGroupR>
            <HeadDivider />
            {rightSlot}
        </HeadGroupR> 
    </Head>  
);
