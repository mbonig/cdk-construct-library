import { cdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

let projenVersion = '~0.88.2';
const project = new cdk.JsiiProject({
  author: 'Matthew Bonig',
  authorAddress: 'matthew.bonig@gmail.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  projenVersion: projenVersion,
  name: '@matthewbonig/cdk-construct-library',
  npmAccess: NpmAccess.PUBLIC,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mbonig/cdk-construct-library.git',
  deps: [`projen@${projenVersion}`, 'yaml', 'case'],
  peerDeps: [`projen@${projenVersion}`, 'constructs'],
  bundledDeps: ['yaml', 'case'],
  depsUpgrade: false,
  gitignore: ['!/test/.jsii'],
});

project.synth();
