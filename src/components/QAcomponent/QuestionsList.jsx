import React, { useState, useEffect } from 'react';
import AnswersList from './AnswersList.jsx'
import LoadMore from './LoadMore.jsx'
import Modal from './Modal.jsx'
import Styled from 'styled-components'
import HelpfulAndReport from './Helpful.jsx'

const QuestionsList = (props) => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [count, setCount] = useState(2)

  useEffect(() => {
    setShowQuestions(false)
    setCount(2)
  }, [props.questions])

  const handleCollapse = () => {
    setShowQuestions(false);
    setCount(count - 2);
  }

  if (props.searchTerm === '') {
    return (
      <div>
        {props.questions.map((oneQuestion, i) => {
          if (!showQuestions) {
            if (i < count) {
              return (
                <div key={oneQuestion.question_id}>

                  <QuestionLineContainer>
                    <p>Q: {oneQuestion.question_body}</p>
                    <MoveRight>
                      <HelpfulAndReport help={true} helpfulness={oneQuestion.question_helpfulness} question={oneQuestion} updateHelpful={props.updateHelpful} reported={oneQuestion.reported} questionOrAnswer={'question'}/>
                      <Divide>|</Divide>
                      <Modal currentQuestion={oneQuestion.question_body} currentQuestion_id={oneQuestion.question_id} currentProduct={props.currentProduct} addQorA={props.addQorA} answers={true} key={i}/>
                    </MoveRight>
                  </QuestionLineContainer>

                  <AnswerLineContainer>
                    <AnswersList  question={oneQuestion} updateHelpful={props.updateHelpful} searchedTerm={props.searchTerm} key={oneQuestion.question_id} />
                      {(props.questions.length > 2 && <div>{(i === (count - 1)) ? <LoadMore setShowQuestions={setShowQuestions} count={count} setCount={setCount} key={i}/> : <></>}
                      </div>)}
                  </AnswerLineContainer>

                  </div>
              )
            }
          } else {
            if (i < count) {
              return (
                <div key={oneQuestion.question_id}>
                  <QuestionLineContainer>
                    <p>Q: {oneQuestion.question_body}</p>
                    <MoveRight>
                      <HelpfulAndReport help={true} helpfulness={oneQuestion.question_helpfulness} question={oneQuestion} updateHelpful={props.updateHelpful} reported={oneQuestion.reported} questionOrAnswer={'question'}/>
                      <Divide>|</Divide>
                      <Modal currentQuestion={oneQuestion.question_body} currentQuestion_id={oneQuestion.question_id} currentProduct={props.currentProduct} addQorA={props.addQorA} answers={true} key={i}/>
                    </MoveRight>
                  </QuestionLineContainer>

                  <AnswerLineContainer>
                    <AnswersList question={oneQuestion} updateHelpful={props.updateHelpful} searchedTerm={props.searchTerm} key={oneQuestion.question_id}/>
                      <div>{(i < props.questions.length && i === (count - 1)) ? <LoadMore setShowQuestions={setShowQuestions} count={count} setCount={setCount} key={i}/> : <></>}
                      </div>
                  </AnswerLineContainer>
                </div>
              )
            }
          }
        })}
      </div>
    )
  } else {
    return (
      <div>
          {props.questions.filter((oneQuestion) => {
            if (oneQuestion.question_body.toLowerCase().includes(props.searchTerm.toLowerCase())) {
              return oneQuestion
            }
          }).map((oneQuestion, i) => {
            if (!showQuestions) {
              if (i < count) {
                return (
                  <div key={oneQuestion.question_id}>
                    <QuestionLineContainer>
                      <p>Q: {oneQuestion.question_body}</p>
                      <MoveRight>
                        <HelpfulAndReport help={true} helpfulness={oneQuestion.question_helpfulness} question={oneQuestion} updateHelpful={props.updateHelpful} reported={oneQuestion.reported} questionOrAnswer={'question'}/>
                        <Divide>|</Divide>
                        <Modal currentQuestion={oneQuestion.question_body} currentProduct={props.currentProduct} answers={true} key={i}/>
                      </MoveRight>
                    </QuestionLineContainer>
                    <AnswerLineContainer>
                      <AnswersList question={oneQuestion} updateHelpful={props.updateHelpful} addQorA={props.addQorA} searchedTerm={props.searchTerm} key={oneQuestion.question_id} />
                    </AnswerLineContainer>
                        <div>{(i === (count - 1)) ? <LoadMore setShowQuestions={setShowQuestions} count={count} setCount={setCount} key={i}/> : <></>}
                        </div>
                    </div>
                )
              }
            } else {
              if (i < count) {
                return (
                  <div key={oneQuestion.question_id}>
                    <QuestionLineContainer>
                      <p>Q: {oneQuestion.question_body}</p>
                        <HelpfulAndReport help={true} helpfulness={oneQuestion.question_helpfulness} question={oneQuestion} updateHelpful={props.updateHelpful} reported={oneQuestion.reported} questionOrAnswer={'question'}/>
                        <Divide>|</Divide>
                        <Modal currentQuestion={oneQuestion.question_body} currentProduct={props.currentProduct} addQorA={props.addQorA} answers={true} key={i}/>
                        {(props.questions.length > 2 && <div>{(i === (count - 1)) ? <LoadMore setShowQuestions={setShowQuestions} count={count} setCount={setCount} key={i}/> : <></>}
                        </div>)}
                    </QuestionLineContainer>
                    <AnswerLineContainer>
                      <AnswersList question={oneQuestion} updateHelpful={props.updateHelpful} searchedTerm={props.searchTerm} key={oneQuestion.question_id} key={i}/>
                    </AnswerLineContainer>
                  </div>
                )
              }
            }
          })}
      </div>
    )
  }
}

export default QuestionsList;

const MoveRight = Styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const QuestionLineContainer = Styled.div`
  display: flex;
  flex-direction: row;
  background-color: beige;
  padding: 0px 20px;
`

const AnswerLineContainer = Styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px grey solid;
  padding: 10px 0px;

`

const Divide = Styled.div`
  display: flex;
  justify-content: right;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 17.5px;
  font-weight: bold;
`;

// const Button = Styled.button`
//   display: inline-block;
//   border-radius: 3px;
//   cursor: pointer;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: black;
//   color: white;
//   border: 2px solid white;
//   &:hover {
//     background-color: lightblue;
//   }
// `