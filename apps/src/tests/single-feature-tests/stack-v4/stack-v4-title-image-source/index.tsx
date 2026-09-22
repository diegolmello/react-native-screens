import searchIcon from '@assets/search_black.png';
import bellIcon from '@assets/variableIcons/icon.png';
import { createScenario } from '@apps/tests/shared/helpers';
import React, { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, Text, View } from 'react-native';
import {
  Screen,
  ScreenStack,
  ScreenStackHeaderConfig,
  ScreenStackHeaderCenterView,
  ScreenStackHeaderSearchBarView,
  SearchBar,
  type HeaderBarButtonItem,
} from 'react-native-screens';
import { scenarioDescription } from './scenario-description';

const kitchenSinkHeaderLeftBarButtonItems: HeaderBarButtonItem[] = [
  {
    type: 'button',
    icon: { type: 'sfSymbol', name: 'line.3.horizontal' },
    accessibilityLabel: 'Open drawer',
    onPress: () => Alert.alert('Drawer opened'),
  },
];

const kitchenSinkHeaderRightBarButtonItems: HeaderBarButtonItem[] = [
  {
    type: 'button',
    icon: { type: 'sfSymbol', name: 'square.and.arrow.up' },
    accessibilityLabel: 'Share',
    onPress: () => Alert.alert('Share pressed'),
  },
  {
    type: 'menu',
    icon: { type: 'sfSymbol', name: 'ellipsis.circle' },
    menu: {
      title: 'More actions',
      items: [
        {
          type: 'action',
          title: 'Rename',
          icon: { type: 'sfSymbol', name: 'pencil' },
          onPress: () => Alert.alert('Rename pressed'),
        },
        {
          type: 'action',
          title: 'Archive',
          icon: { type: 'sfSymbol', name: 'archivebox' },
          onPress: () => Alert.alert('Archive pressed'),
        },
        {
          type: 'action',
          title: 'Delete',
          icon: { type: 'sfSymbol', name: 'trash' },
          destructive: true,
          onPress: () => Alert.alert('Delete pressed'),
        },
      ],
    },
  },
];

const REMOTE_ICON_SOURCE = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 32,
  height: 32,
};

const UNRESOLVABLE_ICON_SOURCE = {
  uri: 'https://reactnative.dev/img/this-image-does-not-exist.png',
  width: 32,
  height: 32,
};

const RACING_ICON_URI = `https://reactnative.dev/img/tiny_logo.png?racing=${Date.now()}`;

function StackV4TitleImageSource() {
  const [pushedScreen, setPushedScreen] = useState<
    | 'scaled'
    | 'tinted'
    | 'plain'
    | 'subtitle'
    | 'both'
    | 'remote'
    | 'unresolvable'
    | 'racing'
    | 'large'
    | 'custom'
    | 'kitchenSink'
    | null
  >(null);

  return (
    <ScreenStack style={{ flex: 1 }}>
      <Screen key="root" activityState={2} isNativeStack>
        <ScreenStackHeaderConfig
          title="general"
          titleImageSource={searchIcon}
        />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button
            title="Push larger title font"
            onPress={() => setPushedScreen('scaled')}
          />
          <Button
            title="Push tinted title"
            onPress={() => setPushedScreen('tinted')}
          />
          <Button
            title="Push title without icon"
            onPress={() => setPushedScreen('plain')}
          />
          <Button
            title="Push subtitle icon only"
            onPress={() => setPushedScreen('subtitle')}
          />
          <Button
            title="Push title and subtitle icons"
            onPress={() => setPushedScreen('both')}
          />
          <Button
            title="Push remote icon"
            onPress={() => setPushedScreen('remote')}
          />
          <Button
            title="Push unresolvable icon"
            onPress={() => setPushedScreen('unresolvable')}
          />
          <Button
            title="Push title changing mid-load"
            onPress={() => setPushedScreen('racing')}
          />
          <Button
            title="Push large title"
            onPress={() => setPushedScreen('large')}
          />
          <Button
            title="Push custom title view"
            onPress={() => setPushedScreen('custom')}
          />
          <Button
            title="Push kitchen sink header"
            onPress={() => setPushedScreen('kitchenSink')}
          />
        </View>
      </Screen>
      {pushedScreen === 'scaled' && (
        <Screen
          key="scaled"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <ScreenStackHeaderConfig
            title="scaled"
            titleFontSize={28}
            titleFontFamily="Georgia"
            titleColor="tomato"
            titleImageSource={searchIcon}
          />
          <View style={{ flex: 1 }} />
        </Screen>
      )}
      {pushedScreen === 'tinted' && (
        <Screen
          key="tinted"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <ScreenStackHeaderConfig
            title="tinted"
            titleColor="tomato"
            titleImageSource={searchIcon}
          />
          <View style={{ flex: 1 }} />
        </Screen>
      )}
      {pushedScreen === 'plain' && (
        <Screen
          key="plain"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <ScreenStackHeaderConfig title="plain" subtitle="no icons here" />
          <View style={{ flex: 1 }} />
        </Screen>
      )}
      {pushedScreen === 'subtitle' && (
        <Screen
          key="subtitle"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <ScreenStackHeaderConfig
            title="subtitle only"
            subtitle="12 members"
            subtitleImageSource={searchIcon}
          />
          <View style={{ flex: 1 }} />
        </Screen>
      )}
      {pushedScreen === 'both' && (
        <Screen
          key="both"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <ScreenStackHeaderConfig
            title="both"
            subtitle="12 members"
            titleImageSource={searchIcon}
            subtitleImageSource={bellIcon}
          />
          <View style={{ flex: 1 }} />
        </Screen>
      )}
      {pushedScreen === 'remote' && (
        <Screen
          key="remote"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <ScreenStackHeaderConfig
            title="remote"
            titleImageSource={REMOTE_ICON_SOURCE}
          />
          <View style={{ flex: 1 }} />
        </Screen>
      )}
      {pushedScreen === 'unresolvable' && (
        <Screen
          key="unresolvable"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <ScreenStackHeaderConfig
            title="unresolvable"
            titleImageSource={UNRESOLVABLE_ICON_SOURCE}
          />
          <View style={{ flex: 1 }} />
        </Screen>
      )}
      {pushedScreen === 'racing' && (
        <Screen
          key="racing"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <RacingTitleHeaderConfig />
          <View style={{ flex: 1 }} />
        </Screen>
      )}
      {pushedScreen === 'large' && (
        <Screen
          key="large"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ minHeight: 1800 }}>
            <Text>Scroll to collapse the large title</Text>
          </ScrollView>
          <ScreenStackHeaderConfig
            title="large"
            titleImageSource={searchIcon}
            largeTitle
            translucent
          />
        </Screen>
      )}
      {pushedScreen === 'custom' && (
        <Screen
          key="custom"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <ScreenStackHeaderConfig
            title="native title"
            subtitle="native subtitle"
            titleImageSource={searchIcon}
            subtitleImageSource={bellIcon}>
            <ScreenStackHeaderCenterView>
              <Text style={{ color: 'tomato' }}>Custom title view</Text>
            </ScreenStackHeaderCenterView>
          </ScreenStackHeaderConfig>
          <View style={{ flex: 1 }} />
        </Screen>
      )}
      {pushedScreen === 'kitchenSink' && (
        <Screen
          key="kitchenSink"
          activityState={2}
          isNativeStack
          onDismissed={() => setPushedScreen(null)}>
          <ScreenStackHeaderConfig
            title="Inbox"
            subtitle="12 unread"
            titleImageSource={searchIcon}
            subtitleImageSource={bellIcon}
            headerLeftBarButtonItems={kitchenSinkHeaderLeftBarButtonItems}
            headerRightBarButtonItems={kitchenSinkHeaderRightBarButtonItems}>
            <ScreenStackHeaderSearchBarView>
              <SearchBar placeholder="Search inbox" />
            </ScreenStackHeaderSearchBarView>
          </ScreenStackHeaderConfig>
          <View style={{ flex: 1 }} />
        </Screen>
      )}
    </ScreenStack>
  );
}

function RacingTitleHeaderConfig() {
  const [title, setTitle] = useState('stale title');

  useEffect(() => {
    const timeout = setTimeout(() => setTitle('newest title'), 150);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ScreenStackHeaderConfig
      title={title}
      titleImageSource={{ ...REMOTE_ICON_SOURCE, uri: RACING_ICON_URI }}
    />
  );
}

export default createScenario(StackV4TitleImageSource, scenarioDescription);
