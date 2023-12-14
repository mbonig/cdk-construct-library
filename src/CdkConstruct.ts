import { AwsCdkConstructLibrary } from 'projen/lib/awscdk';

export interface CdkConstructOptions {
  /**
   * The name of the construct. Should be formatted @matthewbonig/<name>.
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
}

export class CdkConstruct extends AwsCdkConstructLibrary {

  constructor(options: CdkConstructOptions) {
    super({
      author: 'Matthew Bonig',
      authorAddress: 'matthew.bonig@gmail.com',
      cdkVersion: options.cdkVersion || '2.85.0',
      constructsVersion: '10.1.203',
      defaultReleaseBranch: 'main',
      name: `@matthewbonig/${options.name}`,
      repositoryUrl: `https://github.com/mbonig/${options.repositoryName || options.name}.git`,

    });
  }
}
