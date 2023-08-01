export interface LayoutProps {
  /**
   * @description 宽度
   */
  width?: Number;
  /**
   * @description 高度
   */
  height?: Number;
  /**
   * @description 高度
   */
  children: React.ReactNode;
}
export interface LayoutStyle {
  width?: String;
  height?: String;
}

export type NativeLayoutProps = Omit<React.HTMLAttributes<HTMLElement>, 'type'>; //原生button接口
