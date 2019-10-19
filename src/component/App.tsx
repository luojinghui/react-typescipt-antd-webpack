import * as React from "react";
import { DatePicker, Button } from 'antd'

interface AppProps { }

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <div>
          <DatePicker />
          <Button type="primary">Button</Button>
        </div>
        <Button>1231231</Button>
        <Button type="primary">1231231</Button>
      </div>
    );
  }
}
