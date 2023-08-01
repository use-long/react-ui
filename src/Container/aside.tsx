import React, { FC, memo, useMemo, createContext } from 'react';
import './Layout.module.less';
import { LayoutProps, NativeLayoutProps, LayoutStyle } from './interface';

// export const MenuContext = createContext<IMenuContext>({index: '0'})
const Aside: FC<LayoutProps & NativeLayoutProps> = memo((props) => {
  const { children, width, height } = props;

  const asideSize = useMemo(() => {
    var size: LayoutStyle = {
      width: '200px',
      height: '100%',
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
    <div style={asideSize as any} className="aside">
      {children}
    </div>
  );
});
Aside.displayName = 'Aside';
export default Aside;
