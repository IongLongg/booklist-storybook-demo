import React from 'react'
import { Button, Table } from 'reactstrap'

export default {
    title : 'Table'
}

const TransactionRow = ({id, user, book, isCompleted}) => (
    <tr>
        <th scope='row'>{id}</th>
        <td>{user}</td>
        <td>{book}</td>
        <td>
            {isCompleted ? 
                <Button outline color='success' disabled>Completed</Button> : 
                <Button outline color='success' >Complete</Button>}
        </td>
    </tr>
)
TransactionRow.defaultProps = {
    id : '1',
    user : 'Long',
    book : 'ReactJS',
    isCompleted : false
}

export const SingleRowTransaction = () => (
    <Table bordered style={{textAlign:'center'}}>
        <tbody>
            <TransactionRow/>
        </tbody>
    </Table>
)
SingleRowTransaction.storyName = 'Single Row Transaction'

export const TransactionTable = () => (
    <Table bordered style={{textAlign:'center'}}>
        <thead>
            <tr>
                <th></th>
                <th>User</th>
                <th>Book</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <TransactionRow id='1' user='James' book='ReactJS' isCompleted={false}/>
            <TransactionRow id='2' user='Curry' book='NodeJS' isCompleted={true}/>
            <TransactionRow id='3' user='Mike' book='MongoDB' isCompleted={false}/>
        </tbody>        
    </Table>
)
TransactionTable.storyName = 'Transaction Table'

const ShopRow = ({id, name}) => (
    <tr>
        <th scope='row'>{id}</th>
        <td>{name}</td>
        <td>
            <Button color='primary'>Go</Button>
        </td>
    </tr>
)
ShopRow.defaultProps = {
    id : '1',
    name : 'Vinmart',
}

export const SingleRowShop = () => (
    <Table bordered style={{textAlign:'center'}}>
        <tbody>
            <ShopRow/>
        </tbody>
    </Table>
)
SingleRowShop.storyName = 'Single Row Shop'

export const ShopTable = () => (
    <Table bordered style={{textAlign:'center'}}>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <ShopRow id='1' name='Vinmart'/>
            <ShopRow id='2' name='Tiki'/>
        </tbody>        
    </Table>
)
ShopTable.storyName = 'Shop Table'