import { AvatarImage, AvatarFallback, Avatar as AvatarPrimitive } from '../../primitives/Avatar'
import { Flex } from '../Flex'
import { AvatarProps } from './interfaces'

let items = [
    { 
        id: 'calmtweet',
        name: 'Colm Tuite',
        image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        delayMs: 600,
        fallback: 'CT'
    }, 
    {
        id: 'pedrodudearte',
        name: 'Pedro Duarte',
        image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
        delayMs: 600,
        fallback: 'JD',
    },
    {
        id: 'pedrotresarte',
        name: '',
        image: '',
        delayMs: 600,
        fallback: 'PD',
    }
]

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
    avatars: AvatarProps[] 
}) =>  (
    <Flex css={{ gap: 20 }}>
        {items.map((item) => (
            <LoneAvatar {...item} /> 
        ))}
    </Flex>
); 

