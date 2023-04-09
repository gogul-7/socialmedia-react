import React from 'react'
import './Myinfo.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Myinfo() {
  return (
    <Card className='showProfile'>
      <Card.Title className='title'>My info</Card.Title>
      <Card.Img className='profilepic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlsB6YB55Rt3ysHRNZvGBnBHEF_zP6PRXjGitPw-M1UaJd2dL99fG1yi1QLTFJB5vJ-0&usqp=CAU" alt="Cinque Terre" />
      <Card.Title className='profileName'>Lisa</Card.Title>
      <Card.Title className='username'>@lisa123</Card.Title>
      <Card.Body className='profileContent'>
      <ListGroup variant="flush">
        <ListGroup.Item>Post&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</ListGroup.Item>
        <ListGroup.Item>Followers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30</ListGroup.Item>
        <ListGroup.Item>Following&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default Myinfo

{/* <div className='showProfile'>
      <p className='title'>My info</p>
      <div className='profileContent'>
        <img className='profilepic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlsB6YB55Rt3ysHRNZvGBnBHEF_zP6PRXjGitPw-M1UaJd2dL99fG1yi1QLTFJB5vJ-0&usqp=CAU" alt="Cinque Terre"></img>
        <p>Post</p>
      </div>
    </div> */}