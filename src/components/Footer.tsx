import React from 'react';
import { Col, Row } from 'reactstrap';

const Footer = (): JSX.Element => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year;
    };
    return (
        <div id='main-footer' className='text-center p-2'>
            <Row>
                <Col>
                    <p>CopyRight &copy; <span>{thisYear()}</span></p>
                </Col>
            </Row>
        </div>
    )
};

export default Footer;