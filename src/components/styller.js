import React from 'react';

const styller = (defaults) => (StylledComponent) => (
  class extends React.Component {
    constructor(props) {
      super(props);

      // build default style from props
      this.styles = defaults(this.props);
    }

    render() {
      return (
        <StylledComponent style={this.styles[StylledComponent.name]} {...this.props} />
      );
    }
  }
);

export default styller;
