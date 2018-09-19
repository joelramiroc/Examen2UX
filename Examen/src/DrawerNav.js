import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import Active from '../com/Active';
import All from '../../com/All';

import drawerContentComponents from './drawerContentComponents';


export const DrawerNav = createDrawerNavigator (

    {
        Active:{ screen: Active },
        All:{ screen: All },
    },
    {
       contentComponent: drawerContentComponents
    });