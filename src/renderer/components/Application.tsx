import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { Button, ButtonGroup, Divider, H5, Switch } from '@blueprintjs/core';
import './Application.scss';
// import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// tslint:disable-next-line:no-duplicate-imports
import { FocusStyleManager } from '@blueprintjs/core';
// import { highlight, languages } from 'prismjs/components/prism-core';

const code = `function add(a, b) {
  return a + b;
}
`;

import * as ace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';

FocusStyleManager.onlyShowFocusOnTabs();

// tslint:disable-next-line:no-duplicate-imports
import { useState } from 'react';

function onChange(newValue: any) {
  console.log('change', newValue);
}

import { ContextMenuTarget, Menu, MenuItem } from '@blueprintjs/core';
import { Header } from './Header';

@ContextMenuTarget
class RightClickMe extends React.Component<{}, {}> {
  public render() {
    // root element must support `onContextMenu`
    return <div>65654656</div>;
  }

  public renderContextMenu() {
    // return a single element, or nothing to use default browser behavior
    return (
      <Menu>
        <MenuItem text="Save" />
        <MenuItem text="Delete" />
      </Menu>
    );
  }

  public onContextMenuClose() {
    // Optional method called once the context menu is closed.
  }
}

const Application = () => {
  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}
`);

  return (
    <div>
      {/*<ButtonGroup minimal={true}>*/}
      {/*    <Button text="File" />*/}
      {/*    <Button text="Edit" />*/}
      {/*    <Divider />*/}
      {/*    <Button text="Create" />*/}
      {/*    <Button text="Delete" />*/}
      {/*    <Divider />*/}
      {/*    <Button icon="add" />*/}
      {/*    <Button icon="remove" />*/}
      {/*</ButtonGroup>*/}
      {/*<RightClickMe />*/}
      <Header />
      <AceEditor
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        mode="javascript"
        theme="tomorrow"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default hot(Application);
