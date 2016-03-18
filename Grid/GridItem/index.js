import React, {PropTypes} from 'react';
import mergeClassNames from 'classnames';
import style from './style.css';

const GridItem = props => {
    const {className, children, width} = props;
    const classNames = mergeClassNames({
        [style.grid__item]: true,
        [className]: className && className.length
    });
    const inlineStyle = {
        width
    };

    return (
        <div className={classNames} style={inlineStyle}>
            {children}
        </div>
    );
};
GridItem.propTypes = {
    // Since we don't want to get the grids get out of control,
    // we specify a set of allowed widths here.
    width: PropTypes.oneOf(['33%', '50%']).isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default GridItem;
