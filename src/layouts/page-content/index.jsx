import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';
import Footer from '../footer';

/**
 * 页面内容 容器
 * 1. 添加统一padding、background等样式
 * 1. 自动判断是否含有FixBottom，并为之腾出空间
 * 1. 是否含有公共footer
 */
export default class index extends Component {
    static propTypes = {
        footer: PropTypes.bool,
    };

    static defaultProps = {
        footer: true,
    };

    render() {
        const {footer, children, ...others} = this.props;

        let hasFixBottom = false;
        React.Children.map(children, item => {
            if (item && item.type && item.type.__FIX_BOTTOM) hasFixBottom = true;
        });

        const style = {...others.style};
        if (hasFixBottom && style.marginBottom === undefined) {
            style.marginBottom = '66px';
        }
        others.style = style;

        return (
            <div {...others}>
                <div styleName="page-content">{children}</div>
                {footer ? <div styleName="footer"><Footer/></div> : null}
            </div>
        );
    }
}
