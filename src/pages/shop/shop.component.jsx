import React from 'react';
import './shop.styles.scss';
import { Route, Routes } from 'react-router-dom';
import CollectionPropsPage from '../collection-prop/collection-props.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = () => (
  <div className='shop-page'>
    <Routes>
      <Route path='/' element={<CollectionsOverview />} />
      <Route path='/:collectionId' element={<CollectionPropsPage />} />
    </Routes>
  </div>
);

export default ShopPage;
