import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const monsterOptions = [
  { key: 'Zombie', text: 'Zombie', value: 'Zombie' },
  { key: 'Spider', text: 'Spider', value: 'Spider' },
  { key: 'Snake', text: 'Snake', value: 'Snake' },
  { key: 'Scorpion', text: 'Scorpion', value: 'Scorpion' },
  { key: 'Imp', text: 'Imp', value: 'Imp' },
  { key: 'Ghost', text: 'Ghost', value: 'Ghost' },
  { key: 'Bat', text: 'Bat', value: 'Bat' },
  { key: 'Hydra', text: 'Hydra', value: 'Hydra' },
  { key: 'Dragon', text: 'Dragon', value: 'Dragon' },
  { key: 'SkeletonKing', text: 'Skeleton King', value: 'SkeletonKing' }
]

const getRandomInt = (frm, to) => {
  const min = Math.ceil(Math.min(frm, to))
  const max = Math.floor(Math.max(frm, to))
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomElement = array => array[getRandomInt(0, array.length - 1)]

class AddMonsterForm extends React.Component {
  state = { data: { monsterClass: '' }, errors: {} }

  onSelectChange = (e, result) => {
    this.setState({
      data: { ...this.state.data, [result.name]: result.value }
    })
  }

  onSubmit = () => {
    const errors = this.validate(this.state.data)
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
      this.setState({ data: { monsterClass: '' } })
    }
    this.setState({ errors })
  }

  validate = data => {
    const errors = {}
    if (!data.monsterClass) errors.monsterClass = `Choose class`
    return errors
  }

  render() {
    const { data, errors } = this.state

    return (
      <div>
        <Segment inverted>
          <Form inverted onSubmit={this.onSubmit}>
            <Form.Group style={{ margin: '1em -.5em 1em' }} widths="equal">
              <Form.Button
                icon="random"
                labelPosition="right"
                fluid
                content="Random monster"
                disabled={this.props.disabled}
                onClick={() => {
                  const randomMonsterClass = getRandomElement(monsterOptions)
                    .key
                  this.onSelectChange(undefined, {
                    name: 'monsterClass',
                    value: randomMonsterClass
                  })
                  /* this.onSubmit() */
                }}
              />

              <p>or</p>

              <Form.Select
                error={!!errors.monsterClass}
                fluid
                name="monsterClass"
                id="monsterClass"
                options={monsterOptions}
                placeholder={errors.monsterClass || 'Choose monster'}
                value={data.monsterClass}
                onChange={this.onSelectChange}
                disabled={this.props.disabled}
              />

              <Form.Button
                icon="chevron right"
                labelPosition="right"
                fluid
                content="Add Monster"
                disabled={this.props.disabled}
              />
            </Form.Group>
          </Form>
        </Segment>
      </div>
    )
  }
}

AddMonsterForm.propTypes = {
  submit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default AddMonsterForm
