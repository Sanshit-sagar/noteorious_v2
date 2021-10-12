

export type StatusType = 'idle' | 'loading' | 'loaded' | 'error'

export interface RootProps {
    asChild: boolean;
}

export interface ImageProps {
    asChild: boolean;
    onLoadingStatusChange: (status: StatusType) => void; 
}

export interface FallbackProps {
    asChild: boolean;
    delayMs: number; 
}

export interface AvatarProps exteends RootProps, ImageProps, FallbackProps {
    id: string; 
}