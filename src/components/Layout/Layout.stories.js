import React from 'react';
import Layout from './Layout';
import SearcBar from '../SearchBar/SearchBar';

export default {
    title: 'Layout',
    component: Layout
}

export const Index = () => (
    <Layout>
        <SearcBar />
    </Layout>
)