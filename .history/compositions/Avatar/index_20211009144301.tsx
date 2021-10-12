import { AvatarImage, AvatarFallback, Avatar as AvatarPrimitive } from '../../primitives/Avatar'
import { Flex } from '../Flex'
import { AvatarProps } from './interfaces'


export const AvatarGroup = ({ 
    avatars 
}: { 
    avatars: AvatarProps[];
}) =>  (
    <Flex css={{ gap: 20 }}>
        {avatars.map((avatar) => (
            <LoneAvatar {...avatar} /> 
        ))}
    </Flex>
); 

