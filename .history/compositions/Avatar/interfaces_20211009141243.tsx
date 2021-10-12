

export type StatusType = 'idle' | 'loading' | 'loaded' | 'error'

export interface RootProps {
    asChild: boolean;
}

export interface ImageProps {
    loading: boolean;
    onLoadingStatusChange: (status: StatusType) => void; 
}

