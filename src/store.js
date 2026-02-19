import { configureStore } from '@reduxjs/toolkit'
import dataslicereducer from './dataslice'

const store=configureStore(
    {
        reducer:{
        users:dataslicereducer
        }
    }
)
export default store;