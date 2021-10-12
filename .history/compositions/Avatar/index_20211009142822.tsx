import { AvatarImage, AvatarFallback, Avatar as AvatarPrimitive } from '../../primitives/Avatar'
import { Flex } from '../Flex'

let items = [
    { 
        id: 'calmtweet'
        name: 'Colm Tuite',
        image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        delay: 600,
        fallback: 'CT'
    }, 
    {
        id: 'pedrodudearte'
        name: 'Pedro Duarte',
        image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
        delay: 600,
        fallback: 'JD',
    },
    {
        id: 'pedrotresarte',
        name: '',
        image: '',
        delay: 600,
        fallback: 'PD',
    }
]

export const Avatar = () =>  (
    <Flex css={{ gap: 20 }}>
        {items.map((item, index: number) => )}
        <AvatarPrimitive>
            <AvatarImage
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
            />
            <AvatarFallback delayMs={600}>
                CT
            </AvatarFallback>
        </AvatarPrimitive>

        <AvatarPrimitive>
            <AvatarImage
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                alt="Pedro Duarte"
            />
            <AvatarFallback delayMs={600}>JD</AvatarFallback>
        </AvatarPrimitive>

        <AvatarPrimitive>
            <AvatarFallback>PD</AvatarFallback>
        </AvatarPrimitive>
    </Flex>
); 

