import React, {useCallback, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function Content({
  children,
  contentStyle,
  scrollViewProps,
  refresh,
  onRefreshing,
  autoInput,
}) {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(prev => !prev);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
    if (onRefreshing) {
      await onRefreshing();
    }
  }, [refreshing]);
  if (autoInput) {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        refreshControl={
          refresh ? (
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          ) : null
        }
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        bounces={!!refresh}
        contentContainerStyle={contentStyle}
        {...scrollViewProps}>
        {children}
      </KeyboardAwareScrollView>
    );
  }
  return (
    <ScrollView
      refreshControl={
        refresh ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : null
      }
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
      bounces={!!refresh}
      contentContainerStyle={contentStyle}
      {...scrollViewProps}>
      {children}
    </ScrollView>
  );
}

export default Content;
