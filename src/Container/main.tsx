import React, { FC, memo, useMemo, createContext } from 'react';
import './Layout.module.less';
import { LayoutProps, NativeLayoutProps, LayoutStyle } from './interface';

// export const MenuContext = createContext<IMenuContext>({index: '0'})
const Main: FC<LayoutProps & NativeLayoutProps> = memo((props) => {
  const { children, width, height } = props;
  const mainSize = useMemo(() => {
    var size: LayoutStyle = {
      width: '100%',
      height: '400px',
    };
    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);

  return (
    <div className="main" style={mainSize as any}>
      {children}
    </div>
  );
});
Main.displayName = 'Main';
export default Main;
