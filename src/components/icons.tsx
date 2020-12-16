import React, {ReactElement} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  IconDefinition,
  faPlus,
  faEllipsisV,
  faTimes,
  faPen,
  faTrash,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';

interface BaseIconProps {
  size?: number;

  color?: string;
}

interface IconProps extends BaseIconProps {
  icon: IconDefinition;
}

const DEFAULT_ICON_SIZE = 16;

const DEFAULT_ICON_COLOR = 'black';

export function Icon(props: IconProps): ReactElement {
  const {icon, size, color} = props;
  return (
    <FontAwesomeIcon
      icon={icon}
      size={size || DEFAULT_ICON_SIZE}
      color={color || DEFAULT_ICON_COLOR}
    />
  );
}

export function BarsIcon(props: BaseIconProps): ReactElement {
  return <Icon {...props} icon={faBars} />;
}

export function PlusIcon(props: BaseIconProps): ReactElement {
  return <Icon {...props} icon={faPlus} />;
}

export function EllipsisVIcon(props: BaseIconProps): ReactElement {
  return <Icon {...props} icon={faEllipsisV} />;
}

export function TimesIcon(props: BaseIconProps): ReactElement {
  return <Icon {...props} icon={faTimes} />;
}

export function PenIcon(props: BaseIconProps): ReactElement {
  return <Icon {...props} icon={faPen} />;
}

export function TrashIcon(props: BaseIconProps): ReactElement {
  return <Icon {...props} icon={faTrash} />;
}

export function UndoIcon(props: BaseIconProps): ReactElement {
  return <Icon {...props} icon={faUndo} />;
}
