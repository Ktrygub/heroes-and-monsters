import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Button,
  Icon,
  Segment,
  Divider,
  Message,
  Grid,
  Image,
  Progress
} from 'semantic-ui-react'
import uuidv4 from 'uuid/v4'

import archerIcon from '../../images/heroClasses/archer.png'
import gladiatorIcon from '../../images/heroClasses/gladiator.png'
import mageIcon from '../../images/heroClasses/mage.png'
import necromancerIcon from '../../images/heroClasses/necromancer.png'
import sorcererIcon from '../../images/heroClasses/sorcerer.png'
import warriorIcon from '../../images/heroClasses/warrior.png'
import undefIcon from '../../images/heroClasses/undef.png'

import batIcon from '../../images/monsterClasses/bat.png'
import dragonIcon from '../../images/monsterClasses/dragon.png'
import ghostIcon from '../../images/monsterClasses/ghost.png'
import hydraIcon from '../../images/monsterClasses/hydra.png'
import impIcon from '../../images/monsterClasses/imp.png'
import scorpionIcon from '../../images/monsterClasses/scorpion.png'
import skeletonKingIcon from '../../images/monsterClasses/skeletonKing.png'
import snakeIcon from '../../images/monsterClasses/snake.png'
import spiderIcon from '../../images/monsterClasses/spider.png'
import zombieIcon from '../../images/monsterClasses/zombie.png'

import CreateHeroForm from '../forms/CreateHeroForm'
import AddMonsterForm from '../forms/AddMonsterForm'
import {
  startGame,
  createHero,
  createMonster
} from '../../redux/actions/actions'

const heroIcons = {
  Archer: archerIcon,
  Gladiator: gladiatorIcon,
  Mage: mageIcon,
  Necromancer: necromancerIcon,
  Sorcerer: sorcererIcon,
  Warrior: warriorIcon,
  undef: undefIcon
}

const monsterIcons = {
  Bat: batIcon,
  Dragon: dragonIcon,
  Ghost: ghostIcon,
  Hydra: hydraIcon,
  Imp: impIcon,
  Scorpion: scorpionIcon,
  SkeletonKing: skeletonKingIcon,
  Snake: snakeIcon,
  Spider: spiderIcon,
  Zombie: zombieIcon
}

class InitPage extends React.Component {
  onClick = () => {
    this.props.startGame()
    this.props.history.push('/game')
  }

  submitHero = hero => {
    const { heroClasses } = this.props.database
    const currClass = hero.heroClass
    if (Object.prototype.hasOwnProperty.call(heroClasses, currClass)) {
      Object.assign(hero, heroClasses[currClass])
    }

    this.props.createHero(hero)
  }

  submitMonster = monster => {
    const { monsterClasses } = this.props.database
    const currClass = monster.monsterClass
    if (Object.prototype.hasOwnProperty.call(monsterClasses, currClass)) {
      Object.assign(monster, monsterClasses[currClass])
    }

    this.props.createMonster(monster)
  }

  render() {
    const { hero, monsters } = this.props
    const startGameDisable = !hero.heroClass || monsters.length < 2
    return (
      <div style={{ marginTop: '7em', marginLeft: '1em', marginRight: '1em' }}>
        <Grid columns="equal" divided>
          <Grid.Row>
            <Grid.Column center="true" aligned="true">
              <Segment>
                {hero.heroClass ? (
                  <div>
                    <Image
                      size="tiny"
                      src={heroIcons[hero.heroClass]}
                      style={{ width: '100%' }}
                    />
                  </div>
                ) : (
                  <Segment
                    disabled
                    inverted
                    textAlign="center"
                    style={{ height: '366px' }}
                  >
                    <h1>Create your hero</h1>
                    <Image
                      size="tiny"
                      src={heroIcons.undef}
                      style={{ width: '80%', display: 'inline' }}
                    />
                  </Segment>
                )}
              </Segment>

              {hero.name && (
                <div>
                  <Segment textAlign="center">
                    <h3 style={{ letterSpacing: '3px' }}>
                      {hero.gender === 'male' ? 'Sir ' : 'Lady '}
                      <h1
                        style={{
                          display: 'inline',
                          textDecoration: 'underline'
                        }}
                      >
                        {hero.name}
                      </h1>, the {hero.heroClass}
                    </h3>
                  </Segment>

                  <Segment inverted>
                    Life:
                    <Progress
                      value={hero.life}
                      total="44"
                      inverted
                      size="medium"
                      active
                      progress="ratio"
                    />
                    Damage:
                    <Progress
                      value={hero.damage}
                      total="10"
                      inverted
                      size="medium"
                      active
                      progress="ratio"
                    />
                  </Segment>
                </div>
              )}
            </Grid.Column>

            <Grid.Column width={8}>
              <Segment textAlign="center" padded="very">
                <h1>Game Settings</h1>
              </Segment>

              <CreateHeroForm
                disabled={!!hero.heroClass}
                submit={this.submitHero}
              />

              <Divider />

              <AddMonsterForm
                disabled={monsters.length > 5}
                submit={this.submitMonster}
              />

              <Segment basic textAlign="center" padded="very">
                {startGameDisable && (
                  <Message error>
                    <Message.Header>
                      <p>
                        You need to create Hero and add at least two monster.
                      </p>
                      <p>(Max number of monsters = 6 for testing purposes)</p>
                    </Message.Header>
                  </Message>
                )}
                <Button
                  disabled={startGameDisable}
                  secondary
                  size="massive"
                  icon
                  labelPosition="right"
                  onClick={this.onClick}
                >
                  Start Game
                  <Icon name="right arrow" />
                </Button>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              {!!monsters.length &&
                monsters.map(monster => (
                  <Segment
                    key={uuidv4()}
                    secondary
                    style={{ margin: 0, padding: 0 }}
                  >
                    <Image
                      size="tiny"
                      src={monsterIcons[monster.monsterClass]}
                      style={{
                        width: '27%',
                        margin: '0.2em 0',
                        display: 'inline'
                      }}
                    />
                    <h2
                      style={{
                        padding: '2em 1em',
                        verticalAlign: 'top',
                        display: 'inline',
                        letterSpacing: '3px',
                        textDecoration: 'underline'
                      }}
                    >
                      {monster.monsterClass}
                    </h2>
                  </Segment>
                ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
InitPage.propTypes = {
  hero: PropTypes.shape({}).isRequired,
  monsters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  database: PropTypes.shape({
    heroClasses: PropTypes.shape({}).isRequired,
    monsterClasses: PropTypes.shape({}).isRequired
  }).isRequired,
  startGame: PropTypes.func.isRequired,
  createHero: PropTypes.func.isRequired,
  createMonster: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
}

const mapStateToProps = state => ({
  hero: state.game.hero,
  monsters: state.game.monsters,
  database: state.database
})

export default connect(mapStateToProps, {
  createHero,
  createMonster,
  startGame
})(InitPage)
