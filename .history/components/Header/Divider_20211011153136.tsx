import { Separator } from '../../compositions/Separator'

type OrientationType = 'horizontal' | 'vertical'



export const MenuBarDivider = ({ orientation = 'vertical' }: MenuBarDividerProps) => (
    <Separator orientation={orientation} />
);
