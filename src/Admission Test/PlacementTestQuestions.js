import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation, useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getPlacementTestQuestions } from '../apiForPlacementTestQuestions';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


function PlacementTestQuestions() {
   
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getPlacementTestQuestions()
      console.log (location.state)
      setItems(contents)
    }
    fetchItems()
  }, []);
  const location = useLocation();
  const history = useHistory();
  const handleOnClick = (data, _id) => {
    location.state.answeredQuestionID = _id
    location.state.answertype = data.answertype
    location.state.questionContent = data.questioncontent
    location.state.questionTitle = data.questiontitle
    location.state.totalMarks = data.totalmarks
    var dataToBeSent = location.state
 
    if ((data.answertype == "Text")){
      history.push({
        pathname:"/main/view-question-type-qa",
        state: dataToBeSent
      })
    }
    else if ((data.answertype == "Pronunciation")){
      history.push({
        pathname:"/main/view-question-type-pronunciation",
        state: dataToBeSent
      })
    }
    else if ((data.answertype == "Multiple Choice")){
      history.push({
        pathname:"/main/view-question-type-mcq",
        state: dataToBeSent
      })
    }
    else if ((data.answertype == "Fill in the Blanks")){
      history.push({
        pathname:"/main/view-question-type-blanks",
        state: dataToBeSent
      })
    }
  }
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

    
  const handleCompletion = (e) => {
    /*
        if(location.state.grade == 'Grade 1'){
          history.push({
            pathname:"/Grade-1-content-test"
          })
        }
    */
      }
  
    return (
        <div>
      <section id="header-bootom">
        <section id="services-section" style={{margin: '10px'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8 col-sm-2">
              <CountdownCircleTimer
                  isPlaying
                  duration={3600}
                  colors={[
                    ['#004777', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                  ]}
                  onComplete={(e) => handleCompletion(e)}
                >
                   {renderTime}
                {/*{({ remainingTime }) => remainingTime}*/}
                </CountdownCircleTimer>
                {/*  <table id="example" class="display" style="width:100%"> */}
                <table className="table  table-hover general-table" id="example">
                          <thead>
                              <tr>
                              <th>Question's Title</th>
                              <th>Activity Type</th>
                              <th>Question Type</th>
                              <th>Answer Type</th>
                              <th>Marks of Question</th>
                              <th>Obtained Marks</th>
                              <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                  <td>
                                      {contents.questiontitle}
                                  </td>
                                  <td>
                                      {contents.activitytype}
                                  </td>
                                  <td>
                                      {contents.questiontype}
                                  </td>
                                  <td>
                                      {contents.answertype}
                                  </td>
                                  <td>
                                      {contents.totalmarks}
                                  </td>
                                  <td>
                                      {contents.obtained}
                                  </td>
                                  <td>
                                    {location.state.idArray.includes(contents._id) ?
                                    <button className="btn btn-success" >Answer Submitted!</button>
                                    :
                                    <button className="btn btn-dark" onClick={() => handleOnClick(contents, contents._id)}>View Question / Submit Answer</button>
                                    }
                                  </td>
                                  </tr>
                              ))
                              }
                          </tbody>

                </table>
                <hr />
                <div className="text-center">
                  <table className="table  table-hover general-table">
                    <tbody><tr>
                        <td>
                          <input type="checkbox" defaultValue="chek" name="attampt" className="attampt" /> I have completed the test to the best of my knowledge and hereby submit my answers for evaluation</td>
                        <td>
                          <button type="button" className="btn btn-dark" id="btnTick">Submit</button>
                        </td>
                      </tr>
                    </tbody></table>
                </div>
                <div className="col-md-2" />
              </div>
            </div>
          </div></section>
      </section>
        </div>
    )
}

export default PlacementTestQuestions
