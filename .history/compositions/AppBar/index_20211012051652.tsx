import { 
    Head, 
    HeadGroupL, 
    HeadGroupR, 
    HeadDivider 
} from '../../primitives/AppBar'

export const AppBar = ({ leftSlot, rightSlot }: { 
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
