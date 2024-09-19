import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  CharacterCounterContainer,
  CharacterCounterResponsiveContainer,
  CountedOutputContainer,
  CharacterCounterUserInputContainer,
  CharacterCounterUserInputHeading,
  CountedOutputContainerHeading,
  InputElementAndButtonContainer,
  InputElement,
  AddButton,
  WordsListContainer,
  WordsListItem,
  EmptyInputViewImage,
  CountedHeadingContainer,
  UserInputText,
  Count,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    inputText: '',
    wordsLengthList: [
      //   {inputText: 'Static', count: 5, id: 1},
      //   {inputText: 'Dynamic', count: 7, id: 2},
    ],
  }

  renderNoUserInputs = () => (
    <EmptyInputViewImage
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
    />
  )

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickEnter = event => {
    if (event.key === 'Enter') {
      this.addWordsToList()
    }
  }

  renderInputElement = () => {
    const {inputText} = this.state
    return (
      <InputElement
        type="text"
        placeholder="Enter the Characters here"
        onChange={this.onChangeInputText}
        value={inputText}
        onKeyDown={this.onClickEnter}
      />
    )
  }

  displayWordsWithLength = () => {
    const {wordsLengthList} = this.state

    return (
      <WordsListContainer>
        {wordsLengthList.map(eachWord => (
          <WordsListItem key={eachWord.id}>
            <UserInputText>
              {eachWord.inputText} : <Count>{eachWord.count}</Count>
            </UserInputText>
          </WordsListItem>
        ))}
      </WordsListContainer>
    )
  }

  addWordsToList = event => {
    event.preventDefault()
    const {inputText} = this.state
    const wordLength = inputText.length
    const wordObject = {
      inputText,
      count: wordLength,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      wordsLengthList: [...prevState.wordsLengthList, wordObject],
      inputText: '',
    }))
  }

  renderUserInputContainer = () => (
    <CharacterCounterUserInputContainer>
      <CharacterCounterUserInputHeading>
        Character Counter
      </CharacterCounterUserInputHeading>
      <InputElementAndButtonContainer onSubmit={this.addWordsToList}>
        {this.renderInputElement()}
        <AddButton type="submit">Add</AddButton>
      </InputElementAndButtonContainer>
    </CharacterCounterUserInputContainer>
  )

  renderCountedOutputContainer = () => {
    const {wordsLengthList} = this.state
    const noInputView = wordsLengthList.length === 0
    return (
      <CountedOutputContainer>
        <CountedHeadingContainer>
          <CountedOutputContainerHeading>
            Count the characters like a Boss...
          </CountedOutputContainerHeading>
        </CountedHeadingContainer>
        {!noInputView
          ? this.displayWordsWithLength()
          : this.renderNoUserInputs()}
      </CountedOutputContainer>
    )
  }

  render() {
    return (
      <CharacterCounterContainer>
        <CharacterCounterResponsiveContainer>
          {this.renderCountedOutputContainer()}
          {this.renderUserInputContainer()}
        </CharacterCounterResponsiveContainer>
      </CharacterCounterContainer>
    )
  }
}

export default CharacterCounter
