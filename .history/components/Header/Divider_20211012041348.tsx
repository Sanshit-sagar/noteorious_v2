import { Separator } from '../../primitives/Separator'

type OrientationType = 'horizontal' | 'vertical'

interface MenuBarDividerProps {
    orientation: OrientationType;
}

export const MenuBarDivider = ({ 
    orientation = 'vertical' 
}: MenuBarDividerProps) => (
    <Separator orientation={orientation} />
);
