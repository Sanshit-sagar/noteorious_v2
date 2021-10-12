import {  Avatar as AvatarPrimitive, AvatarImage, AvatarFallback, } from '../../primitives/Avatar'
import { Flex } from '../Flex'
import { AvatarProps } from './interfaces'


export const AvatarGroup = ({ 
    avatars 
}: { 
    avatars: AvatarProps[];
}) =>  (
    <Flex css={{ gap: 20 }}>
        {avatars.map((avatar) => (
            <Avatar {...avatar} />
        ))}
    </Flex>
); 


export const Avatar = ({ id, image, name, delayMs, fallback }: AvatarProps) => (
    <AvatarPrimitive key={`avatar-id-${id}`}>
        <AvatarImage 
            src={image} 
            alt={name} 
        />
        <AvatarFallback delayMs={delayMs}> 
            {fallback} 
        </AvatarFallback>
    </AvatarPrimitive>
)