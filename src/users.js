import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export class users extends Component {
    state = {
        people: []
    };

    componentDidMount() {
        axios
            .get('https://reqres.in/api/users')
            .then(response => {
                console.log(response.data.data);
                this.setState({ people: response.data.data })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <div>


                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">avatar</TableCell>
                                <TableCell align="right">first Name</TableCell>
                                <TableCell align="right">last Name</TableCell>
                                <TableCell align="right">email</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.people.map((person) => (
                                <TableRow key={person.id}>
                                    <TableCell align="right"><Avatar alt="Remy Sharp" src={person.avatar} /></TableCell>
                                    <TableCell align="right">{person.first_name}</TableCell>
                                    <TableCell align="right">{person.last_name}</TableCell>
                                    <TableCell align="right">{person.email}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        );
    }
}

export default users
