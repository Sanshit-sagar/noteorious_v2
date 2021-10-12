import { Separator } from '../../compositions/Separator/Separator'

type OrientationType = 'horizontal' | 'vertical'

interface MenuBarDividerProps {
    orientation: OrientationType;
}

export const MenuBarDivider = ({ 
    orientation = 'vertical' 
}: MenuBarDividerProps) => (
    <Separator orientation={orientation} />
);
