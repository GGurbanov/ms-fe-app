import React from 'react';

import {
    Button,
    Jumbotron
} from 'reactstrap';

const MainModule: React.FC = () => {
    return <div className="container">
        <div className="row">
            <div className="col-sm">
                <div style={{ marginTop: "20px" }}>
                    <Jumbotron>
                        <h1 className="display-3">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        </div>
    </div>
};

export default MainModule;
