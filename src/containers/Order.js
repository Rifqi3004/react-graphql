import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCustomerOrder} from '../redux/actions/customers'
import Layout from '../components/layouts'

class Order extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>Ini Halaman Order</h1>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    customer : state.customer
})

export default connect(mapStateToProps)(Order)
