import { configureStore } from '@reduxjs/toolkit'
import dataslicereducer from './dataslice'

const store=configureStore(
    {
        reducer:{
        user:dataslicereducer
        }
    }
)
export default store;