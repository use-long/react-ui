import React, { FC, memo, useMemo, createContext } from 'react';
import './Layout.module.less';
import { LayoutProps, NativeLayoutProps, LayoutStyle } from './interface';

// export const MenuContext = createContext<IMenuContext>({index: '0'})
const ContainerMain: FC<LayoutProps & NativeLayoutProps> = memo((props) => {
  const { children, width, height } = props;

  console.log(children);
  const ContainerMainSize = useMemo(() => {
    var size: LayoutStyle = {
      width: '100%',
      height: '100%',
    };
    return size;
  }, [width, height]);

  return (
    <div style={ContainerMainSize as any} className="layoutMain">
      {children}
    </div>
  );
});
ContainerMain.displayName = 'ContainerMain';
export default ContainerMain;
