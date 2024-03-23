# `waypointApplicationTemplate` Submodule <a name="`waypointApplicationTemplate` Submodule" id="@cdktf/provider-hcp.waypointApplicationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointApplicationTemplate <a name="WaypointApplicationTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template hcp_waypoint_application_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer"></a>

```typescript
import { waypointApplicationTemplate } from '@cdktf/provider-hcp'

new waypointApplicationTemplate.WaypointApplicationTemplate(scope: Construct, id: string, config: WaypointApplicationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig">WaypointApplicationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig">WaypointApplicationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails">putTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule">putTerraformNoCodeModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetReadmeMarkdownTemplate">resetReadmeMarkdownTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTerraformCloudWorkspaceDetails` <a name="putTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails"></a>

```typescript
public putTerraformCloudWorkspaceDetails(value: WaypointApplicationTemplateTerraformCloudWorkspaceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

---

##### `putTerraformNoCodeModule` <a name="putTerraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule"></a>

```typescript
public putTerraformNoCodeModule(value: WaypointApplicationTemplateTerraformNoCodeModule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetReadmeMarkdownTemplate` <a name="resetReadmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetReadmeMarkdownTemplate"></a>

```typescript
public resetReadmeMarkdownTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WaypointApplicationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct"></a>

```typescript
import { waypointApplicationTemplate } from '@cdktf/provider-hcp'

waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement"></a>

```typescript
import { waypointApplicationTemplate } from '@cdktf/provider-hcp'

waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource"></a>

```typescript
import { waypointApplicationTemplate } from '@cdktf/provider-hcp'

waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport"></a>

```typescript
import { waypointApplicationTemplate } from '@cdktf/provider-hcp'

waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WaypointApplicationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WaypointApplicationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WaypointApplicationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaypointApplicationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModule">terraformNoCodeModule</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference">WaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplateInput">readmeMarkdownTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetailsInput">terraformCloudWorkspaceDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModuleInput">terraformNoCodeModuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summary">summary</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `terraformCloudWorkspaceDetails`<sup>Required</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetails"></a>

```typescript
public readonly terraformCloudWorkspaceDetails: WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `terraformNoCodeModule`<sup>Required</sup> <a name="terraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModule"></a>

```typescript
public readonly terraformNoCodeModule: WaypointApplicationTemplateTerraformNoCodeModuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference">WaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `readmeMarkdownTemplateInput`<sup>Optional</sup> <a name="readmeMarkdownTemplateInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplateInput"></a>

```typescript
public readonly readmeMarkdownTemplateInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `terraformCloudWorkspaceDetailsInput`<sup>Optional</sup> <a name="terraformCloudWorkspaceDetailsInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetailsInput"></a>

```typescript
public readonly terraformCloudWorkspaceDetailsInput: IResolvable | WaypointApplicationTemplateTerraformCloudWorkspaceDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

---

##### `terraformNoCodeModuleInput`<sup>Optional</sup> <a name="terraformNoCodeModuleInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModuleInput"></a>

```typescript
public readonly terraformNoCodeModuleInput: IResolvable | WaypointApplicationTemplateTerraformNoCodeModule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `readmeMarkdownTemplate`<sup>Required</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplate"></a>

```typescript
public readonly readmeMarkdownTemplate: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointApplicationTemplateConfig <a name="WaypointApplicationTemplateConfig" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.Initializer"></a>

```typescript
import { waypointApplicationTemplate } from '@cdktf/provider-hcp'

const waypointApplicationTemplateConfig: waypointApplicationTemplate.WaypointApplicationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.name">name</a></code> | <code>string</code> | The name of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.summary">summary</a></code> | <code>string</code> | A brief description of the template, up to 110 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformNoCodeModule">terraformNoCodeModule</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a></code> | Terraform Cloud No-Code Module details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.description">description</a></code> | <code>string</code> | A description of the template, along with when and why it should be used, up to 500 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.labels">labels</a></code> | <code>string[]</code> | List of labels attached to this Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the Waypoint Application Template is located. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>string</code> | Instructions for using the template (markdown format supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

A brief description of the template, up to 110 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#summary WaypointApplicationTemplate#summary}

---

##### `terraformCloudWorkspaceDetails`<sup>Required</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformCloudWorkspaceDetails"></a>

```typescript
public readonly terraformCloudWorkspaceDetails: WaypointApplicationTemplateTerraformCloudWorkspaceDetails;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#terraform_cloud_workspace_details WaypointApplicationTemplate#terraform_cloud_workspace_details}

---

##### `terraformNoCodeModule`<sup>Required</sup> <a name="terraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformNoCodeModule"></a>

```typescript
public readonly terraformNoCodeModule: WaypointApplicationTemplateTerraformNoCodeModule;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

Terraform Cloud No-Code Module details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#terraform_no_code_module WaypointApplicationTemplate#terraform_no_code_module}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the template, along with when and why it should be used, up to 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#description WaypointApplicationTemplate#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

List of labels attached to this Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#labels WaypointApplicationTemplate#labels}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the Waypoint Application Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#project_id WaypointApplicationTemplate#project_id}

---

##### `readmeMarkdownTemplate`<sup>Optional</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.readmeMarkdownTemplate"></a>

```typescript
public readonly readmeMarkdownTemplate: string;
```

- *Type:* string

Instructions for using the template (markdown format supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#readme_markdown_template WaypointApplicationTemplate#readme_markdown_template}

---

### WaypointApplicationTemplateTerraformCloudWorkspaceDetails <a name="WaypointApplicationTemplateTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.Initializer"></a>

```typescript
import { waypointApplicationTemplate } from '@cdktf/provider-hcp'

const waypointApplicationTemplateTerraformCloudWorkspaceDetails: waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.name">name</a></code> | <code>string</code> | Name of the Terraform Cloud Workspace. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId">terraformProjectId</a></code> | <code>string</code> | Tetraform Cloud Project ID. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Terraform Cloud Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId"></a>

```typescript
public readonly terraformProjectId: string;
```

- *Type:* string

Tetraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#terraform_project_id WaypointApplicationTemplate#terraform_project_id}

---

### WaypointApplicationTemplateTerraformNoCodeModule <a name="WaypointApplicationTemplateTerraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.Initializer"></a>

```typescript
import { waypointApplicationTemplate } from '@cdktf/provider-hcp'

const waypointApplicationTemplateTerraformNoCodeModule: waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.source">source</a></code> | <code>string</code> | No-Code Module Source. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.version">version</a></code> | <code>string</code> | No-Code Module Version. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

No-Code Module Source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#source WaypointApplicationTemplate#source}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

No-Code Module Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#version WaypointApplicationTemplate#version}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference <a name="WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```typescript
import { waypointApplicationTemplate } from '@cdktf/provider-hcp'

new waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput">terraformProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">terraformProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `terraformProjectIdInput`<sup>Optional</sup> <a name="terraformProjectIdInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput"></a>

```typescript
public readonly terraformProjectIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```typescript
public readonly terraformProjectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaypointApplicationTemplateTerraformCloudWorkspaceDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

---


### WaypointApplicationTemplateTerraformNoCodeModuleOutputReference <a name="WaypointApplicationTemplateTerraformNoCodeModuleOutputReference" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer"></a>

```typescript
import { waypointApplicationTemplate } from '@cdktf/provider-hcp'

new waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaypointApplicationTemplateTerraformNoCodeModule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

---



