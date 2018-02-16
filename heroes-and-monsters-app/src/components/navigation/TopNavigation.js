import React from 'react'
import { Menu, Segment, Icon, Image, Grid } from 'semantic-ui-react'

import logo from '../../images/logo.png'

class TopNavigation extends React.Component {
  state = { activeItem: 'title' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment>
        <Menu fixed="top" inverted>
          <Menu.Item style={{ margin: 0, padding: 0 }}>
            <Image size="tiny" src={logo} />
          </Menu.Item>
          <Menu
            fluid
            text
            inverted
            style={{ fontSize: '200%', margin: 0, padding: 0 }}
          >
            <Grid style={{ width: '100%' }}>
              <Grid.Row centered>
                <Menu.Item name="title">Heroes & Monsters</Menu.Item>
              </Grid.Row>
            </Grid>
          </Menu>
          <Menu.Item
            style={{ padding: ' 0px 40px' }}
            name="home"
            position="right"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item
            style={{ padding: ' 0px 40px' }}
            name="gamepad"
            active={activeItem === 'gamepad'}
            onClick={this.handleItemClick}
          >
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item
            style={{ padding: ' 0px 40px' }}
            name="camera"
            active={activeItem === 'camera'}
            onClick={this.handleItemClick}
          >
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}

export default TopNavigation
