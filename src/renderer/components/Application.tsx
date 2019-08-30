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
import store from '../store';
import { clientLogin } from '../routines';
import { connect } from 'react-redux';

const queryString = require('query-string');

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

import fetch from 'electron-fetch'

// @ts-ignore
const Application = ({ clientLogin }) => {
  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}
`);

  const action = (type: any) => store.dispatch({ type });

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

      <Button
        icon="add"
        onClick={() => {
          const requestApi = {
            method: 'POST',
            protocol: 'https:',
            hostname: 'ru.wikipedia.org',
            path: '/w/api.php',
          };

          let body = ''

          const { remote } = require('electron');
          const request = remote.net.request(requestApi);


          request.on('response', response => {
            console.log(`STATUS: ${response.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
            response.on('end', () => {
              console.log('No more data in response.');
              console.log({ body })
            });
            response.on('data', chunk => {
              console.log(`BODY: ${chunk}`);
              body += chunk.toString();
            });
          });
          request.write(queryString.stringify({ action: 'clientlogin', format: 'json' }));
          request.end();

        }}
      />
      <Button
        icon="remove"
        onClick={() => {
          // fetch('http://httpbin.org/post', { method: 'POST', body: 'format=json' })
          //   .then(res => res.json())
          //   .then(json => console.log(json))
          //clientLogin();
        }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  clientLogin
};

export default hot(
  connect(
    null,
    mapDispatchToProps
  )(Application)
);
