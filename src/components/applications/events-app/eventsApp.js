import React, { Fragment, useState, useRef, Component, useEffect } from 'react';
import Breadcrumb from '../../common/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { WATCH_TASK_LIST } from '../../../redux/actionTypes'
import { newTask, removeTask } from '../../../redux/task/action'
import { useSelector, useDispatch } from 'react-redux'
import SweetAlert from 'sweetalert2'
import { Printer, Link, MoreHorizontal, Trash2, PlusCircle } from 'react-feather';
import ReactToPrint from "react-to-print";
import { AddTask, TaskTitle, Collection, General, Description, Save, Cancel, Views, CreatedByMe, TodayTasks, DelayedTasks, UpcomingTasks, ThisWeekTask, ThisMonthTasks, AssignedToMe, MyTasks, Tags, Newsletter, Business, Holidays, Important, Orgenization, Print, NoTasksFound, Notification, MARKJENCO, MARKJENCOEMAIL, NewTask, NoTaskDueToday } from "../../../constant";

const IMGEVENT = "http://cartel-urbano-s3.s3-website-us-east-1.amazonaws.com/static/media/card-1.5c9e51b19c6c08f425b0.png"
const EVENTS = [
  {
    image: IMGEVENT,
    title: "SÍNDROME DE CLOW",
    place: "La Maldita Vanidad, Bogotá",
    date: "Lunes 9 de Febrero",
    time: "9:00PM",
    price: "50000",
    band: "Colectivo de Teatro",
    category: "arte",
    color: "#47D3DE"
  },
  {
    image: IMGEVENT,
    title: "SÍNDROME DE CLOW",
    place: "La Maldita Vanidad, Bogotá",
    date: "Lunes 9 de Febrero",
    time: "9:00PM",
    price: "50000",
    band: "Colectivo de Teatro",
    category: "música",
    color: "#FFA2A0"
  },
  {
    image: IMGEVENT,
    title: "SÍNDROME DE CLOW",
    place: "La Maldita Vanidad, Bogotá",
    date: "Lunes 9 de Febrero",
    time: "9:00PM",
    price: "50000",
    band: "Colectivo de Teatro",
    category: "Teatro y Cine",
    color: "#FF7300"
  },
  {
    image: IMGEVENT,
    title: "SÍNDROME DE CLOW",
    place: "La Maldita Vanidad, Bogotá",
    date: "Lunes 9 de Febrero",
    time: "9:00PM",
    price: "50000",
    band: "Colectivo de Teatro",
    category: "música",
    color: "#FFA2A0"
  }
]

const CATEGORIES = [
  {
    name: "música",
    slug: "musica",
    color: "#FFA2A0",
    active: false
  },
  {
    name: "arte",
    slug: "arte",
    color: "#47D3DE",
    active: false
  },
  {
    name: "cursos y talleres",
    slug: "cursos y talleres",
    color: "#E9FA00",
    active: false
  },
  {
    name: "literatura y posesia",
    slug: "literatura y posesia",
    color: "#3EB56C",
    active: false
  },
  {
    name: "cine y teatro",
    slug: "cine y teatro",
    color: "#FF7300",
    active: false
  },
  {
    name: "turismo",
    slug: "turismo",
    color: "#FE3116",
    active: false
  },
  {
    name: "deporte",
    slug: "deporte",
    color: "#AD83D6",
    active: false
  }
]

const BodyTable = (props) => {
  const { newtaskdata, handleRemoveTask } = props
  return (
    <tbody>
      {newtaskdata.length > 0 ?
        newtaskdata.map((taskdata, index) => {
          return (
            <tr key={index}>
              <td>
                <h6 className="task_title_0">{taskdata.title}</h6>
                <p className="project_name_0">{taskdata.date}</p>
              </td>
              <td>
                <p className="task_desc_0">{taskdata.band}</p>
              </td>
              <td>
                <a className="me-2" href="#javascript"><Link /></a>
                <a href="#javascript"><MoreHorizontal /></a>
              </td>
              <td><a href="#javascript" onClick={() => handleRemoveTask(taskdata.id)}><Trash2 /></a></td>
            </tr>
          )
        })
        : <tr><td><div className="no-favourite"><span>{NoTasksFound}</span></div></td></tr>
      }
    </tbody>
  )

}
const EventsApp = (props) => {

  const dispatch = useDispatch()
  //const newtaskdata = useSelector(content => content.Taskapp.newtaskdata);
  const tasklist = useSelector(content => content.Taskapp.task);
  const [activeTab, setActiveTab] = useState(-1);
  const [addModal, setaddModal] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const componentRef = useRef();

  const [newtaskdata, setNewtaskdata] = useState(EVENTS)

  console.log(newtaskdata);


  const addToggle = () => { setaddModal(!addModal) }

  useEffect(() => {
    dispatch({ type: WATCH_TASK_LIST })
  }, [dispatch])

  const Addtask = data => {
    if (data !== '') {
      Addnewtask(data);
      setaddModal(false)
    } else {
      errors.showMessages();
    }
  };

  const Addnewtask = (data) => {
    dispatch(newTask(data))
  }

  const RemoveTask = (taskId) => {
    SweetAlert.fire({
      title: '¿Estas seguro?',
      text: "¡Una vez eliminado, no podrá recuperar este evento!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        dispatch(removeTask(taskId));
        SweetAlert.fire(
          '¡Eliminado!',
          'Su evento ha sido eliminado.',
          'success'
        )
      }
    })
  }
  return (
    <Fragment>
      <Breadcrumb parent="Tablero" title="EVENTOS" />
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap">
          <Row>

            {/* left-aside-content  start */}
            <Col xl="3" className="box-col-6 xl-30">
              <div className="email-left-aside">
                <Card>
                  <CardBody>
                    <div className="email-app-sidebar left-bookmark">
                      <Nav className="main-menu" role="tablist">
                        <NavItem>
                          <Button color="primary" className="btn-block btn-mail badge-light-primary" onClick={addToggle}>{`Nuevo Evento`}</Button>
                          <Modal isOpen={addModal} toggle={addToggle} size="lg">
                            <ModalHeader toggle={addToggle}>{AddTask}</ModalHeader>
                            <ModalBody>
                              <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(Addtask)}>
                                <div className="form-row">
                                  <FormGroup className="col-md-6">
                                    <Label>{TaskTitle}</Label>
                                    <input className="form-control" name="title" type="text" {...register('title', { required: true })} />
                                    <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6">
                                    <Label>{"Organizador"}</Label>
                                    <input className="form-control" name="title" type="text" {...register('title', { required: true })} />
                                    <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6">
                                    <Label>{"Fecha de inicio"}</Label>
                                    <input className="form-control" name="title" type="date" {...register('title', { required: true })} />
                                    <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6">
                                    <Label>{"Fecha de fin"}</Label>
                                    <input className="form-control" name="title" type="date" {...register('title', { required: true })} />
                                    <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6">
                                    <Label>{"Hora de inicio"}</Label>
                                    <input className="form-control" name="title" type="time" {...register('title', { required: true })} />
                                    <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6">
                                    <Label>{"Precio"}</Label>
                                    <input className="form-control" name="title" type="number" {...register('title', { required: true })} />
                                    <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6">
                                    <Label>{"Lugar"}</Label>
                                    <input className="form-control" name="title" type="text" {...register('title', { required: true })} />
                                    <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6">
                                    <Label>{"Ciudad"}</Label>
                                    <input className="form-control" name="title" type="text" {...register('title', { required: true })} />
                                    <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6">
                                    <Label>{"Categoria"}</Label>
                                    <Input className="js-example-disabled-results" name="collection" type="select">
                                      <option value="">Elija una opcion</option>
                                      {
                                        CATEGORIES.map((item, index) => (
                                          <option key={index} value={item.name}>{item.name.toUpperCase()}</option>
                                        ))
                                      }
                                    </Input>
                                  </FormGroup>
                                  <FormGroup className="col-md-6">
                                    <Label>{"Imagen"}</Label>
                                    <input className="form-control" name="desc" type="file" {...register('desc', { required: true })}></input>
                                    <span style={{ color: "red" }}>{errors.desc && 'Description is required'}</span>
                                  </FormGroup>
                                </div>
                                <Button color="secondary" className="me-1">{Save}</Button>
                                <Button color="primary" onClick={addToggle}>{Cancel}</Button>
                              </Form>
                            </ModalBody>
                          </Modal>
                        </NavItem>

                        <NavItem>
                          <a href="#javaScript" className={activeTab === -1 ? 'active' : ''} onClick={() => setActiveTab(-1)}>
                            <span className="title"> {MyTasks} ({newtaskdata.length})</span>
                          </a>
                        </NavItem>
                        <li>
                          <hr />
                        </li>
                        <NavItem><span className="main-title"> {Tags}<span className="pull-right"><PlusCircle /></span></span></NavItem>

                        {
                          CATEGORIES.map((item, index) => (
                            <NavItem
                              key={index}>
                              <a
                                href="#javaScript" className={activeTab === index ? 'active' : ''}
                                onClick={() => setActiveTab(index)}
                              >
                                <span className="title">{item.name.toUpperCase()}</span>
                              </a>
                            </NavItem>
                          ))
                        }
                      </Nav>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            {/* left-aside-content  end */}

            {/* right-aside-content  start */}
            <Col xl="9" md="12" className="box-col-12 xl-70">
              <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                  <div className="ps-0">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={-1}>
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0 f-w-600">{MyTasks}</h6>
                            <a href="#javascript"><Printer className="me-2" />{Print}</a>
                          </CardHeader>
                          <CardBody className="p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <Table>
                                  <thead></thead>

                                  {/* LIST ALL EVENTS */}
                                  <BodyTable newtaskdata={newtaskdata} handleRemoveTask={(index) => RemoveTask(index)} />

                                </Table>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      {
                        CATEGORIES.map((item, index) => (
                          <TabPane tabId={index} key={index}>
                            <Card className="mb-0">
                              <CardHeader className="d-flex">
                                <h6 className="mb-0">{item.name.toUpperCase()}</h6><a href="#javascript"><Printer className="me-2" />{Print}</a>
                              </CardHeader>
                              <CardBody className="p-0">
                                <div className="taskadd">
                                  <div className="table-responsive">
                                    <Table>
                                      <thead></thead>

                                      {/* LIST CATEGORY EVENTS */}
                                      <BodyTable key={index} newtaskdata={newtaskdata} handleRemoveTask={(index) => RemoveTask(index)} />
                                    </Table>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </TabPane>
                        ))
                      }
                    </TabContent>
                  </div>
                </Card>
              </div>
            </Col>
            {/* right-aside-content  end */}

          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default EventsApp;