import { AvatarImage, AvatarFallback, Avatar as AvatarPrimitive } from '../../primitives/Avatar'
import { Flex } from '../Flex'
import { AvatarProps } from './interfaces'

const LoneAvatar = ({ id, image, name, delayMs, fallback }: AvatarProps) => (
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

export const AvatarGroup = ({ 
    avatars 
}: { 
    avatars: AvatarProps[];
}) =>  (
    <Flex css={{ gap: 20 }}>
        {avatars.map((avatar) => (
            <LoneAvatar {...item} /> 
        ))}
    </Flex>
); 

