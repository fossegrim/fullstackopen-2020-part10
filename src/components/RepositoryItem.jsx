import React from 'react';
import { View } from 'react-native';

import Text from './Text';

export const RepositoryItem = (props) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount
  } = props.item;

  return (
    <View>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
      <Text>Reviews: {reviewCount}</Text>
    </View>
  );
};
