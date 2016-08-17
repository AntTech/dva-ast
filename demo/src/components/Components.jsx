import React, { PropTypes } from 'react';
import Connect from './Connect';

class Components extends React.Component {
  render() {
    const { comps = [] } = this.props;
    return (
      <div>
        <ul>
          {
            comps.map(comp =>
              <li key={comp.filePath}>
                {comp.componentName}
                <Connect connects={comp.connects} />
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Components;