import { synthSnapshot } from 'projen/lib/util/synth';
import { parse } from 'yaml';
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

  test('repo is correct when not overridden', () => {
    const snapshot = getSnapshot();
    expect(snapshot['package.json'].repository.type).toEqual('git');
    expect(snapshot['package.json'].repository.url).toEqual('https://github.com/mbonig/test-construct.git');
  });

  test('repo is correct when overridden', () => {
    const snapshot = getSnapshot({
      repositoryName: 'my-test-construct',
    });
    expect(snapshot['package.json'].repository.type).toEqual('git');
    expect(snapshot['package.json'].repository.url).toEqual('https://github.com/mbonig/my-test-construct.git');
  });

  test('constructs version is correct when not overridden', () => {
    const snapshot = getSnapshot({});
    expect(snapshot['package.json'].devDependencies.constructs).toEqual('10.1.203');
  });

  test('constructs version is correct when overridden', () => {
    const snapshot = getSnapshot({
      constructsVersion: '10.1.204',
    });
    expect(snapshot['package.json'].devDependencies.constructs).toEqual('10.1.204');
  });

  test('npmAccess is public', () => {
    const snapshot = getSnapshot();
    expect(snapshot['package.json'].publishConfig.access).toEqual('public');
  });

  test('license is MIT', () => {
    const snapshot = getSnapshot();
    expect(snapshot['package.json'].license).toEqual('MIT');
  });

  test('description is used', () => {
    const snapshot = getSnapshot({
      description: 'This is a test',
    });
    expect(snapshot['package.json'].description).toEqual('This is a test');
  });

  test('gitignore includes .idea/', () => {
    const snapshot = getSnapshot();
    expect(snapshot['.gitignore']).toContain('.idea/');
  });

  test('Keywords are added', () => {
    const snapshot = getSnapshot({
      keywords: ['somethingelse'],
    });
    expect(snapshot['package.json'].keywords).toContain('awscdk');
    expect(snapshot['package.json'].keywords).toContain('cdk');
    expect(snapshot['package.json'].keywords).toContain('somethingelse');
  });

  test('depsUpgrade is false by default', () => {
    const snapshot = getSnapshot();
    expect(snapshot['.github/workflows/upgrade-main.yml']).toBeUndefined();
  });

  test('Publishing to PyPi is enabled by default', () => {
    const snapshot = getSnapshot();
    let releaseFile = snapshot['.github/workflows/release.yml'];
    releaseFile = parse(releaseFile);
    expect(releaseFile.jobs.release_pypi).toBeDefined();
  });

  test('Publishing to PyPi has good name', () => {
    const snapshot = getSnapshot();
    const packageFile = snapshot['package.json'];

    expect(packageFile.jsii.targets.python.distName).toEqual('mbonig.test-construct');
    expect(packageFile.jsii.targets.python.module).toEqual('mbonig.test-construct');
  });

  test('Publishing to PyPi kebab-cases the name', () => {
    const snapshot = getSnapshot({
      name: 'TestConstruct',
    });
    const packageFile = snapshot['package.json'];

    expect(packageFile.jsii.targets.python.distName).toEqual('mbonig.test-construct');
    expect(packageFile.jsii.targets.python.module).toEqual('mbonig.test-construct');
  });

  test('Can disable publishing to PyPi', () => {
    const snapshot = getSnapshot({
      disablePublishToPypi: true,
    });
    const packageFile = snapshot['package.json'];

    expect(packageFile.jsii.targets.python).toBeUndefined();
  });

  test('Published to NuGet by default', () => {
    const snapshot = getSnapshot({});
    const packageFile = snapshot['package.json'];

    expect(packageFile.jsii.targets.dotnet.namespace).toEqual('MBonig.TestConstruct');
    expect(packageFile.jsii.targets.dotnet.packageId).toEqual('MBonig.TestConstruct');
  });

  test('Can disable Published to NuGet', () => {
    const snapshot = getSnapshot({
      disablePublishToNuGet: true,
    });
    const packageFile = snapshot['package.json'];

    expect(packageFile.jsii.targets.dotnet).toBeUndefined();
  });

  test('Published to Maven by default', () => {
    const snapshot = getSnapshot({});
    const packageFile = snapshot['package.json'];

    expect(packageFile.jsii.targets.java.package).toEqual('com.matthewbonig.TestConstruct');
    expect(packageFile.jsii.targets.java.maven.groupId).toEqual('com.matthewbonig');
    expect(packageFile.jsii.targets.java.maven.artifactId).toEqual('test-construct');
  });

  test('Can disable Published to Maven', () => {
    const snapshot = getSnapshot({
      disablePublishToMaven: true,
    });
    const packageFile = snapshot['package.json'];

    expect(packageFile.jsii.targets.maven).toBeUndefined();
  });

  test('Published to Go by default', () => {
    const snapshot = getSnapshot({});
    const packageFile = snapshot['package.json'];


    expect(packageFile.jsii.targets.go.moduleName).toEqual('github.com/mbonig/cdk-go');
  });

  test('Can disable Published to go', () => {
    const snapshot = getSnapshot({
      disablePublishToGo: true,
    });
    const packageFile = snapshot['package.json'];

    expect(packageFile.jsii.targets.go).toBeUndefined();
  });

  test('Creates the starting construct file', () => {
    const snapshot = getSnapshot({});
    const constructFile = snapshot['src/TestConstruct.ts'];

    expect(constructFile).toMatchSnapshot();
  });

  test('Creates the index file', () => {
    const snapshot = getSnapshot({});
    const indexFile = snapshot['src/index.ts'];

    expect(indexFile).toMatchSnapshot();
  });

  test('Creates test file', () => {
    const snapshot = getSnapshot({});
    const testFile = snapshot['test/TestConstruct.test.ts'];

    expect(testFile).toMatchSnapshot();
  });

});
