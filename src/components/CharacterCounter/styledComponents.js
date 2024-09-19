import styled from 'styled-components'

export const CharacterCounterContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;
  justify-content: center;
`

export const CharacterCounterResponsiveContainer = styled.div`
  width: 90%;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
`
export const CountedOutputContainer = styled.div`
  background-color: #ffc533;
  width: 50%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
`
export const CharacterCounterUserInputContainer = styled.div`
  background-color: #0f172a;
  width: 50%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CharacterCounterUserInputHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 34px;
  color: #ffbf1f;
  font-weight: 500;
  margin-top: 50px;
  margin-bottom: 70px;
`
export const CountedHeadingContainer = styled.div`
  background-color: #ffbf1f;
  margin: 5px;
  padding-left: 40px;
  padding-right: 20px;
`

export const CountedOutputContainerHeading = styled(
  CharacterCounterUserInputHeading,
)`
  color: #334155;
`

export const InputElementAndButtonContainer = styled.form`
  width: 90%;
  //   border: 1px solid red;
`
export const InputElement = styled.input`
  width: 82%;
  height: 40px;
  margin-right: 5px;
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  font-weight: 400;
  padding-left: 10px;
`
export const AddButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  background-color: #ffc533;
  color: #272c47;
`

export const WordsListContainer = styled.ul`
  list-style-type: none;
  padding-left: 30px;
  margin-top: 30px;
`
export const WordsListItem = styled.li`
  font-family: 'Roboto';
  margin: 10px;
`
export const EmptyInputViewImage = styled.img`
  width: 80%;
  display: flex;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const UserInputText = styled.p`
  font-weight: 500;
  color: #1e293b;
`
export const Count = styled.span`
  font-weight: 600;
  color: #272c47;
`
