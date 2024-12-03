# `waypointTemplate` Submodule <a name="`waypointTemplate` Submodule" id="@cdktf/provider-hcp.waypointTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointTemplate <a name="WaypointTemplate" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template hcp_waypoint_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

new waypointTemplate.WaypointTemplate(scope: Construct, id: string, config: WaypointTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig">WaypointTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig">WaypointTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putTerraformCloudWorkspaceDetails">putTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putVariableOptions">putVariableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetReadmeMarkdownTemplate">resetReadmeMarkdownTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformAgentPoolId">resetTerraformAgentPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformCloudWorkspaceDetails">resetTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformExecutionMode">resetTerraformExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetUseModuleReadme">resetUseModuleReadme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetVariableOptions">resetVariableOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTerraformCloudWorkspaceDetails` <a name="putTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putTerraformCloudWorkspaceDetails"></a>

```typescript
public putTerraformCloudWorkspaceDetails(value: WaypointTemplateTerraformCloudWorkspaceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putTerraformCloudWorkspaceDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a>

---

##### `putVariableOptions` <a name="putVariableOptions" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putVariableOptions"></a>

```typescript
public putVariableOptions(value: IResolvable | WaypointTemplateVariableOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putVariableOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetReadmeMarkdownTemplate` <a name="resetReadmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetReadmeMarkdownTemplate"></a>

```typescript
public resetReadmeMarkdownTemplate(): void
```

##### `resetTerraformAgentPoolId` <a name="resetTerraformAgentPoolId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformAgentPoolId"></a>

```typescript
public resetTerraformAgentPoolId(): void
```

##### `resetTerraformCloudWorkspaceDetails` <a name="resetTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformCloudWorkspaceDetails"></a>

```typescript
public resetTerraformCloudWorkspaceDetails(): void
```

##### `resetTerraformExecutionMode` <a name="resetTerraformExecutionMode" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformExecutionMode"></a>

```typescript
public resetTerraformExecutionMode(): void
```

##### `resetUseModuleReadme` <a name="resetUseModuleReadme" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetUseModuleReadme"></a>

```typescript
public resetUseModuleReadme(): void
```

##### `resetVariableOptions` <a name="resetVariableOptions" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetVariableOptions"></a>

```typescript
public resetVariableOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WaypointTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isConstruct"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

waypointTemplate.WaypointTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformElement"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

waypointTemplate.WaypointTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformResource"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

waypointTemplate.WaypointTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

waypointTemplate.WaypointTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WaypointTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WaypointTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WaypointTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaypointTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.variableOptions">variableOptions</a></code> | <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList">WaypointTemplateVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.readmeMarkdownTemplateInput">readmeMarkdownTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformAgentPoolIdInput">terraformAgentPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformCloudWorkspaceDetailsInput">terraformCloudWorkspaceDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformExecutionModeInput">terraformExecutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformNoCodeModuleSourceInput">terraformNoCodeModuleSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformProjectIdInput">terraformProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.useModuleReadmeInput">useModuleReadmeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.variableOptionsInput">variableOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformAgentPoolId">terraformAgentPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformExecutionMode">terraformExecutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformNoCodeModuleSource">terraformNoCodeModuleSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformProjectId">terraformProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.useModuleReadme">useModuleReadme</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `terraformCloudWorkspaceDetails`<sup>Required</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformCloudWorkspaceDetails"></a>

```typescript
public readonly terraformCloudWorkspaceDetails: WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `variableOptions`<sup>Required</sup> <a name="variableOptions" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.variableOptions"></a>

```typescript
public readonly variableOptions: WaypointTemplateVariableOptionsList;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList">WaypointTemplateVariableOptionsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `readmeMarkdownTemplateInput`<sup>Optional</sup> <a name="readmeMarkdownTemplateInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.readmeMarkdownTemplateInput"></a>

```typescript
public readonly readmeMarkdownTemplateInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `terraformAgentPoolIdInput`<sup>Optional</sup> <a name="terraformAgentPoolIdInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformAgentPoolIdInput"></a>

```typescript
public readonly terraformAgentPoolIdInput: string;
```

- *Type:* string

---

##### `terraformCloudWorkspaceDetailsInput`<sup>Optional</sup> <a name="terraformCloudWorkspaceDetailsInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformCloudWorkspaceDetailsInput"></a>

```typescript
public readonly terraformCloudWorkspaceDetailsInput: IResolvable | WaypointTemplateTerraformCloudWorkspaceDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a>

---

##### `terraformExecutionModeInput`<sup>Optional</sup> <a name="terraformExecutionModeInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformExecutionModeInput"></a>

```typescript
public readonly terraformExecutionModeInput: string;
```

- *Type:* string

---

##### `terraformNoCodeModuleSourceInput`<sup>Optional</sup> <a name="terraformNoCodeModuleSourceInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformNoCodeModuleSourceInput"></a>

```typescript
public readonly terraformNoCodeModuleSourceInput: string;
```

- *Type:* string

---

##### `terraformProjectIdInput`<sup>Optional</sup> <a name="terraformProjectIdInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformProjectIdInput"></a>

```typescript
public readonly terraformProjectIdInput: string;
```

- *Type:* string

---

##### `useModuleReadmeInput`<sup>Optional</sup> <a name="useModuleReadmeInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.useModuleReadmeInput"></a>

```typescript
public readonly useModuleReadmeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `variableOptionsInput`<sup>Optional</sup> <a name="variableOptionsInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.variableOptionsInput"></a>

```typescript
public readonly variableOptionsInput: IResolvable | WaypointTemplateVariableOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `readmeMarkdownTemplate`<sup>Required</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.readmeMarkdownTemplate"></a>

```typescript
public readonly readmeMarkdownTemplate: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `terraformAgentPoolId`<sup>Required</sup> <a name="terraformAgentPoolId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformAgentPoolId"></a>

```typescript
public readonly terraformAgentPoolId: string;
```

- *Type:* string

---

##### `terraformExecutionMode`<sup>Required</sup> <a name="terraformExecutionMode" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformExecutionMode"></a>

```typescript
public readonly terraformExecutionMode: string;
```

- *Type:* string

---

##### `terraformNoCodeModuleSource`<sup>Required</sup> <a name="terraformNoCodeModuleSource" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformNoCodeModuleSource"></a>

```typescript
public readonly terraformNoCodeModuleSource: string;
```

- *Type:* string

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformProjectId"></a>

```typescript
public readonly terraformProjectId: string;
```

- *Type:* string

---

##### `useModuleReadme`<sup>Required</sup> <a name="useModuleReadme" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.useModuleReadme"></a>

```typescript
public readonly useModuleReadme: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointTemplateConfig <a name="WaypointTemplateConfig" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.Initializer"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

const waypointTemplateConfig: waypointTemplate.WaypointTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.name">name</a></code> | <code>string</code> | The name of the Template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.summary">summary</a></code> | <code>string</code> | A brief description of the template, up to 110 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformNoCodeModuleSource">terraformNoCodeModuleSource</a></code> | <code>string</code> | Terraform Cloud No-Code Module details. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformProjectId">terraformProjectId</a></code> | <code>string</code> | The ID of the Terraform Cloud Project to create workspaces in. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.description">description</a></code> | <code>string</code> | A description of the template, along with when and why it should be used, up to 500 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.labels">labels</a></code> | <code>string[]</code> | List of labels attached to this Template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the Waypoint Template is located. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>string</code> | Instructions for using the template (markdown format supported). |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformAgentPoolId">terraformAgentPoolId</a></code> | <code>string</code> | The ID of the agent pool to use for Terraform operations, for workspaces created for applications using this template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformExecutionMode">terraformExecutionMode</a></code> | <code>string</code> | The execution mode of the HCP Terraform workspaces created for applications using this template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.useModuleReadme">useModuleReadme</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, will auto-import the readme form the Terraform odule used. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.variableOptions">variableOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>[]</code> | List of variable options for the template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#name WaypointTemplate#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

A brief description of the template, up to 110 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#summary WaypointTemplate#summary}

---

##### `terraformNoCodeModuleSource`<sup>Required</sup> <a name="terraformNoCodeModuleSource" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformNoCodeModuleSource"></a>

```typescript
public readonly terraformNoCodeModuleSource: string;
```

- *Type:* string

Terraform Cloud No-Code Module details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#terraform_no_code_module_source WaypointTemplate#terraform_no_code_module_source}

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformProjectId"></a>

```typescript
public readonly terraformProjectId: string;
```

- *Type:* string

The ID of the Terraform Cloud Project to create workspaces in.

The ID is found on the Terraform Cloud Project settings page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#terraform_project_id WaypointTemplate#terraform_project_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the template, along with when and why it should be used, up to 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#description WaypointTemplate#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

List of labels attached to this Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#labels WaypointTemplate#labels}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the Waypoint Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#project_id WaypointTemplate#project_id}

---

##### `readmeMarkdownTemplate`<sup>Optional</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.readmeMarkdownTemplate"></a>

```typescript
public readonly readmeMarkdownTemplate: string;
```

- *Type:* string

Instructions for using the template (markdown format supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#readme_markdown_template WaypointTemplate#readme_markdown_template}

---

##### `terraformAgentPoolId`<sup>Optional</sup> <a name="terraformAgentPoolId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformAgentPoolId"></a>

```typescript
public readonly terraformAgentPoolId: string;
```

- *Type:* string

The ID of the agent pool to use for Terraform operations, for workspaces created for applications using this template.

Required if terraform_execution_mode is set to 'agent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#terraform_agent_pool_id WaypointTemplate#terraform_agent_pool_id}

---

##### `terraformCloudWorkspaceDetails`<sup>Optional</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformCloudWorkspaceDetails"></a>

```typescript
public readonly terraformCloudWorkspaceDetails: WaypointTemplateTerraformCloudWorkspaceDetails;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#terraform_cloud_workspace_details WaypointTemplate#terraform_cloud_workspace_details}

---

##### `terraformExecutionMode`<sup>Optional</sup> <a name="terraformExecutionMode" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformExecutionMode"></a>

```typescript
public readonly terraformExecutionMode: string;
```

- *Type:* string

The execution mode of the HCP Terraform workspaces created for applications using this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#terraform_execution_mode WaypointTemplate#terraform_execution_mode}

---

##### `useModuleReadme`<sup>Optional</sup> <a name="useModuleReadme" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.useModuleReadme"></a>

```typescript
public readonly useModuleReadme: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, will auto-import the readme form the Terraform odule used.

If this is set to true, users should not also set `readme_markdown_template`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#use_module_readme WaypointTemplate#use_module_readme}

---

##### `variableOptions`<sup>Optional</sup> <a name="variableOptions" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.variableOptions"></a>

```typescript
public readonly variableOptions: IResolvable | WaypointTemplateVariableOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>[]

List of variable options for the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#variable_options WaypointTemplate#variable_options}

---

### WaypointTemplateTerraformCloudWorkspaceDetails <a name="WaypointTemplateTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails.Initializer"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

const waypointTemplateTerraformCloudWorkspaceDetails: waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails.property.name">name</a></code> | <code>string</code> | Name of the Terraform Cloud Project. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId">terraformProjectId</a></code> | <code>string</code> | Terraform Cloud Project ID. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Terraform Cloud Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#name WaypointTemplate#name}

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId"></a>

```typescript
public readonly terraformProjectId: string;
```

- *Type:* string

Terraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#terraform_project_id WaypointTemplate#terraform_project_id}

---

### WaypointTemplateVariableOptions <a name="WaypointTemplateVariableOptions" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.Initializer"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

const waypointTemplateVariableOptions: waypointTemplate.WaypointTemplateVariableOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.name">name</a></code> | <code>string</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.variableType">variableType</a></code> | <code>string</code> | Variable type. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.options">options</a></code> | <code>string[]</code> | List of options. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.userEditable">userEditable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the variable is editable by the user creating an application. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#name WaypointTemplate#name}

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#variable_type WaypointTemplate#variable_type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

List of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#options WaypointTemplate#options}

---

##### `userEditable`<sup>Optional</sup> <a name="userEditable" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.userEditable"></a>

```typescript
public readonly userEditable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the variable is editable by the user creating an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/waypoint_template#user_editable WaypointTemplate#user_editable}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference <a name="WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

new waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput">terraformProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">terraformProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `terraformProjectIdInput`<sup>Optional</sup> <a name="terraformProjectIdInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput"></a>

```typescript
public readonly terraformProjectIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```typescript
public readonly terraformProjectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaypointTemplateTerraformCloudWorkspaceDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a>

---


### WaypointTemplateVariableOptionsList <a name="WaypointTemplateVariableOptionsList" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

new waypointTemplate.WaypointTemplateVariableOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.get"></a>

```typescript
public get(index: number): WaypointTemplateVariableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaypointTemplateVariableOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>[]

---


### WaypointTemplateVariableOptionsOutputReference <a name="WaypointTemplateVariableOptionsOutputReference" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer"></a>

```typescript
import { waypointTemplate } from '@cdktf/provider-hcp'

new waypointTemplate.WaypointTemplateVariableOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resetUserEditable">resetUserEditable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetUserEditable` <a name="resetUserEditable" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resetUserEditable"></a>

```typescript
public resetUserEditable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.optionsInput">optionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.userEditableInput">userEditableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.variableTypeInput">variableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.userEditable">userEditable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.variableType">variableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: string[];
```

- *Type:* string[]

---

##### `userEditableInput`<sup>Optional</sup> <a name="userEditableInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.userEditableInput"></a>

```typescript
public readonly userEditableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.variableTypeInput"></a>

```typescript
public readonly variableTypeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `userEditable`<sup>Required</sup> <a name="userEditable" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.userEditable"></a>

```typescript
public readonly userEditable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaypointTemplateVariableOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>

---



