
export type UserCredentials = { 
    name: string; 
    color?: string | undefined; 
} | undefined

export type User = {
    [key: string]: any;
    clientId: number;
}

export type UserStatus = 
                | 'offline' 
                | 'online' 
                | 'connecting' 
                | 'connected'
