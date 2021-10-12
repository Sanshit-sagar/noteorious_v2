import { Separator } from '../../compositions/Separator'

type OrientationType = 'horizontal' | 'vertical'

export const MenuBarDivider = ({ orientation = 'vertical' }: { orientiation: OrientationType }) => (
    <Separator orientation={'vertical'} />
);
