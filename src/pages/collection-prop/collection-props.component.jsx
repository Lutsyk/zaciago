import React from 'react';
import CollectionPage from '../collection/collection.component';
import { useParams } from 'react-router-dom';


const CollectionPropsPage = () => {
  const { collectionId } = useParams();
  return <CollectionPage collectionId={collectionId} />;
};

export default CollectionPropsPage;
