

interface RootProps {
    asChild: boolean;
}

interface ImageProps {
    loading: boolean;
    onLoadingStatusChange: (status: StatusType) => void; 
}