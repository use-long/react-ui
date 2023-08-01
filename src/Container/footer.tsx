import React, { FC, memo, useMemo, createContext } from 'react';
import './Layout.module.less';
import { LayoutProps, NativeLayoutProps, LayoutStyle } from './interface';

// export const MenuContext = createContext<IMenuContext>({index: '0'})
const Footer: FC<LayoutProps & NativeLayoutProps> = memo((props) => {
  const { children, width, height } = props;
  const FooterSize = useMemo(() => {
    var size: LayoutStyle = {
      width: '100%',
      height: '100px',
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
    <div className="footer" style={FooterSize as any}>
      {children}
    </div>
  );
});
Footer.displayName = 'Footer';
export default Footer;
