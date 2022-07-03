/*
 * @Author: shimingxia
 * @Date: 2022-06-06 10:44:54
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-06 11:03:41
 * @Description: 
 */
import React, { Component } from 'react'
import store from '../store'

export default class ReduxPage extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  add = () => {
    store.dispatch({
      type: 'ADD'
    })
  }

  minus = () => {
    store.dispatch({
      type: "MINUS"
    })
  }

  asyAdd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({type: 'ADD'})
      }, 1000)
    })
  }

  promiseMinus = () => {
    store.dispatch(
      Promise.resolve({
        type: "MINUS"
      })
    )
  }

  render() {
    return (
      <div>
        <p>{store.getState().home}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyAdd}>asyAdd</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
      </div>
    )
  }
}