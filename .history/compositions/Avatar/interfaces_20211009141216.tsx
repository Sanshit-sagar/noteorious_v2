

type StatusType = 'idle' | 'loading' | 'loaded' | 'error'

interface RootProps {
    asChild: boolean;
}

interface ImageProps {
    loading: boolean;
    onLoadingStatusChange: (status: StatusType) => void; 
}



