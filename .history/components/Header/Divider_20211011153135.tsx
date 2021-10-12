import { Separator } from '../../compositions/Separator'

type OrientationType = 'horizontal' | 'vertical'

{ orientation: OrientationType }

export const MenuBarDivider = ({ orientation = 'vertical' }: MenuBarDividerProps) => (
    <Separator orientation={orientation} />
);
