import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

// import InlineError from '../messages/InlineError'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
]

const classOptions = [
  { key: 'Warrior', text: 'Warrior', value: 'Warrior' },
  { key: 'Archer', text: 'Archer', value: 'Archer' },
  { key: 'Mage', text: 'Mage', value: 'Mage' },
  { key: 'Gladiator', text: 'Gladiator', value: 'Gladiator' },
  { key: 'Sorcerer', text: 'Sorcerer', value: 'Sorcerer' },
  { key: 'Necromancer', text: 'Necromancer', value: 'Necromancer' }
]

class CreateHeroForm extends React.Component {
  state = { data: { name: '', heroClass: '', gender: '' }, errors: {} }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  onSelectChange = (e, result) => {
    this.setState({
      data: { ...this.state.data, [result.name]: result.value }
    })
  }

  onSubmit = () => {
    const errors = this.validate(this.state.data)
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
      this.setState({ data: { name: '', heroClass: '', gender: '' } })
    }
    this.setState({ errors })
  }

  validate = data => {
    const errors = {}
    if (!data.name) errors.name = `Can't be blank`
    if (!data.heroClass) errors.heroClass = `Choose class`
    if (!data.gender) errors.gender = `Choose gender`
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
                icon="chevron left"
                labelPosition="left"
                fluid
                content="Create Hero"
                disabled={this.props.disabled}
              />

              <Form.Input
                error={!!errors.name}
                fluid
                placeholder={errors.name || 'Hero name'}
                name="name"
                id="name"
                value={data.name}
                onChange={this.onChange}
                disabled={this.props.disabled}
              />

              <Form.Select
                error={!!errors.gender}
                fluid
                name="gender"
                id="gender"
                options={genderOptions}
                placeholder={errors.gender || 'Gender'}
                value={data.gender}
                onChange={this.onSelectChange}
                disabled={this.props.disabled}
              />

              <Form.Select
                error={!!errors.heroClass}
                fluid
                name="heroClass"
                id="heroClass"
                options={classOptions}
                placeholder={errors.heroClass || 'Hero class'}
                value={data.heroClass}
                onChange={this.onSelectChange}
                disabled={this.props.disabled}
              />
            </Form.Group>
          </Form>
        </Segment>
      </div>
    )
  }
}

CreateHeroForm.propTypes = {
  submit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default CreateHeroForm
