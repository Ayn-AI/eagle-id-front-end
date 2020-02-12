import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { isMobile } from "react-device-detect";

const styles = theme => ({
    overlay: {
        position: 'absolute',
        display: 'block',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto"
    },
});

class Overlay extends Component {

    constructor(props) {
        super(props)

        this.state = {
            overlay: "document"
        };
    }

    render() {
        return (
        <div className={classes.overlay}>
        { (this.state.overlay === "document")?
        <img src={ isMobile? "svg/overlay_document_mobile.svg" : "svg/overlay_document.svg"} width="100%" alt="document overlay" /> : <></>
        }
        { (this.state.overlay === "selfie")?
         <img src={ isMobile? "svg/overlay_selfie_mobile.svg" : "svg/overlay_selfie.svg"} width="100%" alt="selfie overlay" /> : <></>
        }
        </div>
        );
      }
}

Overlay.propTypes = {
};

export default withStyles(styles)(Overlay);
