# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdkConstruct <a name="CdkConstruct" id="@matthewbonig/cdk-construct-library.CdkConstruct"></a>

#### Initializers <a name="Initializers" id="@matthewbonig/cdk-construct-library.CdkConstruct.Initializer"></a>

```typescript
import { CdkConstruct } from '@matthewbonig/cdk-construct-library'

new CdkConstruct(options: CdkConstructOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.Initializer.parameter.options">options</a></code> | <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions">CdkConstructOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@matthewbonig/cdk-construct-library.CdkConstruct.Initializer.parameter.options"></a>

- *Type:* <a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions">CdkConstructOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addCdkDependencies">addCdkDependencies</a></code> | Adds dependencies to AWS CDK modules. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.addCdkTestDependencies">addCdkTestDependencies</a></code> | Adds AWS CDK modules as dev dependencies. |

---

##### `toString` <a name="toString" id="@matthewbonig/cdk-construct-library.CdkConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@matthewbonig/cdk-construct-library.CdkConstruct.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@matthewbonig/cdk-construct-library.CdkConstruct.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@matthewbonig/cdk-construct-library.CdkConstruct.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@matthewbonig/cdk-construct-library.CdkConstruct.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@matthewbonig/cdk-construct-library.CdkConstruct.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@matthewbonig/cdk-construct-library.CdkConstruct.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@matthewbonig/cdk-construct-library.CdkConstruct.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@matthewbonig/cdk-construct-library.CdkConstruct.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@matthewbonig/cdk-construct-library.CdkConstruct.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@matthewbonig/cdk-construct-library.CdkConstruct.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@matthewbonig/cdk-construct-library.CdkConstruct.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@matthewbonig/cdk-construct-library.CdkConstruct.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@matthewbonig/cdk-construct-library.CdkConstruct.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@matthewbonig/cdk-construct-library.CdkConstruct.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@matthewbonig/cdk-construct-library.CdkConstruct.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@matthewbonig/cdk-construct-library.CdkConstruct.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@matthewbonig/cdk-construct-library.CdkConstruct.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@matthewbonig/cdk-construct-library.CdkConstruct.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@matthewbonig/cdk-construct-library.CdkConstruct.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@matthewbonig/cdk-construct-library.CdkConstruct.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@matthewbonig/cdk-construct-library.CdkConstruct.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@matthewbonig/cdk-construct-library.CdkConstruct.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@matthewbonig/cdk-construct-library.CdkConstruct.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@matthewbonig/cdk-construct-library.CdkConstruct.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@matthewbonig/cdk-construct-library.CdkConstruct.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@matthewbonig/cdk-construct-library.CdkConstruct.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@matthewbonig/cdk-construct-library.CdkConstruct.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@matthewbonig/cdk-construct-library.CdkConstruct.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@matthewbonig/cdk-construct-library.CdkConstruct.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@matthewbonig/cdk-construct-library.CdkConstruct.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@matthewbonig/cdk-construct-library.CdkConstruct.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@matthewbonig/cdk-construct-library.CdkConstruct.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@matthewbonig/cdk-construct-library.CdkConstruct.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@matthewbonig/cdk-construct-library.CdkConstruct.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@matthewbonig/cdk-construct-library.CdkConstruct.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@matthewbonig/cdk-construct-library.CdkConstruct.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@matthewbonig/cdk-construct-library.CdkConstruct.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@matthewbonig/cdk-construct-library.CdkConstruct.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@matthewbonig/cdk-construct-library.CdkConstruct.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@matthewbonig/cdk-construct-library.CdkConstruct.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@matthewbonig/cdk-construct-library.CdkConstruct.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@matthewbonig/cdk-construct-library.CdkConstruct.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@matthewbonig/cdk-construct-library.CdkConstruct.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@matthewbonig/cdk-construct-library.CdkConstruct.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@matthewbonig/cdk-construct-library.CdkConstruct.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@matthewbonig/cdk-construct-library.CdkConstruct.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@matthewbonig/cdk-construct-library.CdkConstruct.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@matthewbonig/cdk-construct-library.CdkConstruct.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@matthewbonig/cdk-construct-library.CdkConstruct.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@matthewbonig/cdk-construct-library.CdkConstruct.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@matthewbonig/cdk-construct-library.CdkConstruct.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@matthewbonig/cdk-construct-library.CdkConstruct.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@matthewbonig/cdk-construct-library.CdkConstruct.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@matthewbonig/cdk-construct-library.CdkConstruct.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@matthewbonig/cdk-construct-library.CdkConstruct.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@matthewbonig/cdk-construct-library.CdkConstruct.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@matthewbonig/cdk-construct-library.CdkConstruct.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### ~~`addCdkDependencies`~~ <a name="addCdkDependencies" id="@matthewbonig/cdk-construct-library.CdkConstruct.addCdkDependencies"></a>

```typescript
public addCdkDependencies(deps: string): void
```

Adds dependencies to AWS CDK modules.

Since this is a library project, dependencies will be added as peer dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@matthewbonig/cdk-construct-library.CdkConstruct.addCdkDependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

##### ~~`addCdkTestDependencies`~~ <a name="addCdkTestDependencies" id="@matthewbonig/cdk-construct-library.CdkConstruct.addCdkTestDependencies"></a>

```typescript
public addCdkTestDependencies(deps: string): void
```

Adds AWS CDK modules as dev dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@matthewbonig/cdk-construct-library.CdkConstruct.addCdkTestDependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@matthewbonig/cdk-construct-library.CdkConstruct.isConstruct"></a>

```typescript
import { CdkConstruct } from '@matthewbonig/cdk-construct-library'

CdkConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/cdk-construct-library.CdkConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@matthewbonig/cdk-construct-library.CdkConstruct.isProject"></a>

```typescript
import { CdkConstruct } from '@matthewbonig/cdk-construct-library'

CdkConstruct.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/cdk-construct-library.CdkConstruct.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@matthewbonig/cdk-construct-library.CdkConstruct.of"></a>

```typescript
import { CdkConstruct } from '@matthewbonig/cdk-construct-library'

CdkConstruct.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@matthewbonig/cdk-construct-library.CdkConstruct.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The target CDK version for this library. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The target CDK version for this library.

---

##### ~~`version`~~<sup>Required</sup> <a name="version" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.version"></a>

- *Deprecated:* use `cdkVersion`

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstruct.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@matthewbonig/cdk-construct-library.CdkConstruct.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

## Structs <a name="Structs" id="Structs"></a>

### CdkConstructOptions <a name="CdkConstructOptions" id="@matthewbonig/cdk-construct-library.CdkConstructOptions"></a>

#### Initializer <a name="Initializer" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.Initializer"></a>

```typescript
import { CdkConstructOptions } from '@matthewbonig/cdk-construct-library'

const cdkConstructOptions: CdkConstructOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.name">name</a></code> | <code>string</code> | The name of the construct. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The version of the CDK to use. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | The version of the constructs library to use. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.description">description</a></code> | <code>string</code> | The description of the construct. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.disablePublishToGo">disablePublishToGo</a></code> | <code>boolean</code> | Disable publishing to Go. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.disablePublishToMaven">disablePublishToMaven</a></code> | <code>boolean</code> | Disable publishing to Maven. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.disablePublishToNuGet">disablePublishToNuGet</a></code> | <code>boolean</code> | Disable publishing to NuGet. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.disablePublishToPypi">disablePublishToPypi</a></code> | <code>boolean</code> | Disable publishing to PyPi. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.gitIgnore">gitIgnore</a></code> | <code>string[]</code> | Any additional entries to add to the .gitignore file. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Additional keywords to include in the package.json file. |
| <code><a href="#@matthewbonig/cdk-construct-library.CdkConstructOptions.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of the repository. |

---

##### `name`<sup>Required</sup> <a name="name" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* 'my-construct'

The name of the construct.

Should be formatted @matthewbonig/<name>.

---

*Example*

```typescript
'my-construct'
```


##### `cdkVersion`<sup>Optional</sup> <a name="cdkVersion" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* '2.85.0'

The version of the CDK to use.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* '10.1.203'

The version of the constructs library to use.

---

##### `description`<sup>Optional</sup> <a name="description" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the construct.

---

##### `disablePublishToGo`<sup>Optional</sup> <a name="disablePublishToGo" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.disablePublishToGo"></a>

```typescript
public readonly disablePublishToGo: boolean;
```

- *Type:* boolean
- *Default:* false

Disable publishing to Go.

---

##### `disablePublishToMaven`<sup>Optional</sup> <a name="disablePublishToMaven" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.disablePublishToMaven"></a>

```typescript
public readonly disablePublishToMaven: boolean;
```

- *Type:* boolean
- *Default:* false

Disable publishing to Maven.

---

##### `disablePublishToNuGet`<sup>Optional</sup> <a name="disablePublishToNuGet" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.disablePublishToNuGet"></a>

```typescript
public readonly disablePublishToNuGet: boolean;
```

- *Type:* boolean
- *Default:* false

Disable publishing to NuGet.

---

##### `disablePublishToPypi`<sup>Optional</sup> <a name="disablePublishToPypi" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.disablePublishToPypi"></a>

```typescript
public readonly disablePublishToPypi: boolean;
```

- *Type:* boolean
- *Default:* false

Disable publishing to PyPi.

---

##### `gitIgnore`<sup>Optional</sup> <a name="gitIgnore" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.gitIgnore"></a>

```typescript
public readonly gitIgnore: string[];
```

- *Type:* string[]

Any additional entries to add to the .gitignore file.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Additional keywords to include in the package.json file.

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@matthewbonig/cdk-construct-library.CdkConstructOptions.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string
- *Default:* "https://github.com/mbonig/<name>.git"

The name of the repository.

If not specified, the name will be used.

---

*Example*

```typescript
'my-test-construct'
```




