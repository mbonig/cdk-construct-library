import { kebab, pascal, snake } from 'case';
import { Project, SampleFile } from 'projen';
import { AwsCdkConstructLibrary, LambdaRuntime } from 'projen/lib/awscdk';
import { NpmAccess } from 'projen/lib/javascript';

export interface CdkConstructOptions {

  /**
   * The name of the construct. Should be formatted @matthewbonig/<name>.
   *
   * @default "my-construct"
   */
  readonly name: string;

  /**
   * The version of the CDK to use.
   *
   * @default '2.85.0'
   */
  readonly cdkVersion?: string;

  /**
   * The name of the repository. If not specified, the name will be used.
   *
   * @example 'my-test-construct'
   * @default "https://github.com/mbonig/<name>.git"
   */
  readonly repositoryName?: string;

  /**
   * The version of the constructs library to use.
   *
   * @default '10.1.203'
   */
  readonly constructsVersion?: string;

  /**
   * The description of the construct.
   */
  readonly description?: string;

  /**
   * Any additional entries to add to the .gitignore file.
   */
  readonly gitIgnore?: string[];

  /**
   * Additional keywords to include in the package.json file.
   */
  readonly keywords?: string[];

  /**
   * Disable publishing to PyPi.
   *
   * @default false
   */
  readonly disablePublishToPypi?: boolean;

  /**
   * Disable publishing to NuGet.
   *
   * @default false
   */
  readonly disablePublishToNuGet?: boolean;

  /**
   * Disable publishing to Maven.
   *
   * @default false
   */
  readonly disablePublishToMaven?: boolean;

  /**
   * Disable publishing to Go.
   *
   * @default false
   */
  readonly disablePublishToGo?: boolean;

  /**
   * Additional depedencies to add to the project.
   */
  readonly deps?: string[];

  /**
   * Additional dev dependencies to add to the project.
   */
  readonly devDeps?: string[];

  /**
   * Additional peer dependencies to add to the project.
   */
  readonly peerDeps?: string[];

  /**
   * Additional bundled dependencies to add to the project.
   */
  readonly bundledDeps?: string[];

  /**
   * The projen version to use.
   */
  readonly projenVersion?: string;

  /**
   * The runtime for the auto-generated Lambda function.
   *
   * @default LambdaRuntime.NODEJS_20_X
   */
  readonly lambdaRuntime?: LambdaRuntime;

}

class SampleConstructFile extends SampleFile {
  constructor(scope: Project, constructName: string) {
    const propsInterfaceName = `${pascal(constructName)}Props`;
    super(scope, `src/${pascal(constructName)}.ts`, {
      contents: [
        "import { Construct } from 'constructs';",
        '',
        `export interface ${propsInterfaceName} {}`,
        '',
        `export class ${pascal(constructName)} extends Construct {`,
        `  constructor(scope: Construct, id: string, props: ${propsInterfaceName}) {`,
        '    super(scope, id);',
        '    const {} = props;',
        '  }',
        '}',
      ].join('\n'),
    });
  }
}

class ConstructIndexFile extends SampleFile {
  constructor(scope: Project, constructName: string) {
    super(scope, 'src/index.ts', {
      contents: `export * from \'./${pascal(constructName)}\';`,
    });
  }

}

class TestFile extends SampleFile {
  constructor(scope: Project, constructName: string) {
    super(scope, `test/${pascal(constructName)}.test.ts`, {
      contents: [
        "import { Stack } from 'aws-cdk-lib';",
        "import { Template } from 'aws-cdk-lib/assertions';",
        `import { ${pascal(constructName)} } from '../src';`,

        'test(\'Snapshot\', () => {',
        '  // GIVEN',
        '  const stack = new Stack();',
        '',
        '  // WHEN',
        `  new ${pascal(constructName)}(stack, '${pascal(constructName)}', {});`,
        '',
        '  // THEN',
        '  const assert = Template.fromStack(stack);',
        '  expect(assert.toJSON()).toMatchSnapshot();',
        '});',
      ].join('\n'),
    });
  }

}

export class CdkConstruct extends AwsCdkConstructLibrary {

  constructor(options: CdkConstructOptions) {
    super({
      ...options,
      author: 'Matthew Bonig',
      authorAddress: 'matthew.bonig@gmail.com',
      description: options.description,
      cdkVersion: options.cdkVersion || '2.85.0',
      constructsVersion: options.constructsVersion || '10.1.203',
      defaultReleaseBranch: 'main',
      name: `@matthewbonig/${options.name}`,
      repositoryUrl: `https://github.com/mbonig/${options.repositoryName || options.name}.git`,
      license: 'MIT',
      npmAccess: NpmAccess.PUBLIC,
      projenrcTs: true,
      gitignore: ['.idea/', ...(options?.gitIgnore ?? [])],
      keywords: ['awscdk', 'cdk', ...(options.keywords ?? [])],
      projenVersion: options.projenVersion || '~0.88.2',
      jestOptions: {
        jestVersion: '28',
      },
      jsiiVersion: '~5.5.0',
      depsUpgrade: false,
      deps: options?.deps,
      devDeps: options?.devDeps,
      peerDeps: options?.peerDeps,
      bundledDeps: options?.bundledDeps,
      publishToPypi: options.disablePublishToPypi ? undefined : {
        distName: `mbonig.${kebab(options.name)}`,
        module: `mbonig_${snake(options.name)}`,
      },
      publishToNuget: options.disablePublishToNuGet ? undefined : {
        dotNetNamespace: `MBonig.${pascal(options.name)}`,
        packageId: `MBonig.${pascal(options.name)}`,
      },
      publishToMaven: options.disablePublishToMaven ? undefined : {
        mavenGroupId: 'com.matthewbonig',
        javaPackage: `com.matthewbonig.${pascal(options.name)}`,
        mavenArtifactId: kebab(options.name),
      },
      publishToGo: options.disablePublishToGo ? undefined : {
        moduleName: 'github.com/mbonig/cdk-go',
        gitUserName: 'Matthew Bonig',
        gitUserEmail: 'matthew.bonig@gmail.com',
      },
      sampleCode: false,
      lambdaOptions: {
        runtime: options.lambdaRuntime || LambdaRuntime.NODEJS_20_X,
      },
    });

    new SampleConstructFile(this, options.name);
    new ConstructIndexFile(this, options.name);
    new TestFile(this, options.name);
  }
}
