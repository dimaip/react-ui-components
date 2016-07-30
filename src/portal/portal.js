import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CSSPropertyOperations from 'react/lib/CSSPropertyOperations';
import shallowCompare from 'react/lib/shallowCompare';

export default class Portal extends Component {
    static propTypes = {
        // The target identifier in which the children will be rendered into.
        // If no `target` was specified, the children will be rendered into the <body> element.
        target: PropTypes.string,

        // The children to render in the <Portal />.
        children: PropTypes.any.isRequired,

        // The className of the <Portal />
        className: PropTypes.string,
        theme: PropTypes.object,

        // The boolean over which you can control the rendered state of the <Portal />.
        isOpen: PropTypes.bool
    };

    constructor() {
        super();

        this.state = {
            active: false
        };
        this.portal = null;
        this.node = null;
    }

    componentDidMount() {
        if (this.props.isOpen) {
            this.openPortal();
        }
    }

    componentWillReceiveProps(newProps) {
        // portal's 'is open' state is handled through the prop isOpen
        if (typeof newProps.isOpen !== 'undefined') {
            if (newProps.isOpen) {
                if (this.state.active) {
                    this.renderPortal(newProps);
                } else {
                    this.openPortal(newProps);
                }
            }
            if (!newProps.isOpen && this.state.active) {
                this.closePortal();
            }
        }

        // portal handles its own 'is open' state
        if (typeof newProps.isOpen === 'undefined' && this.state.active) {
            this.renderPortal(newProps);
        }
    }

    componentWillUnmount() {
        this.closePortal();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    renderPortal(props) {
        const portalWrapper = this.getPortalWrapper(props);

        if (!this.node) {
            this.node = document.createElement('div');

            if (props.className) {
                this.node.className = props.className;
            }

            if (props.theme) {
                CSSPropertyOperations.setValueForStyles(this.node, props.theme);
            }

            portalWrapper.appendChild(this.node);
        }

        this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(this, React.cloneElement(props.children, {closePortal: this.closePortal}), this.node);
    }

    render() {
        return null;
    }

    openPortal(props = this.props, event) {
        try {
            event.preventDefault();
            event.stopPropagation();
        } catch (e) {}

        this.setState({active: true});
        this.renderPortal(props);
    }

    closePortal() {
        const portalWrapper = this.getPortalWrapper(this.props);
        const resetPortalState = () => {
            if (this.node) {
                ReactDOM.unmountComponentAtNode(this.node);
                portalWrapper.removeChild(this.node);
            }

            this.portal = null;
            this.node = null;
            this.setState({active: false});
        };

        resetPortalState(this.node);
    }

    getPortalWrapper(props = this.props) {
        const {target} = props;

        return target ? document.querySelector(`[data-__neos__hook="${target}"]`) : document.body;
    }
}
