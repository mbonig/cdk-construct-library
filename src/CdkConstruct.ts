import { kebab, pascal } from 'case';
import { AwsCdkConstructLibrary } from 'projen/lib/awscdk';
import { NpmAccess } from 'projen/lib/javascript';

export interface CdkConstructOptions {
  /**
   * The name of the construct. Should be formatted @matthewbonig/<name>.
   *
   * @example 'my-construct'
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
}

export class CdkConstruct extends AwsCdkConstructLibrary {

  constructor(options: CdkConstructOptions) {
    super({
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
      gitignore: ['.idea/', ...(options?.gitIgnore ?? [])],
      keywords: ['awscdk', 'cdk', ...(options.keywords ?? [])],
      depsUpgrade: false,
      publishToPypi: options.disablePublishToPypi ? undefined : {
        distName: `mbonig.${kebab(options.name)}`,
        module: `mbonig.${kebab(options.name)}`,
      },
      publishToNuget: options.disablePublishToNuGet ? undefined : {
        dotNetNamespace: `MBonig.${pascal(options.name)}`,
        packageId: `MBonig.${pascal(options.name)}`,
      },
      publishToMaven: {
        mavenGroupId: 'com.matthewbonig',
        javaPackage: `com.matthewbonig.${pascal(options.name)}`,
        mavenArtifactId: kebab(options.name),
      },
      publishToGo: options.disablePublishToGo ? undefined : {
        moduleName: 'github.com/mbonig/cdk-go',
        gitUserName: 'Matthew Bonig',
        gitUserEmail: 'matthew.bonig@gmail.com',
      },

    });
  }
}
