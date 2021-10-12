import { AvatarImage, AvatarFallback, Avatar as AvatarPrimitive } from '../../primitives/Avatar'
import { Flex } from '../Flex'

const RoundedAvatar = () =>  (
    <Flex css={{ gap: 20 }}>
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

        <Avatar>
            <AvatarFallback>PD</AvatarFallback>
        </Avatar>
    </Flex>
)

export 