import { StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { Box, FlatList, Flex, HStack, ScrollView } from 'native-base';

type Props = {};

const StyledFlexHorizontal = ({ children }: PropsWithChildren<Props>) => {
  return (
    <ScrollView horizontal>
      <Flex style={styles.flexContainer}>{children}</Flex>
    </ScrollView>
  );
};

export default StyledFlexHorizontal;

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    flex: 1,
    overflow: 'scroll',
    padding: 15,
    gap: 10,
    width: '100%'
  }
});
