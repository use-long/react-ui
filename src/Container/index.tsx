import React, { FC, memo, useMemo, createContext } from 'react';
import './Layout.module.less';
import { LayoutProps, NativeLayoutProps, LayoutStyle } from './interface';

// export const MenuContext = createContext<IMenuContext>({index: '0'})
const Container: FC<LayoutProps & NativeLayoutProps> = memo((props) => {
  const { children, width, height } = props;

  console.log(children);
  const ContainerSize = useMemo(() => {
    var size: LayoutStyle = {
      width: '100%',
      height: '100%',
    };
    return size;
  }, [width, height]);

  return (
    <div style={ContainerSize as any} className="layout">
      {children}
    </div>
  );
});
Container.displayName = 'Layout';
export default Container;
