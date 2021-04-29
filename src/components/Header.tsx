import React from 'react';
import { Col, Row } from 'reactstrap';

const Header = (): JSX.Element => {
    return ( 
        <div id='page-header' className='mb-3'>
            <Row>
                <Col md='6' sm='auto' className='text-center m-auto'>
                    <h1>Jerry's BLOG</h1>
                    <p>제리의 게인블로그 입니다.</p>
                </Col>
            </Row>
        </div>
    )
}

export default Header;