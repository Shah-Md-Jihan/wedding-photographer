import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import useSetTitle from '../../hooks/useSetTitle';

const Blogs = () => {
    useSetTitle('Blogs');
    return (
        <div style={{ marginTop: "125px" }}>
            <h2 className='text-center'>Blogs</h2>
            <Card className="text-center w-75 mx-auto">
                <Card.Body className='text-start'>
                    <Card.Title>1.Difference between SQL and NoSQL.</Card.Title>
                    <Card.Text>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>SQL</th>
                                    <th>NO SQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                    <td>Non-relational or distributed database system.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>These databases have fixed or static or predefined schema</td>
                                    <td>They have dynamic schema</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>These databases are not suited for hierarchical data storage.</td>
                                    <td>These databases are best suited for hierarchical data storage.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>These databases are best suited for complex queries</td>
                                    <td>These databases are not so good for complex queries</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Vertically Scalable</td>
                                    <td>Horizontally scalable</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Follows ACID property</td>
                                    <td>Follows CAP(consistency, availability, partition tolerance)</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                                    <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                    <div>
                        <h4>What is JWT, and how does it work?</h4>
                        <p>
                            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                        </p>
                    </div>
                    <div>
                        <h4>What is the difference between javascript and NodeJS?</h4>
                        <p>
                            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                        </p>
                    </div>
                    <div>
                        <h4>What is the difference between javascript and Node JS?</h4>
                        <p>
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        </p>
                    </div>
                    <div>
                        <h4>How does NodeJS handle multiple requests at the same time?</h4>
                        <p>
                            How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                        </p>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Blogs;