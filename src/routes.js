import React from 'react'
import { LabelImportant, Dashboard } from "@material-ui/icons"

const routes = [
    {
        path: '/',
        icon: (<Dashboard />),
        exact: false,
        title: 'Dashboard'
    },
    {
        path: '/characters/listing',
        icon: (<LabelImportant />),
        exact: false,
        title: 'Characters'
    }
]

export default routes
