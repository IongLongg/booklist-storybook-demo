import React from 'react'
import { Button } from 'reactstrap'

export default {
    title: 'Button',
}

export const Primary = () => <Button color='primary'>Add</Button>
export const OutlinePrimary = () => <Button outline color='primary'>Add</Button>
OutlinePrimary.storyName = 'Outline Primary'

export const Secondary = () => <Button color='secondary'>Login</Button>
export const OutlineSecondary = () => <Button outline color='secondary'>Login</Button>
OutlineSecondary.storyName = 'Outline Secondary'

export const Success = () => <Button color='success'>Save</Button>
export const OutlineSuccess = () => <Button outline color='success'>Save</Button>
OutlineSuccess.storyName = 'Outline Success'

export const Danger = () => <Button color='danger'>Delete</Button>
export const OutlineDanger = () => <Button outline color='danger'>Delete</Button>
OutlineDanger.storyName = 'Outline Danger'
