# `waypointAction` Submodule <a name="`waypointAction` Submodule" id="@cdktf/provider-hcp.waypointAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointAction <a name="WaypointAction" id="@cdktf/provider-hcp.waypointAction.WaypointAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action hcp_waypoint_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAction.WaypointAction.Initializer"></a>

```typescript
import { waypointAction } from '@cdktf/provider-hcp'

new waypointAction.WaypointAction(scope: Construct, id: string, config: WaypointActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig">WaypointActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.waypointAction.WaypointAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig">WaypointActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.putRequest">putRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAction.WaypointAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.waypointAction.WaypointAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointAction.WaypointAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAction.WaypointAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.waypointAction.WaypointAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.waypointAction.WaypointAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.waypointAction.WaypointAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.waypointAction.WaypointAction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointAction.WaypointAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.waypointAction.WaypointAction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.waypointAction.WaypointAction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAction.WaypointAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAction.WaypointAction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAction.WaypointAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.waypointAction.WaypointAction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointAction.WaypointAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointAction.WaypointAction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAction.WaypointAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRequest` <a name="putRequest" id="@cdktf/provider-hcp.waypointAction.WaypointAction.putRequest"></a>

```typescript
public putRequest(value: WaypointActionRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAction.WaypointAction.putRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-hcp.waypointAction.WaypointAction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WaypointAction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.waypointAction.WaypointAction.isConstruct"></a>

```typescript
import { waypointAction } from '@cdktf/provider-hcp'

waypointAction.WaypointAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAction.WaypointAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.waypointAction.WaypointAction.isTerraformElement"></a>

```typescript
import { waypointAction } from '@cdktf/provider-hcp'

waypointAction.WaypointAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAction.WaypointAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.waypointAction.WaypointAction.isTerraformResource"></a>

```typescript
import { waypointAction } from '@cdktf/provider-hcp'

waypointAction.WaypointAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAction.WaypointAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.waypointAction.WaypointAction.generateConfigForImport"></a>

```typescript
import { waypointAction } from '@cdktf/provider-hcp'

waypointAction.WaypointAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WaypointAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointAction.WaypointAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WaypointAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WaypointAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAction.WaypointAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaypointAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.request">request</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference">WaypointActionRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.requestInput">requestInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.request"></a>

```typescript
public readonly request: WaypointActionRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference">WaypointActionRequestOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.requestInput"></a>

```typescript
public readonly requestInput: IResolvable | WaypointActionRequest;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointAction.WaypointAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointActionConfig <a name="WaypointActionConfig" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.Initializer"></a>

```typescript
import { waypointAction } from '@cdktf/provider-hcp'

const waypointActionConfig: waypointAction.WaypointActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.name">name</a></code> | <code>string</code> | The name of the Action. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.request">request</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a></code> | The kind of HTTP request this should trigger. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.description">description</a></code> | <code>string</code> | A description of the Action. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the Action is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action#name WaypointAction#name}

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.request"></a>

```typescript
public readonly request: WaypointActionRequest;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a>

The kind of HTTP request this should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action#request WaypointAction#request}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action#description WaypointAction#description}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointAction.WaypointActionConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the Action is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action#project_id WaypointAction#project_id}

---

### WaypointActionRequest <a name="WaypointActionRequest" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequest.Initializer"></a>

```typescript
import { waypointAction } from '@cdktf/provider-hcp'

const waypointActionRequest: waypointAction.WaypointActionRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequest.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a></code> | Custom mode allows users to define the HTTP method, the request body, etc. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequest.property.custom"></a>

```typescript
public readonly custom: WaypointActionRequestCustom;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a>

Custom mode allows users to define the HTTP method, the request body, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action#custom WaypointAction#custom}

---

### WaypointActionRequestCustom <a name="WaypointActionRequestCustom" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom.Initializer"></a>

```typescript
import { waypointAction } from '@cdktf/provider-hcp'

const waypointActionRequestCustom: waypointAction.WaypointActionRequestCustom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom.property.method">method</a></code> | <code>string</code> | The HTTP method to use for the request. Must be one of: 'GET', 'POST', 'PUT', 'DELETE', or 'PATCH'. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom.property.body">body</a></code> | <code>string</code> | The body to be submitted with the request. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | Key value headers to send with the request. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom.property.url">url</a></code> | <code>string</code> | The full URL this request should make when invoked. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The HTTP method to use for the request. Must be one of: 'GET', 'POST', 'PUT', 'DELETE', or 'PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action#method WaypointAction#method}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

The body to be submitted with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action#body WaypointAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key value headers to send with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action#headers WaypointAction#headers}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The full URL this request should make when invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/waypoint_action#url WaypointAction#url}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointActionRequestCustomOutputReference <a name="WaypointActionRequestCustomOutputReference" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.Initializer"></a>

```typescript
import { waypointAction } from '@cdktf/provider-hcp'

new waypointAction.WaypointActionRequestCustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBody` <a name="resetBody" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaypointActionRequestCustom;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a>

---


### WaypointActionRequestOutputReference <a name="WaypointActionRequestOutputReference" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.Initializer"></a>

```typescript
import { waypointAction } from '@cdktf/provider-hcp'

new waypointAction.WaypointActionRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resetCustom">resetCustom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustom` <a name="putCustom" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.putCustom"></a>

```typescript
public putCustom(value: WaypointActionRequestCustom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a>

---

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.resetCustom"></a>

```typescript
public resetCustom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference">WaypointActionRequestCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.customInput">customInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.custom"></a>

```typescript
public readonly custom: WaypointActionRequestCustomOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustomOutputReference">WaypointActionRequestCustomOutputReference</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.customInput"></a>

```typescript
public readonly customInput: IResolvable | WaypointActionRequestCustom;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequestCustom">WaypointActionRequestCustom</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAction.WaypointActionRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaypointActionRequest;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointAction.WaypointActionRequest">WaypointActionRequest</a>

---



