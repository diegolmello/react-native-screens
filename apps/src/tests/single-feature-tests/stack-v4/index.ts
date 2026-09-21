import type { ScenarioGroup } from '@apps/tests/shared/helpers';
import TestStackV4Orientation from './stack-v4-orientation';
import TestStackV4TitleImageSource from './stack-v4-title-image-source';

export { default as TestStackV4Orientation } from './stack-v4-orientation';
export { default as TestStackV4TitleImageSource } from './stack-v4-title-image-source';

const scenarios = { TestStackV4Orientation, TestStackV4TitleImageSource };

const StackV4ScenarioGroup: ScenarioGroup<keyof typeof scenarios> = {
  name: 'Stack v4',
  details: 'Single feature tests for Stack v4',
  scenarios,
};

export default StackV4ScenarioGroup;
