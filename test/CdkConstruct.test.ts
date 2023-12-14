import { synthSnapshot } from 'projen/lib/util/synth';
import { CdkConstruct, CdkConstructOptions } from '../src';

describe('CdkConstruct', () => {
  function getSnapshot(options?: Partial<CdkConstructOptions>) {
    const project = new CdkConstruct({
      name: 'test-construct',
      ...options,
    });
    return synthSnapshot(project);
  }

  test('Author is me', () => {
    const snapshot = getSnapshot();
    expect(snapshot['package.json'].author.name).toEqual('Matthew Bonig');
  });

  test('Author address is my email', () => {
    const snapshot = getSnapshot();
    expect(snapshot['package.json'].author.email).toEqual('matthew.bonig@gmail.com');
  });

  test('CDK version defaults to 2.85.0', () => {
    const snapshot = getSnapshot();
    expect(snapshot['package.json'].peerDependencies['aws-cdk-lib']).toEqual('^2.85.0');
  });

  test('CDK version can be overridden', () => {
    const snapshot = getSnapshot({
      cdkVersion: '2.114.0',
    });
    expect(snapshot['package.json'].peerDependencies['aws-cdk-lib']).toEqual('^2.114.0');
  });

  test('package name is correct', () => {
    const snapshot = getSnapshot();
    expect(snapshot['package.json'].name).toEqual('@matthewbonig/test-construct');
  });

  test('repo is correct when not overriden', () => {
    const snapshot = getSnapshot();
    expect(snapshot['package.json'].repository.type).toEqual('git');
    expect(snapshot['package.json'].repository.url).toEqual('https://github.com/mbonig/test-construct.git');
  });

  test('repo is correct when overriden', () => {
    const snapshot = getSnapshot({
      repositoryName: 'my-test-construct',
    });
    expect(snapshot['package.json'].repository.type).toEqual('git');
    expect(snapshot['package.json'].repository.url).toEqual('https://github.com/mbonig/my-test-construct.git');
  });


});
