import {
    
}


export const Header = () => (
    <Head>
        <HeadGroupL>
            <Routez /> 
            <HeadDivider />
            <GlobalSearch />
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
