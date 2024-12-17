# `waypointAddOn` Submodule <a name="`waypointAddOn` Submodule" id="@cdktf/provider-hcp.waypointAddOn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointAddOn <a name="WaypointAddOn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on hcp_waypoint_add_on}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

new waypointAddOn.WaypointAddOn(scope: Construct, id: string, config: WaypointAddOnConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig">WaypointAddOnConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig">WaypointAddOnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.putAddOnInputVariables">putAddOnInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetAddOnInputVariables">resetAddOnInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAddOnInputVariables` <a name="putAddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.putAddOnInputVariables"></a>

```typescript
public putAddOnInputVariables(value: IResolvable | WaypointAddOnAddOnInputVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.putAddOnInputVariables.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>[]

---

##### `resetAddOnInputVariables` <a name="resetAddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetAddOnInputVariables"></a>

```typescript
public resetAddOnInputVariables(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WaypointAddOn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isConstruct"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

waypointAddOn.WaypointAddOn.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformElement"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

waypointAddOn.WaypointAddOn.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformResource"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

waypointAddOn.WaypointAddOn.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

waypointAddOn.WaypointAddOn.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WaypointAddOn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WaypointAddOn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WaypointAddOn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaypointAddOn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnDefinitionInputVariables">addOnDefinitionInputVariables</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList">WaypointAddOnAddOnDefinitionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariables">addOnInputVariables</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList">WaypointAddOnAddOnInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.installCount">installCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.outputValues">outputValues</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList">WaypointAddOnOutputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.readmeMarkdown">readmeMarkdown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.status">status</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformNoCodeModuleSource">terraformNoCodeModuleSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariablesInput">addOnInputVariablesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionIdInput">definitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionId">definitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addOnDefinitionInputVariables`<sup>Required</sup> <a name="addOnDefinitionInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnDefinitionInputVariables"></a>

```typescript
public readonly addOnDefinitionInputVariables: WaypointAddOnAddOnDefinitionInputVariablesList;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList">WaypointAddOnAddOnDefinitionInputVariablesList</a>

---

##### `addOnInputVariables`<sup>Required</sup> <a name="addOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariables"></a>

```typescript
public readonly addOnInputVariables: WaypointAddOnAddOnInputVariablesList;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList">WaypointAddOnAddOnInputVariablesList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installCount`<sup>Required</sup> <a name="installCount" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.installCount"></a>

```typescript
public readonly installCount: number;
```

- *Type:* number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `outputValues`<sup>Required</sup> <a name="outputValues" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.outputValues"></a>

```typescript
public readonly outputValues: WaypointAddOnOutputValuesList;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList">WaypointAddOnOutputValuesList</a>

---

##### `readmeMarkdown`<sup>Required</sup> <a name="readmeMarkdown" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.readmeMarkdown"></a>

```typescript
public readonly readmeMarkdown: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `terraformNoCodeModuleSource`<sup>Required</sup> <a name="terraformNoCodeModuleSource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.terraformNoCodeModuleSource"></a>

```typescript
public readonly terraformNoCodeModuleSource: string;
```

- *Type:* string

---

##### `addOnInputVariablesInput`<sup>Optional</sup> <a name="addOnInputVariablesInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.addOnInputVariablesInput"></a>

```typescript
public readonly addOnInputVariablesInput: IResolvable | WaypointAddOnAddOnInputVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>[]

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `definitionIdInput`<sup>Optional</sup> <a name="definitionIdInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionIdInput"></a>

```typescript
public readonly definitionIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `definitionId`<sup>Required</sup> <a name="definitionId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.definitionId"></a>

```typescript
public readonly definitionId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOn.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointAddOnAddOnDefinitionInputVariables <a name="WaypointAddOnAddOnDefinitionInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

const waypointAddOnAddOnDefinitionInputVariables: waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.name">name</a></code> | <code>string</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.value">value</a></code> | <code>string</code> | Variable value. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.variableType">variableType</a></code> | <code>string</code> | Variable type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#value WaypointAddOn#value}

---

##### `variableType`<sup>Optional</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#variable_type WaypointAddOn#variable_type}

---

### WaypointAddOnAddOnInputVariables <a name="WaypointAddOnAddOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

const waypointAddOnAddOnInputVariables: waypointAddOn.WaypointAddOnAddOnInputVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.name">name</a></code> | <code>string</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.value">value</a></code> | <code>string</code> | Variable value. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.variableType">variableType</a></code> | <code>string</code> | Variable type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#value WaypointAddOn#value}

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#variable_type WaypointAddOn#variable_type}

---

### WaypointAddOnConfig <a name="WaypointAddOnConfig" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

const waypointAddOnConfig: waypointAddOn.WaypointAddOnConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.applicationId">applicationId</a></code> | <code>string</code> | The ID of the Application that this Add-on is created for. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.definitionId">definitionId</a></code> | <code>string</code> | The ID of the Add-on Definition that this Add-on is created from. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.name">name</a></code> | <code>string</code> | The name of the Add-on. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.addOnInputVariables">addOnInputVariables</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>[]</code> | Input variables set for the add-on. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the Waypoint AddOn is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ID of the Application that this Add-on is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#application_id WaypointAddOn#application_id}

---

##### `definitionId`<sup>Required</sup> <a name="definitionId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.definitionId"></a>

```typescript
public readonly definitionId: string;
```

- *Type:* string

The ID of the Add-on Definition that this Add-on is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#definition_id WaypointAddOn#definition_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#name WaypointAddOn#name}

---

##### `addOnInputVariables`<sup>Optional</sup> <a name="addOnInputVariables" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.addOnInputVariables"></a>

```typescript
public readonly addOnInputVariables: IResolvable | WaypointAddOnAddOnInputVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>[]

Input variables set for the add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#add_on_input_variables WaypointAddOn#add_on_input_variables}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the Waypoint AddOn is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/waypoint_add_on#project_id WaypointAddOn#project_id}

---

### WaypointAddOnOutputValues <a name="WaypointAddOnOutputValues" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

const waypointAddOnOutputValues: waypointAddOn.WaypointAddOnOutputValues = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### WaypointAddOnAddOnDefinitionInputVariablesList <a name="WaypointAddOnAddOnDefinitionInputVariablesList" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

new waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.get"></a>

```typescript
public get(index: number): WaypointAddOnAddOnDefinitionInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables">WaypointAddOnAddOnDefinitionInputVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaypointAddOnAddOnDefinitionInputVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables">WaypointAddOnAddOnDefinitionInputVariables</a>[]

---


### WaypointAddOnAddOnDefinitionInputVariablesOutputReference <a name="WaypointAddOnAddOnDefinitionInputVariablesOutputReference" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

new waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resetVariableType">resetVariableType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVariableType` <a name="resetVariableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.resetVariableType"></a>

```typescript
public resetVariableType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableTypeInput">variableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableType">variableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables">WaypointAddOnAddOnDefinitionInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableTypeInput"></a>

```typescript
public readonly variableTypeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WaypointAddOnAddOnDefinitionInputVariables;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnDefinitionInputVariables">WaypointAddOnAddOnDefinitionInputVariables</a>

---


### WaypointAddOnAddOnInputVariablesList <a name="WaypointAddOnAddOnInputVariablesList" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

new waypointAddOn.WaypointAddOnAddOnInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.get"></a>

```typescript
public get(index: number): WaypointAddOnAddOnInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaypointAddOnAddOnInputVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>[]

---


### WaypointAddOnAddOnInputVariablesOutputReference <a name="WaypointAddOnAddOnInputVariablesOutputReference" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

new waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableTypeInput">variableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableType">variableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableTypeInput"></a>

```typescript
public readonly variableTypeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WaypointAddOnAddOnInputVariables;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnAddOnInputVariables">WaypointAddOnAddOnInputVariables</a>

---


### WaypointAddOnOutputValuesList <a name="WaypointAddOnOutputValuesList" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

new waypointAddOn.WaypointAddOnOutputValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.get"></a>

```typescript
public get(index: number): WaypointAddOnOutputValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WaypointAddOnOutputValuesOutputReference <a name="WaypointAddOnOutputValuesOutputReference" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer"></a>

```typescript
import { waypointAddOn } from '@cdktf/provider-hcp'

new waypointAddOn.WaypointAddOnOutputValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.sensitive">sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues">WaypointAddOnOutputValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.sensitive"></a>

```typescript
public readonly sensitive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WaypointAddOnOutputValues;
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOn.WaypointAddOnOutputValues">WaypointAddOnOutputValues</a>

---



