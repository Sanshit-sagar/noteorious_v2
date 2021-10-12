import { Separator } from '../../compositions/Separator'

type OrientationType = 'horizontal' | 'vertical'

export const MenuBarDivider = ({ orientation = 'vertical' }: { orientation: OrientationType }) => (
    <Separator orientation={orientation} />
);
