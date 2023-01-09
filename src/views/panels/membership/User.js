import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../../assets/images/user/avatar-4.jpg';

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col sm={12}>
          <Card>
            <Card.Body className="text-center">
              <Row className="align-items-center m-l-0">
                <Col className="text-left">
                  <h5>User Management</h5>
                </Col>
                <Col className="text-right">
                  <button type="button" className="btn btn-primary btn-sm" onClick={() => setIsOpen(true)}>
                    <i className="feather icon-plus" />
                    New User
                  </button>
                </Col>
              </Row>
              <ul className="list-inline">
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    Sorting Options{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 font-weight-bolder">
                    {' '}
                    Reset{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    Membership{' '}
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="text-muted pl-2">
                    {' '}
                    Username{' '}
                  </Link>
                </li>
              </ul>
              <ul className="list-inline mb-0">
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    A{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    B{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    C{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    D{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    E{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    F{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    G{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    H{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    I{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    J{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    K{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    L{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    M{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    N{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    O{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    P{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    Q{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    R{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    S{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    T{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    U{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    V{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    W{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    X{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    Y{' '}
                  </Link>
                </li>
                <li className="list-inline-item border-right m-0">
                  <Link to="#" className="pr-2 pl-2 text-muted">
                    {' '}
                    Z{' '}
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="font-weight-bolder pl-2">
                    {' '}
                    All{' '}
                  </Link>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className="user-card user-card-1 mt-4">
            <Card.Body className="pt-0">
              <div className="user-about-block text-center">
                <Row className="align-items-end">
                  <Col className="text-left pb-3">
                    <span className="badge bg-success">Active</span>
                  </Col>
                  <Col>
                    <img className="img-radius img-fluid wid-80" src={avatar2} alt="User" />
                  </Col>
                  <Col className="text-right pb-3">
                    <Dropdown className="dropdown">
                      <Dropdown.Toggle
                        as="a"
                        className="drp-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Link to="#" className="dropdown-item">
                          Edit
                        </Link>
                        <Link to="#" className="dropdown-item">
                          History
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Trash
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <Link to="#" onClick={() => setIsOpen(true)}>
                  <h4 className="mb-1 mt-3">Andrew Burns</h4>
                </Link>
                <p className="mb-3 text-muted">
                  <i className="feather icon-calendar"> </i> 19 Jul 2016
                </p>
                <p className="mb-1">
                  <b>Email : </b>
                  <a href="mailto:dummy@example.com">andrew.burns@example.com</a>
                </p>
                <p className="mb-0">
                  <b>Membership : </b>Platinum <span className="badge bg-warning">member</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className="user-card user-card-1 mt-4">
            <Card.Body className="pt-0">
              <div className="user-about-block text-center">
                <Row className="align-items-end">
                  <Col className="text-left pb-3">
                    <span className="badge bg-success">Active</span>
                  </Col>
                  <Col>
                    <img className="img-radius img-fluid wid-80" src={avatar3} alt="User" />
                  </Col>
                  <Col className="text-right pb-3">
                    <Dropdown className="dropdown">
                      <Dropdown.Toggle
                        as="a"
                        className="drp-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Link to="#" className="dropdown-item">
                          Edit
                        </Link>
                        <Link to="#" className="dropdown-item">
                          History
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Trash
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <Link to="#" onClick={() => setIsOpen(true)}>
                  <h4 className="mb-1 mt-3">Keith Butler</h4>
                </Link>
                <p className="mb-3 text-muted">
                  <i className="feather icon-calendar"> </i> 27 Apr 2016
                </p>
                <p className="mb-1">
                  <b>Email : </b>
                  <a href="mailto:dummy@example.com">Keith.butler@example.com</a>
                </p>
                <p className="mb-0">
                  <b>Membership : </b>TRIAL <span className="badge bg-warning">member</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className="user-card user-card-1 mt-4">
            <Card.Body className="pt-0">
              <div className="user-about-block text-center">
                <Row className="align-items-end">
                  <Col className="text-left pb-3">
                    <span className="badge bg-danger">Banned</span>
                  </Col>
                  <Col>
                    <img className="img-radius img-fluid wid-80" src={avatar4} alt="User" />
                  </Col>
                  <Col className="text-right pb-3">
                    <Dropdown className="dropdown">
                      <Dropdown.Toggle
                        as="a"
                        className="drp-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Link to="#" className="dropdown-item">
                          Edit
                        </Link>
                        <Link to="#" className="dropdown-item">
                          History
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Trash
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <Link to="#" onClick={() => setIsOpen(true)}>
                  <h4 className="mb-1 mt-3">Christina Bowman</h4>
                </Link>
                <p className="mb-3 text-muted">
                  <i className="feather icon-calendar"> </i> 17 Apr 2016
                </p>
                <p className="mb-1">
                  <b>Email : </b>
                  <a href="mailto:dummy@example.com">Christina.Bowman@example.com</a>
                </p>
                <p className="mb-0">
                  <b>Membership : </b>- <span className="badge bg-primary">staff</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className="user-card user-card-1 mt-4">
            <Card.Body className="pt-0">
              <div className="user-about-block text-center">
                <Row className="align-items-end">
                  <Col className="text-left pb-3">
                    <span className="badge bg-dark">Pending</span>
                  </Col>
                  <Col>
                    <img className="img-radius img-fluid wid-80" src={avatar1} alt="User" />
                  </Col>
                  <Col className="text-right pb-3">
                    <Dropdown className="dropdown">
                      <Dropdown.Toggle
                        as="a"
                        className="drp-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Link to="#" className="dropdown-item">
                          Edit
                        </Link>
                        <Link to="#" className="dropdown-item">
                          History
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Trash
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <Link to="#" onClick={() => setIsOpen(true)}>
                  <h4 className="mb-1 mt-3">Kelly Montgomery</h4>
                </Link>
                <p className="mb-3 text-muted">
                  <i className="feather icon-calendar"> </i> 23 Mar 2016
                </p>
                <p className="mb-1">
                  <b>Email : </b>
                  <a href="mailto:dummy@example.com">Kelly.Montgomery@example.com</a>
                </p>
                <p className="mb-0">
                  <b>Membership : </b>Bronze <span className="badge bg-warning">member</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className="user-card user-card-1 mt-4">
            <Card.Body className="pt-0">
              <div className="user-about-block text-center">
                <Row className="align-items-end">
                  <Col className="text-left pb-3">
                    <span className="badge bg-info">Inactive</span>
                  </Col>
                  <Col>
                    <img className="img-radius img-fluid wid-80" src={avatar2} alt="User" />
                  </Col>
                  <Col className="text-right pb-3">
                    <Dropdown className="dropdown">
                      <Dropdown.Toggle
                        as="a"
                        className="drp-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Link to="#" className="dropdown-item">
                          Edit
                        </Link>
                        <Link to="#" className="dropdown-item">
                          History
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Trash
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <Link to="#" onClick={() => setIsOpen(true)}>
                  <h4 className="mb-1 mt-3">Steve Castillo</h4>
                </Link>
                <p className="mb-3 text-muted">
                  <i className="feather icon-calendar"> </i> 23 Mar 2016
                </p>
                <p className="mb-1">
                  <b>Email : </b>
                  <a href="mailto:dummy@example.com">Steve.Castillo@example.com</a>
                </p>
                <p className="mb-0">
                  <b>Membership : </b>GOLD <span className="badge bg-warning">member</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className="user-card user-card-1 mt-4">
            <Card.Body className="pt-0">
              <div className="user-about-block text-center">
                <Row className="align-items-end">
                  <Col className="text-left pb-3">
                    <span className="badge bg-success">Active</span>
                  </Col>
                  <Col>
                    <img className="img-radius img-fluid wid-80" src={avatar3} alt="User" />
                  </Col>
                  <Col className="text-right pb-3">
                    <Dropdown className="dropdown">
                      <Dropdown.Toggle
                        as="a"
                        className="drp-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Link to="#" className="dropdown-item">
                          Edit
                        </Link>
                        <Link to="#" className="dropdown-item">
                          History
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Trash
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <Link to="#" onClick={() => setIsOpen(true)}>
                  <h4 className="mb-1 mt-3">Kenneth Hart</h4>
                </Link>
                <p className="mb-3 text-muted">
                  <i className="feather icon-calendar"> </i> 25 Dec 2015
                </p>
                <p className="mb-1">
                  <b>Email : </b>
                  <a href="mailto:dummy@example.com">Steve.Castillo@example.com</a>
                </p>
                <p className="mb-0">
                  <b>Membership : </b>BRONZE <span className="badge bg-warning">member</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className="user-card user-card-1 mt-4">
            <Card.Body className="pt-0">
              <div className="user-about-block text-center">
                <Row className="align-items-end">
                  <Col className="text-left pb-3">
                    <span className="badge bg-success">Active</span>
                  </Col>
                  <Col>
                    <img className="img-radius img-fluid wid-80" src={avatar2} alt="User" />
                  </Col>
                  <Col className="text-right pb-3">
                    <Dropdown className="dropdown">
                      <Dropdown.Toggle
                        as="a"
                        className="drp-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Link to="#" className="dropdown-item">
                          Edit
                        </Link>
                        <Link to="#" className="dropdown-item">
                          History
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Trash
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <Link to="#" onClick={() => setIsOpen(true)}>
                  <h4 className="mb-1 mt-3">Henry Reyes</h4>
                </Link>
                <p className="mb-3 text-muted">
                  <i className="feather icon-calendar"> </i> 19 Jan 2016
                </p>
                <p className="mb-1">
                  <b>Email : </b>
                  <a href="mailto:dummy@example.com">Henry.Reyes@example.com</a>
                </p>
                <p className="mb-0">
                  <b>Membership : </b>- <span className="badge bg-danger">editor</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className="user-card user-card-1 mt-4">
            <Card.Body className="pt-0">
              <div className="user-about-block text-center">
                <Row className="align-items-end">
                  <Col className="text-left pb-3">
                    <span className="badge bg-danger">Banned</span>
                  </Col>
                  <Col>
                    <img className="img-radius img-fluid wid-80" src={avatar3} alt="User" />
                  </Col>
                  <Col className="text-right pb-3">
                    <Dropdown className="dropdown">
                      <Dropdown.Toggle
                        as="a"
                        className="drp-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="feather icon-more-horizontal" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Link to="#" className="dropdown-item">
                          Edit
                        </Link>
                        <Link to="#" className="dropdown-item">
                          History
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Trash
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <Link to="#" onClick={() => setIsOpen(true)}>
                  <h4 className="mb-1 mt-3">Adam Dean</h4>
                </Link>
                <p className="mb-3 text-muted">
                  <i className="feather icon-calendar"> </i> 27 Oct 2015
                </p>
                <p className="mb-1">
                  <b>Email : </b>
                  <a href="mailto:dummy@example.com">Adam.Dean@example.com</a>
                </p>
                <p className="mb-0">
                  <b>Membership : </b>TRIAL <span className="badge bg-warning">member</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal size="xl" show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title as="h5">User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <div className="form-group fill">
                <label className="floating-label" htmlFor="First">
                  <small className="text-danger">* </small>First Name
                </label>
                <input type="text" className="form-control" id="Name" placeholder="First Name" />
              </div>
            </Col>
            <Col>
              <div className="form-group fill">
                <label className="floating-label" htmlFor="Last">
                  <small className="text-danger">* </small>Last Name
                </label>
                <input type="text" className="form-control" id="Last" placeholder="Last Name" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="form-group fill">
                <label className="floating-label" htmlFor="Email">
                  <small className="text-danger">* </small>Email Address
                </label>
                <input type="email" className="form-control" id="Email" placeholder="Email Address" />
              </div>
            </Col>
            <Col>
              <div className="form-group fill">
                <label className="floating-label" htmlFor="Password">
                  <small className="text-danger">* </small>New Password
                </label>
                <input type="password" className="form-control" id="Password" placeholder="New Password" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="form-group fill">
                <label className="floating-label" htmlFor="Membership">
                  <small className="text-danger">* </small>Change Membership
                </label>
                <select className="form-control" id="Membership">
                  <option value="" />
                  <option value="2">Bronze</option>
                  <option value="3">Gold</option>
                  <option value="4">Platinum</option>
                  <option value="5">Silver</option>
                  <option value="1">Trial</option>
                </select>
              </div>
            </Col>
            <Col>
              <div className="form-group fill">
                <label className="floating-label" htmlFor="Extend">
                  Extend Membership
                </label>
                <input type="date" className="form-control" id="Extend" placeholder="Extend Membership" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <label className="d-block mb-2">Status</label>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline1"
                  className="custom-control-input"
                  defaultChecked={true}
                />
                <label className="custom-control-label" htmlFor="customRadioInline1">
                  Active
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline2">
                  Inactive
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline3" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline3">
                  Pending
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline4" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline3">
                  Banned
                </label>
              </div>
              <hr />
            </Col>
            <Col sm={4}>
              <label className="d-block mb-2">User Type</label>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline2"
                  className="custom-control-input"
                  defaultChecked={true}
                />
                <label className="custom-control-label" htmlFor="customRadioInline21">
                  Staff
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline2" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline22">
                  Editor
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline3" name="customRadioInline2" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline23">
                  Member
                </label>
              </div>
            </Col>
            <Col sm={4}>
              <label className="d-block mb-2">Newsletter Subscriber</label>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline3"
                  className="custom-control-input"
                  defaultChecked={true}
                />
                <label className="custom-control-label" htmlFor="customRadioInline31">
                  Yes
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline3" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline32">
                  No
                </label>
              </div>
            </Col>
            <Col sm={4}>
              <label className="d-block mb-2">Send Email Notification</label>
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                <label className="custom-control-label" htmlFor="customSwitch1">
                  Yes
                </label>
              </div>
            </Col>
            <Col sm={12}>
              <div className="form-group fill mt-3">
                <label className="floating-label" htmlFor="Note">
                  User Note
                </label>
                <textarea className="form-control" id="Note" rows="6" placeholder="User Note" />
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setIsOpen(false)}>
            Clear
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default User;
