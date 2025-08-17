export interface TagProps {
  label: string;
  icon?: JSX.Element;
  className?: string;
  fnOnClick?: () => void;
  fnOnClose?: () => void;
}
